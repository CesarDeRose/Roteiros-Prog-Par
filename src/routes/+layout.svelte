<script lang="ts">
  import MainHeader from "$lib/components/MainHeader.svelte";
  import ThemeInitializer from "$lib/components/ThemeInitializer.svelte";
  import { fly } from "svelte/transition";
  import "../app.css";
  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";

  interface Props {
    data: LayoutData;
    children?: Snippet;
  }

  let { data, children }: Props = $props();

  let pagePath = $derived(data.pathname);
</script>

<ThemeInitializer>
  <MainHeader />
  {#key pagePath}
    <main
      in:fly={{ y: -15, duration: 200, delay: 300 }}
      out:fly={{ y: 15, duration: 200 }}
      class="mx-auto max-w-5xl pt-24"
    >
      {@render children?.()}
    </main>
  {/key}
</ThemeInitializer>
