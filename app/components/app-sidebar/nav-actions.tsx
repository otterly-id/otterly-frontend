import { IconShare } from "@tabler/icons-react";
import { useParams } from "react-router";

import { Button } from "~/components/ui/button";

export function NavActions() {
  const { chatId } = useParams();

  return (
    <div className="flex items-center gap-2 text-sm">
      {chatId && (
        <Button variant="ghost" size="icon" className="size-7">
          <IconShare />
        </Button>
      )}
    </div>
  );
}
