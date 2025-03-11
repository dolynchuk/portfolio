import React from "react";
import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
  const { is404 } = usePageContext();

  return (
    <>
      <>
        <h1>{is404 ? "Page Not Found" : "Something went wrong"}</h1>
        <h2>But you can still contact me here:</h2>
      </>
      <h3>
        <a href="https://calendly.com/dolinchuk2000/15min" target="_blank" rel="noopener noreferrer">
          Schedule call
        </a>
      </h3>
      <h3>
        <a href="https://www.linkedin.com/in/maksym-d-13283b110/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </h3>
    </>
  );
}
