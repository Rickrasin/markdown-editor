"use client";
import ReactMarkdown from "react-markdown";
import { useMarkdown } from "@/context/MarkdownContext";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const Preview = ({ className }: { className: string }) => {
  const [markdown] = useMarkdown();

  return (
    <ReactMarkdown
      className={`markdown ${className}`}
      remarkPlugins={[remarkBreaks, remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Preview;
