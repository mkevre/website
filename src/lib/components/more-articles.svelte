<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post.type";

  import PostPreview from "./blog/post-preview.svelte";
  import Section from "./section.svelte";

  export let posts: BlogPost[];
  export let title: string = "More articles";
  export let text: string = "";
  export let type: "blog" | "guides" | "customers" = "blog";
</script>

<Section>
  <h2 class="text-center text-h2" class:mb-small={!text}>{title}</h2>
  {#if text}
    <p class="text-large mx-auto mb-small max-w-4xl text-center">
      {text}
    </p>
  {/if}
  <div
    class="m-auto grid w-full max-w-7xl grid-cols-none justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each posts as post}
      <div class="flex min-w-[20rem] max-w-sm justify-center">
        <PostPreview {post} {type} isMostRecent headlineOrder="h3" />
      </div>
    {/each}
  </div>
</Section>
