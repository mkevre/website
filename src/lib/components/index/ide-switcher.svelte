<script lang="ts">
  import type { Ide } from "$lib/types/ide.type";
  import { createEventDispatcher } from "svelte";
  export let ides: Ide[];
  export let activeByDefaultName: string;
  export let ideType: string;
  export let activeIdeName: string = "";

  const dispatch = createEventDispatcher();

  const hasNoScreenshots = (name: string) =>
    ides.find((ide) => ide.name === name).screenshots === undefined;

  const handleMouseEnter = (e: MouseEvent, name: string) => {
    const target = e.target as HTMLElement;
    target.parentNode.childNodes.forEach((node: HTMLElement) => {
      const iconBox = node.childNodes[0] as HTMLElement;
      if (name !== iconBox.dataset.name) {
        iconBox.classList.add("grayed");
      }
    });
    const [iconDiv, statusSpan]: HTMLElement[] = Array.from(
      target.children
    ) as HTMLElement[];

    iconDiv.classList.remove("grayed");

    if (statusSpan) {
      statusSpan.style.display = "flex";
    }

    if (!hasNoScreenshots(name)) {
      dispatch("message", {
        text: name,
      });
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const [, statusSpan]: HTMLElement[] = Array.from(
      target.children
    ) as HTMLElement[];

    if (statusSpan) {
      statusSpan.style.display = "none";
    }
  };
</script>

<style lang="postcss">
  button {
    @apply outline-none;
  }

  .icon-box {
    height: 71px;
    width: 71px;

    @media (max-width: 1140px) {
      height: 60px;
      width: 60px;
    }

    @media (max-width: 520px) {
      height: 45px;
      width: 45px;
      border-radius: 10px;
    }
  }

  .icon {
    height: 42px;
    width: 42px;

    @media (max-width: 1140px) {
      height: 36px;
      width: 36px;
    }

    @media (max-width: 520px) {
      height: 26px;
      width: 26px;
    }
  }

  .grayed {
    filter: grayscale(100%);
    @apply hover:bg-white;
  }
</style>

<div
  class="mt-macro flex justify-center space-x-1 space-y-0 sm:space-x-2 md:absolute md:top-0 md:-right-1 md:mt-0 md:block md:w-min md:space-x-0 md:space-y-2 lgx:-right-2">
  {#each ides as { name, availibility, label, icon, screenshots }}
    <button
      class="relative block cursor-pointer"
      on:mouseenter={(e) => {
        handleMouseEnter(e, name);
      }}
      on:mouseleave={(e) => {
        handleMouseLeave(e);
      }}
      class:hidden={ideType === "browser" && !screenshots.browser}>
      <div
        class="icon-box linear relative flex items-center justify-center rounded-lg bg-off-white shadow-lg transition duration-200 md:rounded-xl lgx:rounded-2xl"
        class:grayed={!(activeByDefaultName === name) &&
          !(activeIdeName === "vscode")}
        data-name={name}>
        <img src="/svg/index/{icon}" alt={label} class="icon" />
      </div>
      {#if availibility}
        <div
          class="absolute -top-3 left-1/2 hidden h-4 w-10 -translate-x-1/2 items-center justify-center rounded-md text-xs font-semibold text-gray-900 shadow-light sm:h-5 sm:w-14 sm:rounded-lg md:-top-1 md:-left-10 md:transform-none lg:left-3/4"
          class:bg-pink-900={availibility === "soon"}
          class:bg-orange-700={availibility === "beta"}>
          {availibility.charAt(0).toUpperCase() + availibility.slice(1)}
        </div>
      {/if}
    </button>
  {/each}
</div>
