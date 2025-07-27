import { KostCard } from "~/components/card/kost";
import { allKosts } from "~/constants/dummy";

export function ArtifactSection() {
  return (
    <div className="flex flex-col items-center gap-8 border-l p-8">
      {allKosts.map(({ id, ...kost }) => (
        <KostCard key={id} orientation="Horizontal" kost={kost} />
      ))}
    </div>
  );
}
