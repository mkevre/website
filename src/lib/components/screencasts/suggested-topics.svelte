<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "$lib/components/ui-library/button";
  import { topics } from "$lib/contents/screencasts";
  export let currentTopic: string;

  const dispatch = createEventDispatcher();

  const handleTopicSetup = (e: Event, topic: string) => {
    const target = e.target as HTMLElement;
    target.parentElement.childNodes.forEach(
      (t: HTMLElement) => (t.style.background = "var(--sand-dark)")
    );
    if (topic !== currentTopic) {
      dispatch("setTopic", topic);
      target.style.background = "var(--brand-almost-ripe)";
    } else {
      dispatch("setTopic", "");
      target.style.background = "var(--sand-dark)";
    }
  };
</script>

<div class="mb-small md:mt-x-large">
  <p class="h5 mb-xx-small text-center font-bold text-black">
    Suggested topics
  </p>
  <div class="mx-auto flex max-w-3xl flex-wrap justify-center sm:space-x-macro">
    {#each topics as topic}
      <Button
        on:click={(e) => handleTopicSetup(e, topic)}
        class=" mx-0.5 mb-macro sm:mx-0"
        variant="cta"
        size="medium">
        {topic}
      </Button>
    {/each}
  </div>
</div>
