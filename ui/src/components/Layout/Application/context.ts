import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { SizeType } from "./type";

type ApplicationLayoutContextProps = {
  size: SizeType;
  setSize: Dispatch<SetStateAction<SizeType>>;
};

export const ApplicationLayoutContext =
  createContext<ApplicationLayoutContextProps | null>(null);

export const useApplicationLayoutContext = () => {
  const context = useContext(ApplicationLayoutContext);

  if (!context) {
    throw new Error(
      "This component must be rendered within an `ApplicationLayoutContext` component."
    );
  }

  return context;
};
