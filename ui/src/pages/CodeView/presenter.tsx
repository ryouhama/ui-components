import { CodeView, Paper } from "components";
import { VFC } from "react";

export const CodeViewPresenter: VFC = (props) => {
  return (
    <>
      <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
        <div>explain useage</div>
        <CodeView
          code={`
import { CodeView } from "components";

const Sample: VFC = () => {
  return <CodeView code={\`sample code\`}/>
}
        `}
        />
      </Paper>
    </>
  );
};
