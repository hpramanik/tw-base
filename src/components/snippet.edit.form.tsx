'use client';

import { editSnippet } from '@/actions';
import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { useState } from 'react';

export function SnippetEditForm({
  snippet,
}: Readonly<{
  snippet: Snippet;
}>) {
  const [code, setCode] = useState<string>(snippet.code);
  const [title, setTitle] = useState<string>(snippet.title);
  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code, title);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <label htmlFor="title" className="w-12">
          Title
        </label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          id="title"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value ?? '');
          }}
        />
      </div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
