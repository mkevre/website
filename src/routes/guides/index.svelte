<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const guides = session.guides;
    return { props: { guides } };
  }
</script>

<script lang="ts">
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PostPreview from "$lib/components/blog/post-preview.svelte";
  import Write from "$lib/components/guides/write.svelte";
  import Header from "$lib/components/header.svelte";

  export let guides = [];
</script>

<OpenGraph
  data={{
    description: "Follow these guides to use Gitpod with any project",
    title: "Guides",
    norobots: true,
  }} />

<Header
  title="Guides"
  text="Follow these guides to use Gitpod with any project"
  tight={true} />

<div
  class="m-auto grid max-w-4xl grid-cols-1 justify-items-center gap-xx-small md:grid-cols-2 lg:max-w-full lg:grid-cols-1">
  {#each guides as guide}
    <PostPreview post={guide} layout="row" type="guides" isMostRecent />
  {/each}
</div>

<Write />
