import { VFC, PropsWithChildren } from "react";
import { Box } from "@mui/system";
import { CodeView, Flex, Paper } from "components";

export const FlexPresenter: VFC = () => {
  const roopList = ["もも太郎", "イヌ", "さる", "きじ"];

  return (
    <>
      <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
        <Flex flexDirection="row">
          {roopList.map((item, index) => (
            <MarginBox key={index}>{item}</MarginBox>
          ))}
        </Flex>
        <CodeView
          code={`
  <Flex flexDirection="row">
    <Item1 />
    <Item2 />
    <Item3 />
  </Flex>
        `}
        />
      </Paper>
      <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
        <Flex flexDirection="row-reverse">
          {roopList.map((item, index) => (
            <MarginBox key={index}>{item}</MarginBox>
          ))}
        </Flex>
        <CodeView
          code={`
  <Flex flexDirection="row-reverse">
    <Item1 />
    <Item2 />
    <Item3 />
  </Flex>`}
        />
      </Paper>
      <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
        <Flex flexDirection="column">
          {roopList.map((item, index) => (
            <MarginBox key={index}>{item}</MarginBox>
          ))}
        </Flex>
        <CodeView
          code={`
  <Flex flexDirection="columne">
    <Item1 />
    <Item2 />
    <Item3 />
  </Flex>`}
        />
      </Paper>
      <Paper variant="outlined" sx={{ margin: 2, padding: 2 }}>
        <Flex flexDirection="column-reverse">
          {roopList.map((item, index) => (
            <MarginBox key={index}>{item}</MarginBox>
          ))}
        </Flex>
        <CodeView
          code={`
  <Flex flexDirection="column-reverse">
    <Item1 />
    <Item2 />
    <Item3 />
  </Flex>`}
        />
      </Paper>
    </>
  );
};

const MarginBox: VFC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  return <Box sx={{ m: 2 }}>{children}</Box>;
};
