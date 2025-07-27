import { ArtifactSection } from "./components/artifact";
import { ChatSection } from "./components/chat";

export default function ChatDetails() {
  return (
    <div className="grid w-full grid-cols-2">
      <ChatSection />
      <ArtifactSection />
    </div>
  );
}
