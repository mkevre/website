<script lang="ts">
  import { isAnExternalLink } from "$lib/utils/helpers";
  import LinkButton from "$lib/components/ui-library/link-button";

  import type { ContactAction } from "$lib/types/contact-action.type";

  export let width: string = "";
  let clazz = "";
  export { clazz as class };
  export let btnClass: "primary" | "cta" = "primary";
  export let action: ContactAction;
  export let isTextSmall: boolean = false;
  const { icon, title, text, link } = action;
  const target = isAnExternalLink(link.href) ? "_blank" : undefined;
</script>

<div
  class="mb-micro flex flex-col items-center justify-between rounded-4xl bg-off-white px-xx-small py-xx-small shadow-normal md:mb-small md:py-small {clazz}"
  style="width: {width}">
  <div>
    {#if icon}
      <img src="/svg/contact/{icon}" alt={title} class="mx-auto h-28" />
    {/if}
    <h2 class="h4">{title}</h2>
    <p class="mt-micro mb-x-small" class:text-small={isTextSmall}>{text}</p>
  </div>
  <LinkButton href={link.href} {target} variant={btnClass}
    >{link.text}</LinkButton>
</div>
