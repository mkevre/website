<script>
  import { quotes } from "$lib/contents/blog";
  import Carousel from "../carousel.svelte";
</script>

<style>
  div {
    scroll-snap-align: start;
    width: 500px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 320px;
    }
  }

  img {
    max-width: 200px;
  }
</style>

<section class="mt-large">
  <Carousel class="mb-small pr-44">
    {#each quotes as { text, author, jobTitle, companyLogo }}
      <div
        class="mb-micro w-96 overflow-hidden rounded-2xl bg-white p-x-small text-base text-black shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
        <p class="mb-small">{text}</p>
        <div>
          <span class="font-semibold">{author}</span>
          <br />
          <span>{jobTitle}</span>
        </div>
        <img src={companyLogo.src} alt={companyLogo.alt} class="mt-micro h-6" />
      </div>
    {/each}
  </Carousel>
</section>
