<script lang="ts">
  let className: string = "";
  export let checked: boolean = false;
  export let label: string = "";
  export let element: HTMLElement = null;
  export let hasError: boolean = false;
  export let disabled: boolean = false;
  export { className as class };
</script>

<style lang="postcss">
  .error {
    @apply border-error text-error;
  }

  label::before {
    content: "";
    flex: 0 0 24px;
    @apply mr-micro block h-6 rounded
      border border-solid border-divider text-center leading-[1.1] text-transparent
      transition;
  }

  input:checked + label::before {
    background-image: url("/tick-dark.svg");
    @apply border border-solid border-orange-900 bg-orange-900 bg-center text-black;
  }

  label:hover::before,
  label:focus::before {
    @apply border-black;
  }

  .disabled {
    @apply pointer-events-none border-divider;
  }

  .error + label::before {
    @apply border-error text-error;
  }

  .disabled + label::before {
    @apply border-error text-error;
  }
</style>

<input
  class="absolute box-border hidden text-black {className}"
  class:error={hasError}
  class:disabled
  {disabled}
  id={label}
  bind:checked
  bind:this={element}
  on:change
  type="checkbox"
  {...$$restProps} />
{#if label}
  <label class="mt-1 mb-2 flex cursor-pointer text-dark-grey" for={label}
    >{@html label}</label>
{/if}
