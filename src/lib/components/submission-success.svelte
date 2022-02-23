<script lang="ts">
  import GitpodIllustration from "./gitpod-illustration.svelte";

  export let title: string;
  export let text: string;
</script>

<h2 class="h3 mb-8 text-center">{title}</h2>
<p class="text-center">
  {text}
</p>
<GitpodIllustration />
