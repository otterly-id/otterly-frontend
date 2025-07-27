import { KostCard } from "~/components/card/kost";
import { ChatInput } from "~/components/chat/input";
import { allKosts } from "~/constants/dummy";

export function StartChatSection() {
  return (
    <div className="flex w-full flex-col items-center gap-48 py-32">
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-8">
        <h1 className="font-semibold text-2xl">
          <span className="font-bold text-primary">Hi, Yuma!</span> Find your
          perfect kost with us.
        </h1>
        <ChatInput />
      </div>
      <div className="flex flex-col items-center gap-8">
        <h2 className="font-semibold text-2xl">
          Check our kost recommendations!
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {allKosts.map(({ id, ...kost }) => (
            <KostCard key={id} orientation="Vertical" kost={kost} />
          ))}
        </div>
      </div>
    </div>
  );
}
