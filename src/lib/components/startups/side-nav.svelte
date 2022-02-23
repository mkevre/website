<script lang="ts">
  import { onMount } from "svelte";
  export let froms: string[];
  const refs = [];

  onMount(() => {
    setTimeout(() => {
      document.body.style.overflowX = "initial";
      document.documentElement.style.scrollBehavior = "smooth";
    }, 500);

    return () => {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.scrollBehavior = "initial";
    };
  });
</script>

<style lang="postcss">
  .parent {
    position: -webkit-sticky;
    max-width: 120px;

    @media (max-width: 1140px) {
      max-width: 105px;
    }

    @media (max-width: 768px) {
      max-width: 73px;
    }

    @media (max-width: 400px) {
      max-width: 57px;
    }

    @media (max-width: 340px) {
      @apply hidden;
    }
  }
</style>

<div class="parent sticky top-28 z-10 sm:top-36">
  <div class="inline-flex flex-col bg-gray-200 sm:mt-large">
    {#each froms as from, index}
      <a
        bind:this={refs[index]}
        href="#{from}"
        class="sidenav-link border-l-4 border-solid border-divider px-macro py-micro text-h5 font-semibold hover:border-orange-900 active:border-orange-900 sm:px-x-small"
        on:click={() => {
          refs.forEach((r) => r.classList.remove("border-orange-900"));
          refs[index].classList.add("border-orange-900");
        }}>{from}</a>
    {/each}
  </div>
</div>
