<script lang="ts">
  import type { ImageBox } from "$lib/types/image-box.type";
  import LinkButton from "$lib/components/ui-library/link-button";
  export let image: ImageBox;
  const { src, alt, text, btnText, imgClass } = image;
</script>

<div
  class="mb-micro max-w-2xl rounded-4xl bg-white py-small px-micro shadow-normal sm:mb-large sm:p-small">
  <img {src} {alt} class="m-auto h-auto w-full rounded md:h-72 {imgClass}" />
  <p class="mx-auto mt-small mb-micro max-w-sm">Download {text}</p>
  <LinkButton variant="cta" size="large" href={src} download
    >{btnText}</LinkButton>
</div>
