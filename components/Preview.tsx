"use client";
import ReactMarkdown from "react-markdown";
import { useMarkdown } from "@/context/MarkdownContext";
import remarkGfm from "remark-gfm";

const Preview = ({ className }: { className: string }) => {
  const [markdown] = useMarkdown();

  return (
    <div className={`markdown-preview ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Preview;
