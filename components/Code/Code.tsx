import React, { useState, useCallback } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Code.scss";

interface CodeProps {
  content: string;
  language?: string;
  showLineNumbers?: boolean;
}

const Code = ({ content, language = "TypeScript" }: CodeProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 10000);
  }, [content]);

  const lines = content.split("\n");

  return (
    <div className="code-snippet">
      <div className="code-header">
        {language && <span className="language">{language}</span>}
        <button className="copy-button" onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={vs2015}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
