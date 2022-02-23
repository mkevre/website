<script lang="ts">
  import type { Card as CardType } from "$lib/types/card.type";
  import Card from "./card/card.svelte";

  export let cards: CardType[];
  export let headingLevel: "h3" | "h2" = "h2";
</script>

<div class="max-w-8xl mx-auto mt-small flex flex-wrap justify-center">
  {#each cards as card}
    <Card
      {card}
      class="mb-micro sm:mx-macro 2xl:mx-micro 2xl:mb-x-small"
      {headingLevel} />
  {/each}
</div>
