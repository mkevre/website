<script lang="ts">
  import { searchQuery } from "$lib/stores/quickstarts";
</script>

<div class="w-full">
  <div class="my-4 w-full rounded-2xl bg-white py-2 shadow-normal">
    <div class="relative flex items-center justify-items-start">
      <label for="quickstart-searchinput" class="sr-only">Search</label>
      <img
        class="pointer-events-none absolute top-1/2 left-3 h-xx-small w-xx-small -translate-y-1/2"
        src="/svg/mag-glass.svg"
        alt="Search"
        aria-hidden="true" />
      <input
        bind:value={$searchQuery}
        type="search"
        placeholder="Search Templates"
        id="quickstart-searchinput"
        class="box-border block h-small w-full border border-transparent py-2 pl-11 pr-3 text-p-medium leading-5 text-gray-600 placeholder-gray-500 focus:border-white focus:bg-none focus:text-gray-900 focus:outline-none focus:ring-white " />
    </div>
  </div>
</div>
