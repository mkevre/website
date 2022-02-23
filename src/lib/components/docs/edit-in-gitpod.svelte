<script lang="ts">
  import { page } from "$app/stores";
  import LogoTextless from "../svgs/logo-textless.svelte";

  const BASE_PATH =
    "https://gitpod.io#https://github.com/gitpod-io/website/tree/main/src/routes";
  const currentPage =
    $page.url.pathname === "/docs"
      ? `${$page.url.pathname}/index`
      : $page.url.pathname;
  const href = `${BASE_PATH}${currentPage}.md`;
</script>

<div class="mb-micro flex justify-end">
  <a
    {href}
    target="_blank"
    class="inline-flex items-center justify-center rounded-2xl bg-white py-macro px-4 text-btn-small font-semibold text-black shadow-sm hover:bg-off-white focus:bg-off-white"
    rel="noopener"
    data-analytics={`{"variant":"open_in_gitpod"}`}>
    <span>
      <LogoTextless />
    </span> <span class="ml-macro">Edit in Gitpod</span>
  </a>
</div>
