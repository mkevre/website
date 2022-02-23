<script lang="ts">
  import MenuSection from "./menu-section.svelte";
  import type { MenuEntry } from "$lib/types/menu-entry.type";
  export let MENU: MenuEntry[];
</script>

<ul
  class="sticky top-24 max-h-[calc(100vh-6rem)] space-y-8 self-start overflow-auto pb-10">
  {#each MENU as menuItem}
    <MenuSection {menuItem} />
  {/each}
</ul>
