<script>
  import { brands } from "$lib/contents/blog";

  import Section from "../section.svelte";
</script>

<Section
  class="rounded-2xl bg-off-white px-small pt-small text-center shadow-normal">
  <div class="mt-small flex flex-wrap justify-around">
    {#each brands as { logo, alt }}
      <div class="mb-small flex w-32 justify-center">
        <img src="/{logo}" {alt} class="h-7 w-28" />
      </div>
    {/each}
  </div>
</Section>
