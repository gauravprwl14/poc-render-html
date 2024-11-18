import React, { useState, useEffect } from "react";
import HTMLRender from "./app/htmlRender";

interface AppProps {
  title?: string;
  content?: string;
  data?: any;
}

declare global {
  interface Window {
    __INITIAL_PROPS__?: any;
  }
}

const App: React.FC<AppProps> = (props) => {
  const [data, setData] = useState(props.data); // State for data
  const [loading, setLoading] = useState(true); // State for loader
  const [error, setError] = useState<string | null>(null); // State for error

  useEffect(() => {
    if (props.data) {
      setData(props.data);
      setLoading(false);
      return;
    }

    if (
      process.env.NODE_ENV === "production" &&
      typeof window !== "undefined" &&
      window.__INITIAL_PROPS__
    ) {
      try {
        const initialData = JSON.parse(window.atob(window.__INITIAL_PROPS__));
        window.__INITIAL_PROPS__ = undefined;

        // Remove the script tag containing `window.__INITIAL_PROPS__` after hydration
        const initialPropsScript = document.getElementById("hydration-script");
        if (initialPropsScript) {
          initialPropsScript.remove(); // Remove the script tag from the DOM
        }

        setData(initialData); // Update the state
        setLoading(false); // Stop the loader
      } catch (error) {
        console.error("Error parsing initial props:", error);
        setError("Failed to load initial props."); // Set error state
        setLoading(false); // Stop the loader
      }
    } else {
      import("./app/lib/KYCReports/sampleInput/input_2")
        .then((module) => {
          const initialData = module.sampleKYCResponse;
          console.log(
            "Development environment: sampleKYCResponse initialized",
            initialData
          );
          // TODO: fix the typescript error
          // @ts-ignore
          setData(initialData); // Update the state
          setLoading(false); // Stop the loader
        })
        .catch((error) => {
          console.error("Error loading script:", error);
          setError("Failed to load data."); // Set error state
          setLoading(false); // Stop the loader
        });
    }
  }, [props.data]); // Empty dependency array to ensure this runs once after mount

  return (
    <div>
      <h1>{props.title}</h1>
      <p className="text-red-400">{props.content}</p>
      {loading && <div className="loader">Loading...</div>} {/* Show loader */}
      {!loading && error && <div className="error-message">{error}</div>}{" "}
      {/* Show error if loading is complete but there's an error */}
      {!loading && !error && data && <HTMLRender data={data} />}{" "}
      {/* Show data */}
    </div>
  );
};

// Export both the component and the render function
export { App };

// This is the server-side render function
export default function PageRender(props: any) {
  return React.createElement(App, props);
}
