<script>
  import { intros } from "$lib/contents/local-development";

  import Section from "../section.svelte";
  import ComparisonGraphic from "./comparison-graphic.svelte";
  import ComparisonTable from "./comparison-table.svelte";
</script>

<style lang="postcss">
  .intros {
    max-width: 820px;
  }
  .intros :global(ul) {
    @apply list-disc pl-small;
  }
</style>

<Section>
  <div class="text-center">
    <h2>Meet Bob and Alice</h2>
    <p class="text-large">
      Let’s have a closer look on how desktop and cloud development
      differentiate.
    </p>
  </div>
  <div
    class="intros mx-auto mt-small flex flex-col items-center justify-between space-y-x-large lg:mt-x-large lg:flex-row lg:items-start lg:space-x-medium lg:space-y-0">
    {#each intros as { image, name, works, workflow, isHighlighted }}
      <div class="max-w-sm">
        <img src={image} alt={name} class="mx-auto h-56 w-56" />
        <div class="text-center">
          <h3 class="h4 mt-micro mb-macro">
            {name}
          </h3>
          <p>{works}</p>
        </div>
        <div
          class="mt-x-small rounded-2xl bg-white px-x-small py-xx-small shadow-normal"
          class:shadow-brand={isHighlighted}>
          {@html workflow}
        </div>
      </div>
    {/each}
  </div>

  <ComparisonTable />

  <ComparisonGraphic />
</Section>
