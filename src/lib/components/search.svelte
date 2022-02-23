<script lang="ts">
  export let value: string;
  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  input {
    @apply border-none;
  }
</style>

<div
  class="relative mx-auto mb-12 max-w-lg rounded-xl bg-white pl-6 shadow-normal sm:pl-7 {clazz}">
  <label for="search" class="sr-only">Search</label>
  <img
    class="pointer-events-none absolute top-1/2 left-3 h-xx-small w-xx-small -translate-y-1/2"
    src="/svg/mag-glass.svg"
    alt="Search"
    aria-hidden="true" />
  <input
    type="text"
    placeholder="Search"
    bind:value
    id="search"
    class="box-border block h-small w-full border border-transparent py-2 pl-12 pr-3 text-p-medium leading-5 text-gray-600 placeholder-gray-500 focus:border-white focus:bg-none focus:text-gray-900 focus:outline-none focus:ring-white" />
</div>
