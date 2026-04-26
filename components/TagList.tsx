import type { Tag } from "../data/staticData.ts";

interface Props {
  tags: Tag[];
}

export function TagList({ tags }: Props) {
  const sorted = [...tags].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div class="tags">
      {sorted.map((tag) => <span key={tag.id} class="tag">{tag.name}</span>)}
    </div>
  );
}
