import { VFC, useState } from "react";
import { IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  language?: string;
};

export const CodeView: VFC<Props> = (props) => {
  const { code, language = "typescript" } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <>
      <IconButton onClick={handleClick}>
        <CodeIcon />
      </IconButton>
      {isOpen && (
        <SyntaxHighlighter language={language} style={dark}>
          {code}
        </SyntaxHighlighter>
      )}
    </>
  );
};
