"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from "react";

type MarkdownContextProps = [string, Dispatch<SetStateAction<string>>];

const MarkdownContext = createContext<MarkdownContextProps | undefined>(
  undefined
);

export const MarkdownProvider = ({ children }: { children: ReactNode }) => {
  const [markdown, setMarkdown] = useState("");

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
      {children}
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);
  if (context === undefined) {
    throw new Error("usemarkdown must be used within an AppProvider");
  }
  return context;
};

export default MarkdownProvider;
