<script lang="ts">
  import docsCurrentSectionStore from "$lib/stores/docs-current-section";
  import MenuLink from "./menu-link.svelte";

  import type { MenuEntry } from "$lib/types/menu-entry.type";
  import Pill from "$lib/components/pill.svelte";

  export let menuItem: MenuEntry;

  $: isActiveSection = $docsCurrentSectionStore
    ? menuItem.path.indexOf(
        /self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
          ? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, "latest")
          : $docsCurrentSectionStore
      ) >= 0
    : /\/docs\/?$/.test(menuItem.path);
</script>

<style lang="postcss">
  .isActiveSection {
    @apply rounded-2xl bg-white py-6 shadow-normal;
  }
</style>

<li data-analytics={`{"position":"sidebar"}`}>
  <div
    class:isActiveSection
    class="inline-block px-6 text-p-large leading-x-small">
    <MenuLink href={menuItem.path} class="text-large"
      >{menuItem.title}</MenuLink>
    {#if menuItem.subMenu && isActiveSection}
      <ul class="ml-4 mt-4 text-p-medium leading-x-small">
        {#each menuItem.subMenu as sub}
          <li
            class="flex flex-row items-center"
            data-analytics={`{"context":"submenu"}`}>
            <MenuLink href={sub.path}>{sub.title}</MenuLink>
            {#if sub.status}
              <Pill text={sub.status} class="ml-1.5" />
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</li>
