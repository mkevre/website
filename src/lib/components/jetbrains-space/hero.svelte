<script>
  import Section from "../section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<style lang="postcss">
  :global(section.hero) {
    @apply lg:mb-52 !important;
  }

  .h1 {
    @apply mb-micro md:mb-xx-small;
  }

  .text-box {
    max-width: 645px;
  }

  p {
    max-width: 547px;
  }

  img {
    transform: translateX(25%) translateY(-40%);
    width: 40vw;
  }
</style>

<Section class="hero relative pb-x-large text-center lg:pb-0 lg:text-left">
  <div class="text-box mx-auto lg:mx-0 lg:pt-x-large">
    <h1 class="h1">Gitpod vs JetBrains Space</h1>
    <p class="text-large mx-auto max-w-lg lg:mx-0">
      Gitpod is the vendor neutral, open-source platform that integrates with
      your individual stack including all JetBrains IDEs.
    </p>
    <LinkButton
      class="mt-x-small"
      variant="primary"
      size="large"
      href="/#get-started"
      on:click={() =>
        window.analytics.track("product_cta_clicked", {
          context: "hero",
          destination: "#get-started",
        })}>Try Now</LinkButton>
  </div>
  <img
    class="absolute right-0 top-1/2 -z-10 hidden max-w-2xl lg:block"
    src="/images/jetbrains-space/git-providers.png"
    alt="Git Providers" />
</Section>
