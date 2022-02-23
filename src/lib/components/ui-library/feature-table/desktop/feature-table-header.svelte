<script lang="ts">
  import type { FeatureTableHeader } from "../feature-table.types";

  export let isToc: boolean = false;
  export let headerData: FeatureTableHeader = { headline: "" };
</script>

<div class="flex h-36 flex-col items-center justify-center space-y-4">
  {#if !isToc}
    {#if headerData.image}
      <img
        src={headerData.image.path}
        alt={headerData.image.alt}
        class="h-10" />
    {/if}
    <div class="text-center">
      <h3>{headerData.headline}</h3>
      {#if headerData.subtitle}
        <p>{headerData.subtitle}</p>
      {/if}
    </div>
  {/if}
</div>
