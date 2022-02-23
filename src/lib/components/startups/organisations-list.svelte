<script lang="ts">
  export let organisations: { name: string; url: string }[];
</script>

<style lang="postcss">
  ul {
    max-width: 250px;
    @apply mx-auto whitespace-nowrap;

    @media (max-width: 540px) {
      @apply ml-auto mr-0;
    }

    @media (max-width: 340px) {
      @apply mx-auto;
    }
  }

  li::before {
    content: "—";
    @apply mr-micro text-orange-800;

    @media (max-width: 540px) {
      @apply mr-macro;
    }
  }
</style>

<ul class="space-y-micro">
  {#each organisations as { name, url }}
    <li>
      <a href={url} target="_blank">{name}</a>
    </li>
  {/each}
</ul>
