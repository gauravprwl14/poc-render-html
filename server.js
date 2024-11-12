require("@babel/register")({
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
    ],
});

const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { default: PageRender } = require("./src/App.tsx");
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const port = 3010;

app.use(express.static(path.resolve(__dirname, "build")));
app.use(express.static(path.resolve(__dirname, "public")));

app.use(express.json());

// Function to find CSS file with hash
const findHashedFile = (
    directory,
    prefix,
    extension
) => {
    const files = fs.readdirSync(directory);
    const hashedFile = files.find(
        (file) => file.startsWith(prefix) && file.endsWith(extension)
    );
    return hashedFile;
};

app.post("/data", (req, res) => {
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

    // Inject both the CSS and rendered app HTML into the template
    let renderedHtml = htmlTemplate
        .replace("</head>", `<style>${cssContent}</style></head>`)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    console.log("jsDirectory: ", jsDirectory);
    console.log("mainJsFile: ", mainJsFile);
    // console.log("runtimeJsFile: ", runtimeJsFile);
    //   <script src="/static/js/${runtimeJsFile}"></script>

    // Add JS files before closing body tag
    if (mainJsFile) {
        const jsScripts = `
      <script src="../build/static/js/${mainJsFile}"></script>
    `;
        console.log("jsScripts: ", jsScripts);
        renderedHtml = renderedHtml.replace("</body>", `${jsScripts}</body>`);
    }

    // Send the rendered HTML to the client
    res.send(renderedHtml);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 