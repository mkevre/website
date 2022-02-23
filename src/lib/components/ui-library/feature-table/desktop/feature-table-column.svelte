<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import FeatureTableItem from "./feature-table-item.svelte";
  import type { FeatureTableColumn } from "../feature-table.types";

  export let featureData: FeatureTableColumn;

  const shadow = featureData.isHighlighted ? "shadow-brand" : "shadow-normal";
</script>

<div class="bg-[#f9f9f9] p-4 {shadow} rounded-3xl">
  <FeatureTableHeader headerData={featureData.header} />
  <section
    class="inner-grid-desktop grid auto-rows-[3.75rem] grid-cols-1 border-t-2 border-divider pt-4">
    {#each featureData.items as item}
      <FeatureTableItem definition={item} />
    {/each}
    {#if featureData.link}
      <div class="flex items-start justify-center">
        <LinkButton
          variant={featureData.isHighlighted ? "primary" : "cta"}
          size="large"
          href={featureData.link.href}>{featureData.link.label}</LinkButton>
      </div>
    {/if}
  </section>
</div>
