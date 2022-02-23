<script type="ts">
  import Section from "../section.svelte";
  export let bannerImg: string;
  export let text: string;
</script>

<style lang="postcss">
  :global(nav.toc) {
    @apply hidden;
  }

  :global(blockquote) {
    @apply rounded-none border-l-4 border-orange-900 bg-transparent py-0 pl-xx-small sm:m-small !important;
  }

  :global(blockquote) :global(p) {
    @apply text-h6 font-semibold text-black !important;
  }

  :global(code) {
    @apply rounded-xl bg-orange-700 px-macro py-1;
  }
</style>

<Section>
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="h2">Full customer story</h2>
    <p>{text}</p>
  </div>

  <div class="prose mx-auto mt-x-large max-w-3xl">
    <div
      class="mb-small h-36 rounded-t-2xl bg-cover bg-center"
      style="background-image: url({bannerImg});" />
    <slot />
  </div>
</Section>
