<script lang="ts">
  import PostListing from "$lib/components/PostListing.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Tutoriais</title>
  <meta name="description" content="Articles and notes." />
  <meta property="og:title" content="Tutoriais" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Articles and notes." />
</svelte:head>

<section class="pb-6">
  <header
    class="mx-4 mb-4 inline-block
    border-b py-2 dark:border-gray-700"
  >
    <h1 class="text-3xl font-semibold">Posts</h1>
  </header>

  <section class="divide-y dark:divide-gray-700">
    {#each data.posts as post}
      <PostListing {post} />
    {/each}
  </section>
</section>
