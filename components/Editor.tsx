"use client";
import { useMarkdown } from "@/context/MarkdownContext";

const Editor = ({ className }: { className: string }) => {
  const [markdown, setMarkdown] = useMarkdown();

  const updateMarkdown = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setMarkdown(value);
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
