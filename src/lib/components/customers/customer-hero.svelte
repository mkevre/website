<script lang="ts">
  import CustomerCard from "./customer-card.svelte";

  export let title: string;
  export let text: string;
  export let textMaxWClass: string = "max-w-3xl";
  export let card: {
    image: string;
    details: {
      industry: string;
      plan: string;
      people: {
        title: string;
        text: string;
      };
      website: {
        href: string;
        text: string;
      };
    };
  };
</script>

<style lang="postcss">
  .h1 {
    @apply mb-micro md:mb-xx-small;
  }
</style>

<header
  class="mx-auto mt-small mb-x-large flex max-w-7xl flex-col items-center justify-between md:my-x-large lg:my-xx-large lg:flex-row">
  <div class="mb-small lg:mr-small lg:mb-0">
    <header class={textMaxWClass}>
      <p class="h5 mb-xx-small font-bold text-light-grey">Customer story</p>
      <h1 class="h1">{@html title}</h1>
    </header>
    <p class="text-large max-w-3xl">{text}</p>
  </div>
  <CustomerCard {card} />
</header>
