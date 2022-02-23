<script>
  import Section from "../section.svelte";
  import ColorBox from "./color-box.svelte";
</script>

<Section>
  <h2 class="mb-small text-center">Primary colors</h2>
  <div class="mb-small flex flex-wrap justify-around">
    <ColorBox colorName="Sand light" colorValue="#f5f4f4" />
    <ColorBox colorName="Kumquat" colorValue="#FFB45B" />
    <ColorBox colorName="Black" colorValue="#12100C" isDark={true} />
  </div>
  <img
    src="/svg/media-kit/gradient.svg"
    alt="Gitpod Brand Gradient"
    class="m-auto mt-large w-72 sm:w-96 md:mt-x-large" />
</Section>
