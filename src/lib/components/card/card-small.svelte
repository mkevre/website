<script lang="ts">
  import Base from "./base.svelte";
  import type { Card } from "$lib/types/card.type";
  export let card: Card;
</script>

<Base
  {card}
  {...$$restProps}
  class="rounded-2xl p-x-small {$$restProps.class}"
  titleClassNames="h5"
  styles="max-width: 315px" />
