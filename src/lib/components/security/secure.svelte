<script>
  import { secureParagraphs } from "$lib/contents/security";
  import Section from "../section.svelte";
</script>

<Section>
  <header>
    <img
      src="/svg/security/lock.svg"
      alt="Secure"
      class="mx-auto mb-xx-small" />
    <h2 class="text-center">Secure by design.</h2>
  </header>
  <div
    class="mt-small flex flex-col space-y-large pb-large lg:flex-row lg:space-y-0 lg:space-x-large">
    {#each secureParagraphs as p}
      <p class="mx-auto max-w-md lg:w-1/3">
        {p}
      </p>
    {/each}
  </div>
</Section>
