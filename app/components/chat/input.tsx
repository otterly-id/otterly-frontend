import { IconPlus, IconWorld } from "@tabler/icons-react";
import { type FormEventHandler, useState } from "react";

import {
  AIInput,
  AIInputButton,
  AIInputSubmit,
  AIInputTextarea,
  AIInputToolbar,
  AIInputTools,
} from "../ui/kibo-ui/ai/input";

export function ChatInput() {
  const [text, setText] = useState<string>("");
  const [status, setStatus] = useState<
    "submitted" | "streaming" | "ready" | "error"
  >("ready");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!text) {
      return;
    }
    setStatus("submitted");
    setTimeout(() => {
      setStatus("streaming");
    }, 200);
    setTimeout(() => {
      setStatus("ready");
    }, 2000);
  };

  return (
    <AIInput onSubmit={handleSubmit}>
      <AIInputTextarea
        placeholder="Where do you want to live?"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <AIInputToolbar>
        <AIInputTools>
          <AIInputButton>
            <IconPlus size={16} />
          </AIInputButton>
          <AIInputButton>
            <IconWorld size={16} />
            <span>Search</span>
          </AIInputButton>
        </AIInputTools>
        <AIInputSubmit disabled={!text} status={status} />
      </AIInputToolbar>
    </AIInput>
  );
}
