import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    // Dynamically create the Calendly script tag and append it to the document head
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={import.meta.env.VITE_DATA_URL}
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default Calendly;
