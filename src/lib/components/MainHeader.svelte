<script lang="ts">
  import { base } from "$app/paths";
  import DarkmodeButton from "./DarkmodeButton.svelte";
</script>

<header
  class="fixed inset-x-0 top-0 z-10 border-b
    bg-white dark:border-gray-800 dark:bg-dark-background"
>
  <nav
    class="mx-auto flex h-20 max-w-5xl
    items-center justify-between px-4"
  >
    <a class="text-xl font-semibold" href={`${base}/`}>Tutoriais</a>

    <DarkmodeButton />
  </nav>
</header>
