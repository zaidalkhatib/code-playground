import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled as ContralledEditor} from "react-codemirror2";
const Editer = ({displayName, language, value, onChange}) => {
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editer-container">
      <div className="editor-title">{displayName}</div>
      <ContralledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editer;
