<script>
  import Section from "../section.svelte";

  let text =
    "As Alice automates the configuration setup by using Gitpod she is ready to code within seconds, while it can take up to days for Bob.";
</script>

<style>
  @media (max-width: 980px) {
    div:last-of-type {
      flex: 0 0 60%;
    }
  }
</style>

<Section
  class="mx-auto flex max-w-lg flex-col items-center rounded-2xl bg-white py-small px-xx-small shadow-normal sm:rounded-5xl sm:px-small md:max-w-6xl md:flex-row md:p-0">
  <div class="p-0 md:pl-small lgx:py-0 lgx:pl-large">
    <h3 class="h3">Ready within seconds when working in the cloud</h3>
    <p class="text-large">
      {text}
    </p>
  </div>
  <div class="max-w-xl pt-micro md:px-small md:py-x-small lgx:max-w-2xl">
    <img
      class="hidden md:block"
      src="/images/local-development/comparison.png"
      alt={text} />
    <img
      class="mx-auto max-h-96 md:hidden"
      src="/images/local-development/comparison-mobile.png"
      alt={text} />
  </div>
</Section>
