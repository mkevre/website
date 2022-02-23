<script lang="ts">
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../utils/eventforwarder";
  import type { ButtonSizes, ButtonVariations } from "./button";
  let className: string = "";
  export { className as class };
  export let size: ButtonSizes = "medium";
  export let variant: ButtonVariations;
  export let disabled: boolean = false;

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<style lang="postcss">
  .primary {
    @apply bg-orange-900 hover:bg-brand-hover;
  }

  .secondary {
    @apply bg-pink-900 hover:bg-salmon-hover focus:bg-salmon-hover;
  }

  .cta {
    @apply bg-sand-dark hover:bg-orange-700 focus:bg-orange-700;
  }

  .tertiary {
    @apply bg-black text-white hover:bg-black-hover;
  }

  .white {
    @apply bg-off-white text-black hover:bg-white hover:text-black focus:bg-white focus:text-black;
  }

  .disabled {
    @apply pointer-events-none bg-sand-dark text-gray-800;
  }

  .medium {
    @apply rounded-xl py-2 px-6 text-btn-small leading-4;
  }

  .large {
    @apply min-w-[10rem] rounded-2xl py-3 px-8 text-p-medium leading-[1.25];
  }

  .small {
    @apply rounded-xl py-1 px-4 text-p-xsmall;
  }
</style>

<button
  use:forwardEvents
  {disabled}
  class:disabled
  class="inline-block bg-none text-center font-semibold text-black shadow-light transition-all duration-[50ms] {variant ===
  'unstyled'
    ? ''
    : variant} {size} {className}"
  {...$$restProps}>
  <slot name="image" />
  <slot />
</button>
