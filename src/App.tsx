import React from "react";
import HTMLRender from "./app/htmlRender";

interface AppProps {
  title?: string;
  content?: string;
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className="text-red-400">{props.content}</p>
      <HTMLRender data={props} />
    </div>
  );
};

// Export both the component and the render function
export { App };

// This is the server-side render function
export default function PageRender(data: AppProps) {
  return React.createElement(App, data);
}
