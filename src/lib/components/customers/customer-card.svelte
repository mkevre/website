<script lang="ts">
  export let card: {
    image: string;
    details: {
      industry: string;
      plan: string;
      people: {
        title: string;
        text: string;
      };
      website: {
        href: string;
        text: string;
      };
    };
  };

  const { image, details } = card;
</script>

<style lang="postcss">
  .text > div {
    width: 136px;
  }

  .h5 {
    @apply mb-macro font-bold text-black;
  }
</style>

<div
  class="min-w-fit max-w-xs overflow-hidden rounded-2xl bg-off-white shadow-xl sm:max-w-sm">
  <div
    class="h-60 bg-cover bg-center "
    style="background-image: url({image})" />
  <div
    class="text grid grid-cols-2 gap-y-xx-small gap-x-micro p-xx-small sm:gap-y-small sm:p-x-small">
    <div>
      <p class="h5">Industry</p>
      <p>{details.industry}</p>
    </div>
    <div>
      <p class="h5">Plan & Delivery</p>
      <p>{details.plan}</p>
    </div>
    <div>
      <p class="h5">{details.people.title}</p>
      <p>{details.people.text}</p>
    </div>
    <div>
      <p class="h5">Website</p>
      <p>
        <a href={details.website.href} target="_blank">
          {details.website.text}
        </a>
      </p>
    </div>
  </div>
</div>
