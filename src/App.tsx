import React, { Children } from "react";
import HTMLRender from "./app/htmlRender";

interface AppProps {
  title?: string;
  content?: string;
  data?: any;
}

// const Parent = ({ children, data }: any) => {
//   return <div>{children}</div>;
// };

const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className="text-red-400">{props.content}</p>
      {props.data && <HTMLRender data={props.data} />}
    </div>
  );
};

// Export both the component and the render function
export { App };

// This is the server-side render function
export default function PageRender(props: any) {
  return React.createElement(App, props);
}
