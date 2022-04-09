import { createContext, useContext } from "react";

type SideBarContextProps = {
  isSelected: (path: string) => boolean;
};

export const SideBarContext = createContext<SideBarContextProps | null>(null);

export const useSideBarContext = () => {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error(
      "This component must be rendered within an `SideBarContext` component."
    );
  }

  return context;
};
