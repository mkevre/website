<script lang="ts">
  import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry.type";
  import { stringToBeautifiedFragment } from "$lib/utils/helpers";
  export let timelineItem: ChangelogEntryType;

  $: formattedDate = new Intl.DateTimeFormat().format(
    new Date(timelineItem.date)
  );
  $: changelogUri = stringToBeautifiedFragment(timelineItem.title);
</script>

<div class="relative flex pb-12 ">
  <div class="absolute inset-0 flex h-full w-6 items-center justify-center">
    <div class="pointer-events-none h-full w-1 bg-sand-dark" />
  </div>
  <div
    class="relative z-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sand-dark text-white" />
  <div class="flex-grow pl-4 md:h-36">
    <div class="mb-2">
      {formattedDate}
    </div>
    <a
      class=" title-font mb-1 text-lg text-p-medium font-semibold text-gray-900  hover:underline"
      href={`/changelog/${changelogUri}`}>
      {timelineItem.title}
    </a>
    <p class="rounded-2xl text-p-medium">
      {@html timelineItem.excerpt}
    </p>
  </div>
</div>
