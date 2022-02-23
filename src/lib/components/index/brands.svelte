<script>
  import { brands } from "$lib/contents/home";
  import Brand from "./brand.svelte";
</script>

<style>
  .brands {
    max-width: 1130px;
  }
</style>

<div
  class="brands mx-auto mt-x-small flex flex-wrap items-center justify-center">
  {#each brands as brand}
    <div class="md:w-1/5">
      <Brand {brand} />
    </div>
  {/each}
</div>
<div class="mt-8">
  View&nbsp;<a href="/customers"
    ><span class="underline">customer stories</span></a>
</div>
