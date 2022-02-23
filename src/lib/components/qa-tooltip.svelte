<script lang="ts">
  import Tooltip from "./tooltip.svelte";

  export let tooltip: string;
  export let text: string;
</script>

<Tooltip title={tooltip} class="inline-flex items-center">
  <span class="mr-macro whitespace-nowrap">{text}</span>
</Tooltip>
