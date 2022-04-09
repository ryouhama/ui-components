import {
  VFC,
  PropsWithChildren,
  useState,
  useCallback,
  useEffect,
} from "react";
import { SizeType } from "./type";
import { ApplicationLayoutContext } from "./context";

type Porps = {};

export const ApplicationLayout: VFC<PropsWithChildren<Porps>> = (props) => {
  const { children } = props;

  const [size, setSize] = useState<SizeType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeEvent = useCallback(() => {
    window.addEventListener("resize", () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, [setSize]);

  useEffect(() => {
    resizeEvent();
  }, [resizeEvent]);

  const contextValue = { size: size, setSize: setSize };

  return (
    <ApplicationLayoutContext.Provider value={contextValue}>
      {children}
    </ApplicationLayoutContext.Provider>
  );
};
