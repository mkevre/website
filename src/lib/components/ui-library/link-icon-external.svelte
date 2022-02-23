<script lang="ts">
  export let href: string;
  export let icon: string;
</script>

<style lang="postcss">
  a,
  span {
    /* Move to markup once src/lib/assets/markdown-commons.scss is gone */
    @apply leading-4;
  }
</style>

<a
  class="inline-flex rounded-xl bg-off-white py-2 px-4 text-center text-btn-small font-semibold leading-4 text-black shadow-light hover:bg-white focus:bg-white"
  {href}
  target="_blank"
  rel="noopener"
  ><span class="">{icon}</span>
  <img
    class="my-0 mx-2 inline-block h-3 w-3"
    src="/svg/external.svg"
    alt="External" /><slot /></a>
