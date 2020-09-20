import React, {useState, useEffect} from "react";
import Editer from "./Editer";
import "./index.css";

function App() {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `<html> <body>${html}</bodu> <style>${css}</style> </html>  <script>${js}</script>`
      );
    }, 300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [html, css, js]);
  return (
    <div>
      <>
        <div className="pane top-pane">
          <Editer
            value={html}
            onChange={setHtml}
            language="xml"
            displayName="HTML"
          />
          <Editer
            value={css}
            onChange={setCss}
            language="css"
            displayName="CSS"
          />
          <Editer
            value={js}
            onChange={setJs}
            language="javascript"
            displayName="JavaScript"
          />
        </div>
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            frameBorder="0"
            height="100%"
          />
        </div>
      </>
    </div>
  );
}

export default App;
