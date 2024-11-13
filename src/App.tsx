import React from "react";
import HTMLRender from "./app/htmlRender";

interface AppProps {
  title?: string;
  content?: string;
  data?: any;
}

const App: React.FC<AppProps> = (props) => {
  console.log("props", { props });

  return (
    <div>
      <h1>{props.title}</h1>
      <p className="text-red-400">{props.content}</p>
      <HTMLRender data={props.data} />
    </div>
  );
};

// Export both the component and the render function
export { App };

// This is the server-side render function
export default function PageRender(props: any) {
  return React.createElement(App, props);
}
