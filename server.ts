import { Request, Response } from "express";
import "@babel/register";
import ReactDOMServer from "react-dom/server";
import PageRender from "./src/App";
import fs from "fs";
import path from "path";
import express from "express";
import * as dotenv from "dotenv";
import { sampleKYCResponse } from "./src/app/lib/KYCReports/sampleInput/input_2";
// Load the environment variables based on the `NODE_ENV`
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const app = express();
const port = 3010;

app.use(express.static(path.resolve(__dirname, "build")));
app.use(express.static(path.resolve(__dirname, "public")));

app.use(express.json());

// Function to find CSS file with hash
const findHashedFile = (
  directory: string,
  prefix: string,
  extension: string
) => {
  const files = fs.readdirSync(directory);
  const hashedFile = files.find(
    (file) => file.startsWith(prefix) && file.endsWith(extension)
  );
  return hashedFile;
};

app.post("/data", (req: Request, res: Response) => {
  let data = req.body;
  data = sampleKYCResponse;
  const appHtml = ReactDOMServer.renderToStaticMarkup(PageRender({ data }));
  const encodedData = Buffer.from(JSON.stringify(data)).toString("base64");

  // Read the HTML template file
  let htmlTemplate = fs.readFileSync(
    path.resolve(
      __dirname,
      process.env.BUILD_PATH ? process.env.BUILD_PATH : "public",
      "index.html"
    ),
    "utf-8"
  );
  // Find and read the hashed CSS file
  const cssDirectory = path.resolve(__dirname, "build", "static", "css");
  const cssFileName = findHashedFile(cssDirectory, "main", ".css");
  // const cssContent = cssFileName
  //   ? fs.readFileSync(path.resolve(cssDirectory, cssFileName), "utf-8")
  //   : "";

  // Find and read the hashed JS file
  const jsDirectory = path.resolve(__dirname, "build", "static", "js");
  const mainJsFile = findHashedFile(jsDirectory, "main", ".js");
  // const jsContent = mainJsFile
  //   ? fs.readFileSync(path.resolve(jsDirectory, mainJsFile), "utf-8")
  //   : "";

  // Inject CSS, and rendered app HTML into the template
  let renderedHtml = htmlTemplate
    .replace(
      "</head>",
      `<link rel="stylesheet" type="text/css" href="./static/css/${cssFileName}"></head>`
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Add JS files and hydration script before closing body tag
  if (mainJsFile) {
    const hydrateData = `<script id="hydration-script">
              window.__INITIAL_PROPS__ = "${encodedData}";
            </script>`;
    const jsScripts = `<script src="./static/js/${mainJsFile}"></script>`;
    renderedHtml = renderedHtml.replace(
      "</body>",
      `${hydrateData} \n ${jsScripts}</body>`
    );
  }

  // OUTPUT Directory
  const outputDirectory = path.resolve(__dirname, "output");
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  // Write the rendered HTML to a render.html if not exists then create one
  fs.writeFileSync(path.resolve(outputDirectory, "render.html"), renderedHtml);

  console.log("process.env.BUILD_PATH", { env: process.env });

  if (process.env.BUILD_PATH) {
    console.log("Copying static folder to output directory");
    // write the code to copy the static folder present inside the build path to the output directory
    const staticSrcPath = path.resolve(process.env.BUILD_PATH, "static");
    const staticDestPath = path.resolve(outputDirectory, "static");

    if (fs.existsSync(staticSrcPath)) {
      fs.mkdirSync(staticDestPath, { recursive: true });

      const copyRecursiveSync = (src: string, dest: string) => {
        const entries = fs.readdirSync(src, { withFileTypes: true });

        entries.forEach((entry) => {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);

          if (entry.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyRecursiveSync(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        });
      };

      copyRecursiveSync(staticSrcPath, staticDestPath);
    }
  }

  // // OUTPUT Directory
  // const outputDirectory = path.resolve(__dirname, "output");
  // if (!fs.existsSync(outputDirectory)) {
  //   fs.mkdirSync(outputDirectory);
  // }
  // // Write the rendered HTML to a render.html if not exists then create one
  // fs.writeFileSync(path.resolve(outputDirectory, "render.html"), renderedHtml);

  // Send the rendered HTML to the client
  res.send(renderedHtml);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
