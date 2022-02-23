<script lang="ts">
  import FeatureTableToc from "./desktop/feature-table-toc.svelte";
  import FeatureTableColumn from "./desktop/feature-table-column.svelte";
  import type { FeatureTable } from "./feature-table.types";
  import FeatureTableColumnMobile from "./mobile/feature-table-column-mobile.svelte";
  export let tableData: FeatureTable;

  const colMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };
</script>

<div class="mb-8 hidden gap-4 md:grid {colMap[tableData.columns.length + 1]}">
  <FeatureTableToc tocData={tableData.toc} />
  {#each tableData.columns as col}
    <FeatureTableColumn featureData={col} />
  {/each}
</div>
<div class="grid grid-cols-1 justify-center gap-4 md:hidden">
  <div class="w-full space-y-8">
    {#each tableData.columns as col}
      <FeatureTableColumnMobile featureData={col} />
    {/each}
  </div>
</div>
