<script lang="ts" context="module">
  export const contextKeyChangelogEntries = {};
</script>

<script lang="ts">
  import type { ChangelogEntry } from "$lib/types/changelog-entry.type";
  import { getContext } from "svelte";
  import TimelineItem from "./timeline-item.svelte";

  const numberOfEntriesToDisplay = 5;
  const changelogEntries: ChangelogEntry[] = getContext(
    contextKeyChangelogEntries
  );
</script>

<section id="timeline">
  <div class="container order-2 mx-auto  mb-8 flex flex-wrap">
    <div class="flex w-full flex-wrap">
      {#each changelogEntries.slice(0, numberOfEntriesToDisplay) as entry}
        <TimelineItem timelineItem={entry} />
      {/each}
    </div>
  </div>
</section>
