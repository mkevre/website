<script lang="ts">
  import { showHideOverflowY } from "$lib/utils/helpers";

  import { createEventDispatcher } from "svelte";

  export let isOpen = false;

  $: {
    if (typeof document !== "undefined") {
      if (isOpen) {
        showHideOverflowY(true);
      } else {
        showHideOverflowY(false);
      }
    }
  }

  const dispatch = createEventDispatcher();

  let closeEl: HTMLButtonElement;
  let focusedEl: HTMLElement;

  $: if (isOpen) {
    if (typeof document !== "undefined")
      focusedEl = <HTMLElement>document.activeElement;
    closeEl && closeEl.focus();
  }

  const closeModal = () => {
    dispatch("close");
    focusedEl && focusedEl.focus();
    focusedEl = null;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
</script>

<style lang="postcss">
  .modal {
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div
    class="modal fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center"
    on:click={closeModal}>
    <div class="relative flex items-center justify-center">
      <button
        class="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center md:h-5 md:w-5"
        bind:this={closeEl}
        aria-label="close this popup"
        on:click={closeModal}>
        <img alt="Close" role="presentation" src="/x.svg" class="h-3 w-3" />
      </button>
      <slot />
    </div>
  </div>
{/if}
