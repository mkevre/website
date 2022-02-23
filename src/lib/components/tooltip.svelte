<script lang="ts">
  import { createPopperActions } from "svelte-popperjs";

  const [popperRef, popperContent] = createPopperActions();

  const popperOptions = {
    placement: "top-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: ({ placement }) => {
            if (placement === "top-start") return [-8, 8];
            return [8, 8];
          },
        },
      },
    ],
  } as any;

  let clazz = "";
  export { clazz as class };

  export let title: string = "";
  let isRendered: boolean = false;
</script>

<style lang="postcss">
  .tooltip {
    @apply z-50 w-auto rounded-xl bg-[#565252] py-macro px-2.5 text-xs font-normal normal-case text-off-white;

    &::before {
      content: "";
      @apply absolute left-0 -z-10 block h-10 w-full;
      bottom: -60%;
    }
  }

  .tooltip :global(a) {
    @apply text-off-white;
  }
  .arrow,
  .arrow::before {
    @apply absolute h-3 w-3 bg-inherit;
  }

  .arrow {
    @apply invisible;
  }

  .arrow::before {
    @apply visible;
    content: "";
    transform: rotate(45deg);
  }
</style>

<span
  on:mouseleave={() => {
    isRendered = false;
  }}>
  <button
    on:mouseover={() => (isRendered = true)}
    on:focus={() => {
      isRendered = true;
    }}
    on:blur={() => {
      isRendered = false;
    }}
    class={clazz}>
    <slot />

    <img
      use:popperRef
      src="/svg/question-mark.svg"
      alt="Tooltip"
      class="h-5 w-5" />
  </button>

  {#if isRendered}
    <div class="tooltip" use:popperContent={popperOptions}>
      {@html title}
      <div class="arrow -z-10" data-popper-arrow />
    </div>
  {/if}
</span>
