import type {
  MarkdownPost,
  MarkdownPostMetadataAndSlug
} from "../types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const postModules = import.meta.glob("../posts/*.md") as Record<
    string,
    () => Promise<MarkdownPost>
  >;

  const posts: MarkdownPostMetadataAndSlug[] = await Promise.all(
    Object.entries(postModules).map(async ([path, loadPost]) => {
      const post = await loadPost();
      const slug = path.split("/").at(-1)?.replace(".md", "") ?? "";

      return { slug, metadata: post.metadata };
    })
  );

  posts.sort(
    (firstPost, secondPost) =>
      new Date(secondPost.metadata.publishedAt).getTime() -
      new Date(firstPost.metadata.publishedAt).getTime()
  );

  return {
    posts
  };
};
