"use client";
import React, { useState } from "react";
import { useMarkdown } from "@/context/MarkdownContext";

const Editor = ({ className }: { className: string }) => {
  const [markdown, setMarkdown] = useMarkdown();
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);

  const getWordsCount = (str: string | null) => {
    return str?.match(/(\w+)/g)?.length || 0;
  };

  const getCharsCount = (str: string | null) => {
    return str?.length ?? 0;
  };

  const updateMarkdown = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    console.log(value);

    setMarkdown(value);
    setWords(getWordsCount(value));
    setChars(getCharsCount(value));
  };

  //   const downloadFile = () => {
  //     const link = document.createElement("a");
  //     const file = new Blob([markdown], { type: "text/plain" });
  //     link.href = URL.createObjectURL(file);
  //     link.download = "markdown.md";
  //     link.Click();
  //     URL.revokeObjectURL(link.href);
  //   };

  return (
    <textarea
      value={markdown}
      onChange={updateMarkdown}
      className={className}
    />
  );
};

export default Editor;
