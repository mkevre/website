<script lang="ts">
  import type { ShareLink } from "$lib/types/share-link.type";

  export let text: string;
  export let shareLinks: ShareLink[];
  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  h2 {
    @apply mb-0 text-h6;
  }
</style>

<div class="flex flex-col items-center md:flex-row {clazz}">
  <h2 class="h5 md:mr-micro">{text}</h2>
  <div class="mt-micro flex space-x-macro md:mt-0">
    {#each shareLinks as link}
      <a
        href={link.href}
        rel="noreferrer"
        target="_blank"
        data-analytics={`{"variant":"social_media","context":"` +
          link.alt.toLowerCase() +
          `_share"}`}
        class="p-1 md:p-0.5">
        <img src={link.icon} alt={link.alt} class="h-10 w-10 md:h-7 md:w-7" />
      </a>
    {/each}
  </div>
</div>
