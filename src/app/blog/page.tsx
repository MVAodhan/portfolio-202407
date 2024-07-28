import MyCard from "@/my-components/Card";
import { devToUsername } from "../content";

export default async function Blog() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${devToUsername}`,
    { cache: "no-store" }
  );

  const posts = await res.json();

  return (
    <>
      <main className="flex h-full flex-col items-center justify-between">
        <section className="flex flex-col gap-5 items-center mt-24">
          <h2 className="text-3xl font-bold">Blog Posts</h2>
          <div className="w-full rounded flex flex-col gap-5">
            {posts.map((post: any, i: any) => (
              <MyCard
                key={i}
                title={post.title}
                description={post.description}
                url={post.url}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
