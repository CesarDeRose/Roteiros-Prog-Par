<script lang="ts">
  import { base } from "$app/paths";
  import type { MarkdownPostMetadataAndSlug } from "../../types";
  import { formatPublishedAt } from "$lib/utils/dates";

  interface Props {
    post: MarkdownPostMetadataAndSlug;
  }

  let { post }: Props = $props();

  let href = $derived(`${base}/posts/${post.slug}/`);
</script>

<article class="p-4">
  <div>
    <a {href}>
      <h3 class="mb-1 text-xl font-medium">
        {post.metadata.title}
      </h3>
      <p class="text-gray-60 font-light dark:text-gray-300">
        <span>Published: </span>
        <time datetime={post.metadata.publishedAt}>
          {formatPublishedAt(post.metadata.publishedAt)}
        </time>
      </p>

      <p class="py-2 font-light">
        {post.metadata.summary}
      </p>
    </a>

    <div
      class="font-light text-gray-600 underline dark:text-gray-300"
    >
      <a {href}>Read More</a>
    </div>
  </div>
</article>
