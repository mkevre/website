<script lang="ts">
  import type { Pricing } from "$lib/types/pricing.type";
  import QaTooltip from "../qa-tooltip.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";

  export let pricing: Pricing;
  const {
    title,
    duration,
    features,
    price,
    btnHref,
    btnText,
    spiced,
    learnMoreHref,
    footnote,
    trackingName,
  } = pricing;
</script>

<style lang="postcss">
  .box {
    width: 295px;
    padding-bottom: 85px;

    @media (max-width: 375px) {
      @apply w-full;
    }
  }

  .h1 {
    margin-bottom: 0.25rem;
  }

  li::before {
    content: url("/tick.svg");
    @apply absolute -left-7 inline-block sm:-left-9;
    height: 1.375rem;
    width: 1.375rem;

    @media (max-width: 375px) {
      @apply h-5 w-5;
    }
  }

  .learn-more {
    @apply underline;
  }

  :global(.crossed-out) {
    @apply line-through;
  }

  :global(.price-small),
  :global(.crossed-out) {
    @apply mr-macro text-h4 text-gray-800;
  }
</style>

<div
  class={`box flex flex-col justify-between items-center bg-gray-100 pt-small px-0 mt-0 mx-macro 2xl:mx-micro mb-x-small rounded-2xl shadow-normal text-center transition-all duration-200 hover:shadow-brand ${
    spiced ? "spiced shadow-brand" : ""
  }`}>
  <div class="flex min-h-full flex-col">
    <h2 class="h4">{title}</h2>
    <div class="h1 flex items-center justify-center font-bold text-black">
      {@html price}
    </div>
    <div class="font-semibold text-dark-grey">
      {#if duration}
        {duration}
      {:else}
        <span>&nbsp;</span>
      {/if}
    </div>
    {#if features}
      <ul
        class="ml-x-small mt-xx-small inline-flex flex-col space-y-micro text-left">
        {#each features as feature}
          <li class="relative inline-flex text-black">
            {#if typeof feature !== "string"}
              <QaTooltip text={feature.text} tooltip={feature.tooltip} />
            {:else}
              {feature}
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
    {#if learnMoreHref}
      <div class="flex flex-1 items-center justify-center">
        <a href={learnMoreHref} class="learn-more">Learn More</a>
      </div>
    {/if}
  </div>
  {#if btnHref && btnText}
    <LinkButton
      variant={spiced ? "primary" : "cta"}
      size="large"
      href={btnHref}
      data-analytics={`{"context":"` + trackingName + `","position":"hero"}`}
      >{btnText}</LinkButton>
  {/if}
  {#if footnote}
    <div class="px-small text-p-xsmall text-gray-800">{footnote}</div>
  {/if}
</div>
