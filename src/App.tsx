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
  let data = props.data;
  if (
    process.env.NODE_ENV === "production" &&
    typeof window !== "undefined" &&
    window.__INITIAL_PROPS__
  ) {
    try {
      let initialData = JSON.parse(window.atob(window.__INITIAL_PROPS__));
      window.__INITIAL_PROPS__ = undefined;

      // Remove the script tag containing `window.__INITIAL_PROPS__` after hydration
      delete window.__INITIAL_PROPS__; // Clear the data from `window` object
      const initialPropsScript = document.getElementById("hydration-script");
      if (initialPropsScript) {
        initialPropsScript.remove(); // Remove the script tag from the DOM
      }
      data = initialData;
    } catch (error) {
      console.error("Error parsing initial props:", error);
    }
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className="text-red-400">{props.content}</p>
      {data && <HTMLRender data={data} />}
    </div>
  );
};

// Export both the component and the render function
export { App };

// This is the server-side render function
export default function PageRender(props: any) {
  return React.createElement(App, props);
}
