<script lang="ts">
  import FeatureTableItemMobile from "./feature-table-item-mobile.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import FeatureTableHeaderMobile from "./feature-table-header-mobile.svelte";
  import type { FeatureTableColumn } from "../feature-table.types";

  export let featureData: FeatureTableColumn;

  const shadow = featureData.isHighlighted ? "shadow-brand" : "shadow-normal";

  let isShown: boolean = false;
</script>

<div class="bg-off-white p-x-small {shadow} mx-auto max-w-[400px] rounded-3xl">
  <FeatureTableHeaderMobile headerData={featureData.header} bind:isShown>
    {#if isShown}
      <section
        class="inner-grid-mobile mb-4 grid auto-rows-[4rem] grid-cols-1 gap-8 pt-4">
        {#each featureData.items as item}
          <FeatureTableItemMobile definition={item} />
        {/each}
        {#if featureData.link}
          <div class="flex items-center justify-center">
            <LinkButton
              size="large"
              href={featureData.link.href}
              variant={featureData.isHighlighted ? "primary" : "cta"}
              >{featureData.link.label}</LinkButton>
          </div>
        {/if}
      </section>
    {/if}
  </FeatureTableHeaderMobile>
</div>
