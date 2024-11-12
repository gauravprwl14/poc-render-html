import { Request, Response } from "express";
import "@babel/register";
import React from "react";
import ReactDOMServer from "react-dom/server";
import PageRender from "./src/App";
import fs from "fs";
import path from "path";
import express from "express";

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
  const data = req.body;
  const appHtml = ReactDOMServer.renderToString(PageRender(data));

  // Read the HTML template file
  const htmlTemplate = fs.readFileSync(
    path.resolve(__dirname, "public", "index.html"),
    "utf-8"
  );

  // Find and read the hashed CSS file
  const cssDirectory = path.resolve(__dirname, "build", "static", "css");
  const cssFileName = findHashedFile(cssDirectory, "main", ".css");

  let cssContent = "";
  if (cssFileName) {
    const cssPath = path.resolve(cssDirectory, cssFileName);
    cssContent = fs.readFileSync(cssPath, "utf-8");
  }

  // Find the JS files
  const jsDirectory = path.resolve(__dirname, "build", "static", "js");
  const mainJsFile = findHashedFile(jsDirectory, "main", ".js");
  // const runtimeJsFile = findHashedFile(jsDirectory, "runtime", ".js");
  // <script src="/static/js/${runtimeJsFile}"></script>

  // Inject CSS, JS, and rendered app HTML into the template
  let renderedHtml = htmlTemplate
    .replace("</head>", `<style>${cssContent}</style></head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Add JS files before closing body tag
  if (mainJsFile) {
    const jsScripts = `
      <script src="../build/static/js/${mainJsFile}"></script>
      
    `;
    renderedHtml = renderedHtml.replace("</body>", `${jsScripts}</body>`);
  }

  // Send the rendered HTML to the client
  res.send(renderedHtml);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
