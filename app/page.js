import { blocksMap } from "./blocksMap";

export const revalidate = 3600;

export default async function Home() {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/home?populate[blocks][on][whatwedo.what-we-do][populate][service_card][populate]=*&populate[blocks][on][hero.hero][populate]=*&populate[blocks][on][edge.edge][populate]=*`,
    { next: { tags: ["home"] } }
  );
  const { data } = await res.json();
  console.log("🚀 ~ Home ~ data:", data)
  const blocks = data.blocks;
  console.log("🚀 ~ Home ~ blocks:", blocks)

  return blocks.map(b => {
    const Comp = blocksMap[b.__component];
    const uniqueKey = `${b.__component}-${b.id}`;
    return Comp ? <Comp key={uniqueKey} data={b} /> : null;
  });
}
