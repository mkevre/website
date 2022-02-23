<script lang="ts">
  import Section from "./section.svelte";
  import PostPreview from "./blog/post-preview.svelte";

  export let title: string;
  export let text: string;

  import { session } from "$app/stores";
  import type { BlogPost } from "$lib/types/blog-post.type";
  const post = $session.posts.find(
    (p: BlogPost) =>
      p.slug === "i-said-goodbye-to-local-development-and-so-can-you"
  );
</script>

<Section>
  <div class="mx-auto max-w-3xl text-center">
    <h2>{title}</h2>
    <p class="text-large">
      {@html text}
    </p>
  </div>
  <div class="mx-auto mt-small max-w-7xl">
    <PostPreview {post} type="blog" layout="row" isMostRecent={true} />
  </div>
</Section>
