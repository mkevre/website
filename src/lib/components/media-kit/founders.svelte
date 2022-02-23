<script lang="ts">
  import Section from "../section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";

  const imgSrc = "/images/media-kit/founders.jpg";
</script>

<Section class="text-center">
  <h2 class="mb-small">The founders</h2>
  <div
    class="mb-small rounded-4xl bg-white p-small shadow-normal sm:mb-x-large sm:p-x-large">
    <img src={imgSrc} alt="Gitpod founders group" class="mx-auto rounded-4xl" />
    <p class="py-xx-small">Download founders group picture</p>
    <LinkButton variant="cta" size="large" href={imgSrc} download
      >PNG</LinkButton>
  </div>
  <p class="text-large">
    Please <a href="/contact/support">contact us</a> for any intended use not covered
    by these guidelines.
  </p>
</Section>
