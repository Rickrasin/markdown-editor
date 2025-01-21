import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 w-full h-full  overflow-auto">
      <div className="flex-grow ">
        <div className="flex flex-col px-4 py-3 bg-color-200 dark:bg-color-900 text-color-700 dark:text-color-400 border-r border-color-300 dark:border-color-600  duration-300">
          <p className="heading-S text-color-500 dark:text-color-400">
            MARKDOWN
          </p>
        </div>
        <div className="flex-grow flex flex-col h-full border-r bg-color-100 dark:bg-color-1000 border-color-300 dark:border-color-600 duration-300">
          <Editor className="flex-grow px-4 pt-4 bg-color-100 dark:bg-color-1000 text-color-700 dark:text-color-400 markdown-code w-full border-none outline-none appearance-none background-none resize-none duration-300" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between px-4 py-3 bg-color-200 dark:bg-color-900 text-color-700 dark:text-color-400 duration-300">
          <p className=" heading-S text-color-500 dark:text-color-400">
            PREVIEW
          </p>
          <button>
            <Image
              src="/icon-show-preview.svg"
              width={16}
              height={11.2}
              alt="show preview icon"
            />
          </button>
        </div>
        <div className="flex-grow flex flex-col h-full">
          <Preview className="flex-grow h-full px-4 pt-4  bg-color-100 dark:bg-color-1000 text-color-700 dark:text-color-400 w-full duration-300" />
        </div>
      </div>
    </div>
  );
}
