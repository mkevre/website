<script lang="ts">
  export let title: string;
</script>

<style lang="postcss">
  ul {
    @media (max-width: 500px) {
      flex: 0 0 34%;
    }
  }
</style>

<ul class="mb-xx-small min-w-min space-y-macro md:mb-0">
  <li class="font-semibold text-black">{title}</li>
  <slot />
</ul>
