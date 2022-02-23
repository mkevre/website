<script lang="ts">
  export let value: string;
  let className: string = "";
  export let name: string = "";
  export let label: string = "";
  export let element: HTMLElement = null;
  export let hasError: boolean = false;
  //TODO ADD Eventforwarder
  export { className as class };
</script>

<style lang="postcss">
  .error {
    @apply border-error text-error;
  }
</style>

{#if label}
  <label
    class="mb-2 block cursor-pointer text-dark-grey"
    class:error={hasError}
    for={label}>{@html label}</label>
{/if}
<textarea
  id={label}
  on:change
  bind:value
  bind:this={element}
  class:error={hasError}
  class="box-border w-full resize-none whitespace-pre-wrap rounded-lg border-[1px] border-divider bg-transparent py-2 px-4 text-[#000000] placeholder:text-dark-grey {className}"
  {...$$restProps} />
{#if hasError}
  <legend class:error={hasError} class="mt-1 mb-2 block text-xs"
    >Please fill out the {name ? name : ""} field</legend>
{/if}
