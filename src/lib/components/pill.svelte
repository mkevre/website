<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let text: string;
  const capitalised = text.charAt(0).toUpperCase() + text.slice(1);
</script>

<span
  class="rounded-lg bg-pink-900 px-3 py-0.5 text-xs font-semibold text-black shadow-light {clazz}"
  class:bg-pink-900={text === "soon"}
  class:bg-orange-700={text === "beta"}>
  {capitalised}
</span>
