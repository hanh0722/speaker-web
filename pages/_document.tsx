import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <div id="destination"></div>
        <div id="portal"></div>
        <div id="modal"></div>
        <div id="tooltip"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
