<script lang="ts">
  import type { FeatureTableHeader } from "../feature-table.types";

  export let headerData: FeatureTableHeader;
  const toggleIsShown = () => {
    isShown = !isShown;
  };
  export let isShown: boolean;
</script>

<div class="mb-x-small flex flex-col items-center justify-center">
  <div
    class="flex w-64 flex-col items-center justify-center space-y-4 border-b-2 border-divider pb-x-small">
    {#if headerData.image}
      <img
        src={headerData.image.path}
        alt={headerData.image.alt}
        class="h-10" />
    {/if}
    <div class="text-center ">
      <h3>{headerData.headline}</h3>
      {#if headerData.subtitle}
        <p>{headerData.subtitle}</p>
      {/if}
    </div>
  </div>
  <slot />
  <button class="w-64 pt-x-small" on:click={() => toggleIsShown()}>
    <div class="underline">
      {#if isShown}
        Hide Features
      {:else}
        View all Features
      {/if}
    </div>
    <img
      src="/arrow.svg"
      alt="Arrow Toggle"
      class="mx-auto mt-macro h-6 w-6 duration-200"
      class:rotate-180={isShown} />
  </button>
</div>
