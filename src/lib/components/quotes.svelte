<script lang="ts">
  import type { Quote } from "$lib/types/quote.type";
  export let quotes: Quote[];
  let selectedQuote: Quote = quotes[0];
  import LinkButton from "$lib/components/ui-library/link-button";

  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  .quotes {
    max-width: 1000px !important;
  }

  .square {
    @apply max-w-[50%] rounded-3xl md:max-w-[65%];
  }
</style>

<div
  class="quotes mx-auto rounded-2xl bg-off-white px-0 pt-micro shadow-normal sm:rounded-5xl sm:px-xx-small sm:pt-x-small sm:pb-micro lg:p-small {clazz}">
  <div class="mx-auto flex max-w-3xl flex-wrap justify-around">
    {#each quotes as quote}
      <button
        class="group mx-xx-small flex justify-center py-3 sm:mx-micro"
        on:mouseenter={() => (selectedQuote = quote)}
        on:click={() => (selectedQuote = quote)}>
        <img
          src={quote.companyLogo.src}
          alt={quote.companyLogo.alt}
          class="h-7 w-20 transition group-hover:opacity-100 group-hover:filter-none group-focus:opacity-100 group-focus:filter-none sm:h-9 sm:w-28"
          class:opacity-60={selectedQuote !== quote}
          class:grayscale={selectedQuote !== quote} />
      </button>
    {/each}
  </div>
  <div
    class="mt-xx-small h-auto flex-wrap items-center justify-center text-center md:flex md:h-[400px] md:text-left">
    <div class="w-full md:w-1/2">
      <img
        src={selectedQuote.img.src}
        alt={selectedQuote.img.alt}
        class:square={selectedQuote.img.square}
        class="mx-auto w-full sm:rounded-3xl" />
    </div>
    <div
      class="text flex w-full flex-1 flex-col justify-center py-xx-small px-xx-small sm:pl-x-small md:w-1/2 lg:pl-small lg:pr-0">
      <p class="text-large">
        &ldquo;{selectedQuote.text}&rdquo;
      </p>

      <p class="mt-xx-small font-bold">
        {selectedQuote.author}, {selectedQuote.jobTitle}
      </p>

      {#if selectedQuote.link}
        <div class="mt-xx-small">
          <LinkButton
            href={selectedQuote.link.href}
            variant="tertiary"
            size="medium">{selectedQuote.link.text}</LinkButton>
        </div>
      {/if}
    </div>
  </div>
</div>
