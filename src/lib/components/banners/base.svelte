<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  let clazz = "";
  let dateNow = new Date(Date.now());
  export { clazz as class };
  export let storageKey: string;
  export let startDate: Date = new Date("2021-01-01");
  export let endDate: Date = new Date("2021-01-02");
  export let location: "top" | "bottom" = "top";

  let showBanner = false;

  const closeBanner = () => {
    showBanner = false;
    window.localStorage.setItem(storageKey, "true");
    if (clazz === "announcement-banner") {
      document.body.classList.remove("banner-is-shown");
    }
  };

  onMount(() => {
    showBanner = !window.localStorage.getItem(storageKey);
    if (clazz === "announcement-banner") {
      let isWithinTheDates = startDate < dateNow && dateNow < endDate;
      if (isWithinTheDates && showBanner) {
        document.body.classList.add("banner-is-shown");
      } else if (!isWithinTheDates || !showBanner) {
        closeBanner();
      }
    }
  });
</script>

<style lang="postcss">
  :global(.banner-is-shown) :global(main > div:first-child) {
    @apply mt-small;
  }

  .top {
    @apply top-0;
  }

  .bottom {
    @apply fixed bottom-0 z-10;
  }
</style>

{#if showBanner}
  <div
    transition:slide
    class="{location} flex w-full items-center justify-between bg-sand-dark px-4 py-2 text-xs shadow-sm sm:text-sm md:text-base">
    <slot {closeBanner} />
  </div>
{/if}
