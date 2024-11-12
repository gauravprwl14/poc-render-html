require("@babel/register")({
  extensions: [".js", ".jsx", ".ts", ".tsx"],
});
const { default: PageRender } = require("./src/App.tsx");
const fs = require("fs");
const path = require("path");
const express = require("express");
const ReactDOMServer = require("react-dom/server");

const app = express();
const port = 3010;

app.use(express.static(path.resolve(__dirname, "build")));

app.use(express.json());

app.post("/data", (req, res) => {
  const data = req.body;
  const appHtml = ReactDOMServer.renderToString(PageRender(data));

  console.log("appHtml 123", { appHtml });

  // Read the HTML template file
  const htmlTemplate = fs.readFileSync(
    path.resolve(__dirname, "public", "index.html"),
    "utf-8"
  );

  // Inject the rendered app HTML into the template
  const renderedHtml = htmlTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  // Send the rendered HTML to the client
  res.send(renderedHtml);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
