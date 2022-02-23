<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let benefits: { title: string; text: string }[];
  import Section from "../section.svelte";
</script>

<Section
  class="mx-auto flex max-w-6xl flex-wrap justify-around text-center lg:justify-between {clazz}"
  style="margin-top: 0">
  {#each benefits as { title, text }}
    <div class="mt-small w-72 lg:w-1/3">
      <h2 class="h2">{title}</h2>
      <p>{@html text}</p>
    </div>
  {/each}
</Section>
