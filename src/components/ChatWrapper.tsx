"use client";

import { useChat } from "ai/react";

export const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
  });

  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        {JSON.stringify(messages)}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          value={input}
          onChange={handleInputChange}
          type="text"
        />
        <button
          type="submit"
          className="bg-blue-500 text-black rounded-r-lg px-4 py-2 hover:bg-blue-600 "
        >
          Send
        </button>
      </form>
    </div>
  );
};
