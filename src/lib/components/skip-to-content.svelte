<script>
  import LinkButton from "./ui-library/link-button/link-button.svelte";

  import { page } from "$app/stores";
  $: isADocsPage = $page.url.pathname.split("/")[1] === "docs";
</script>

<div>
  <LinkButton
    variant="white"
    href={isADocsPage ? "#docs-content" : "#main-content"}
    class="absolute left-1.5 top-1.5 -translate-y-full -mt-1.5 focus:translate-y-0 border-2 border-solid border-black"
    >Skip to Content</LinkButton
  >
</div>
