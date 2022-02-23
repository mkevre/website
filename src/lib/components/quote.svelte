<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let quote: string;
  export let author: { name: string; jobTitle: string };

  const { name, jobTitle } = author;
</script>

<style lang="postcss">
  [class|="kumquat"] {
    @apply absolute;
  }

  .kumquat-left {
    @apply top-24 -left-12 -z-10 h-16 lgx:-left-24 lgx:h-32 lgx:w-36;

    @media (max-width: 800px) {
      @apply hidden;
    }
  }

  .kumquat-right {
    @apply -right-16 bottom-0 -z-10 h-20 lgx:-right-32 lgx:-bottom-10 lgx:h-36 lgx:w-44;

    @media (max-width: 800px) {
      @apply hidden;
    }
  }
</style>

<div
  class="relative flex max-w-4xl items-start rounded-5xl bg-white py-x-small px-micro text-left shadow-xl sm:p-small md:mx-auto {clazz}">
  <img
    src="/images/startups/kumquat-left.png"
    alt="Gitpod Kumquat"
    class="kumquat-left" />
  <img src="/svg/quotation-mark.svg" alt="Left Quotation Mark" />
  <div class="mt-x-small">
    <p class="h3 font-bold text-black">
      {@html quote}”
    </p>
    <p class="mt-x-small">
      <span class="font-semibold text-black">{name},</span>
      {jobTitle}
    </p>
  </div>

  <img
    src="/images/startups/kumquat-right.png"
    alt="Gitpod Kumquat"
    class="kumquat-right" />
</div>
