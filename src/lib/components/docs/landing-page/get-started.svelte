<script lang="ts">
  import GetStartedItem from "./get-started-item.svelte";
  import { getStartedItems } from "$lib/contents/docs/landing-page/get-started";
</script>

<div class="mb-16 grid grid-cols-1 gap-2 md:grid-cols-3">
  {#each getStartedItems as item}
    <GetStartedItem getStartedItem={item} />
  {/each}
</div>
