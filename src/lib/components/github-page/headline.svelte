<script lang="ts">
  import Section from "../section.svelte";
  export let text: string;
</script>

<Section>
  <h2 class="m-auto max-w-5xl text-center">
    {text}
  </h2>
</Section>
