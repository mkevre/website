<script lang="ts">
  import type { GetStartedItem } from "$lib/types/get-started.type";
  import LinkButton from "$lib/components/ui-library/link-button";
  export let getStartedItem: GetStartedItem;
</script>

<div
  class="flex flex-col rounded-4xl bg-off-white p-8 text-center shadow-normal">
  <div class="flex justify-center">
    <img
      src={getStartedItem.icon.path}
      style={`transform: ${getStartedItem.icon.transform}`}
      alt={getStartedItem.title} />
  </div>
  <div class="flex flex-col">
    <h4 class="mt-4">{getStartedItem.title}</h4>
    <p class="mb-4">{getStartedItem.description}</p>
  </div>
  <div class="mt-auto">
    <LinkButton
      variant="cta"
      size="medium"
      class="mb-2"
      href={getStartedItem.path}>{getStartedItem.buttonLabel}</LinkButton>
  </div>
</div>
