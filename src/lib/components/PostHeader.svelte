<script lang="ts">
  import type { MarkdownPost } from "../../types";
  import { formatPublishedAt } from "$lib/utils/dates";

  interface Props {
    metadata: MarkdownPost["metadata"];
  }

  let { metadata }: Props = $props();
</script>

<header class="p-4">
  <div>
    <h1 class="mb-4 text-4xl font-bold">
      {metadata.title}
    </h1>

    <div class="inline-block border-t py-2 dark:border-gray-700">
      <span>Published: </span>
      <time class="font-light" datetime={metadata.publishedAt}>
        {formatPublishedAt(metadata.publishedAt)}
      </time>
    </div>
  </div>
</header>
