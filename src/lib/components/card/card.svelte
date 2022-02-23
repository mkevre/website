<script lang="ts">
  import Base from "./base.svelte";
  import type { Card } from "$lib/types/card.type";
  export let card: Card;
</script>

<Base
  {card}
  {...$$restProps}
  class="rounded-5xl py-small px-x-small {$$restProps.class}" />
