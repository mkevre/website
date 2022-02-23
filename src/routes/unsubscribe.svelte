<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import OpenGraph from "$lib/components/open-graph.svelte";
  import GitpodIllustration from "$lib/components/gitpod-illustration.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const footer: HTMLElement = document.querySelector('[data-id="footer"]');
    footer.style.display = "none";
  });
</script>

<style lang="postcss">
  section {
    @apply mt-x-large pb-0 sm:mt-large;
  }

  .h4 {
    @apply mb-micro mt-0 text-h4 !important;
  }
</style>

<OpenGraph
  data={{
    title: "Unsubscribed",
    description: "",
    norobots: true,
  }} />

<section
  class="mb-medium rounded-2xl bg-off-white p-xx-small text-center shadow-xl sm:mx-8 sm:py-small sm:px-x-small md:p-medium">
  <h1 class="h4">Unsubscribed</h1>
  <p class="text-large mx-auto max-w-2xl">
    You have been sucessfully unsubscribed. If you would like to revert it,
    please go to <a
      href="https://gitpod.io/notifications"
      target="_blank"
      rel="nofollow">gitpod.io/notifications</a
    >.
  </p>
  <GitpodIllustration />
</section>
