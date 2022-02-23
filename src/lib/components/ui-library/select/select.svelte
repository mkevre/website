<script lang="ts">
  let className: string = "";

  export { className as class };
  export let options: string[];
  export let value: string;
  export let placeholder: string = "";
  export let hasError: boolean = false;
  export let label: string = "";
  export let element: HTMLElement = null;
</script>

<style lang="postcss">
  select {
    background-position: right 1em top 50%, 0 0;
    background-image: url("/arrow-grey.svg");
    background-size: 1.25em auto, 100%;
    background-repeat: no-repeat, repeat;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  .error {
    @apply border-error text-error;
  }
</style>

{#if label}
  <label class:error={hasError} class="mb-2 block text-dark-grey" for={label}
    >{@html label}</label>
{/if}
<select
  class:error={hasError}
  bind:this={element}
  id={label}
  class="box-border w-full appearance-none rounded-lg border-[1px] border-divider bg-off-white px-4 py-2  text-black {className}"
  name="cloudInfrastructure"
  bind:value
  on:change
  {...$$restProps}>
  <option disabled class="text-gray-800" value="">{placeholder}</option>
  {#each options as option}
    <option value={option}>
      {option}
    </option>
  {/each}
</select>

{#if hasError}
  <legend class:error={hasError} class="mt-1 mb-2 block text-xs text-dark-grey"
    >Please select a value</legend>
{/if}
