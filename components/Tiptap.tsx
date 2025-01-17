"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import { Extension } from "@tiptap/core";
import data from "@/data.json";

import Text from "@tiptap/extension-text";

const CustomTab = Extension.create({
  name: "customTab",

  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.insertContent("    ") // Insere 4 espaços
    };
  }
});

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document.configure({
        HTMLAttributes: {
          class: ""
        }
      }),

      Paragraph.configure({
        HTMLAttributes: {
          class: ""
        }
      }),
      Text,
      CustomTab
    ],
    // register extensions
    editorProps: {
      attributes: {
        class: "markdown-code "
      }
    },

    content: data[1].content
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
