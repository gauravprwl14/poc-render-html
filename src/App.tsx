// import React from "react";
// import HTMLRender from "./app/htmlRender";
// import { renderToString } from "react-dom/server";
// import "./App.css";

// function App({ data }) {
//   return <HTMLRender data={data}></HTMLRender>;
// }

// export const PageRender = (data) => {
//   // const appHtml = renderToString(React.createElement(App, { data }));
//   console.log("appHtml", { appHtml });
//   const htmlString = renderToString(<App data={data} />);
//   return htmlString;
// };

// export default App;

import React from "react";
import HTMLRender from "./app/htmlRender";

interface AppProps {
  // Add your data props interface here
  // For example:
  title?: string;
  content?: string;
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      {/* Render your data here */}
      <h1>{props.title}</h1>
      <p className="text-red-400">{props.content}</p>
      <HTMLRender data={props}></HTMLRender>;
    </div>
  );
};

// This is the server-side render function
export default function PageRender(data: AppProps) {
  return <App {...data} />;
}
