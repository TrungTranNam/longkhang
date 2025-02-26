import { createContext, useContext, useRef, ReactNode, RefObject } from "react";

interface ScrollContextType {
  sectionRefs: Record<string, RefObject<HTMLDivElement>>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const sectionRefs = {
    slideSection : useRef<HTMLDivElement>(null),
    shoppingSection: useRef<HTMLDivElement>(null),
    footerSection: useRef<HTMLDivElement>(null)
  }

  return (
    <ScrollContext.Provider value={{ sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
