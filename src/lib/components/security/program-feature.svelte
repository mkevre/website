<script lang="ts">
  import type { ProgramFeature } from "$lib/types/program-feature.type";

  export let feature: ProgramFeature;
  const { title, paragraphs, image } = feature;
</script>

<style>
  div {
    max-width: 400px;
  }
</style>

<div
  class="mb-micro rounded-4xl bg-white px-9 py-medium shadow-normal md:mb-small">
  <img src="/svg/security/{image}" alt={title} class="mx-auto" />
  <h3 class="mt-xx-small mb-small text-center">{title}</h3>
  {#each paragraphs as p}
    <p>{@html p}</p>
  {/each}
</div>
