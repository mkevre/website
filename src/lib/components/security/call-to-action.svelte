<script>
  import { reportAction, thanksAction } from "$lib/contents/security";
  import Section from "../section.svelte";
  import Action from "./action.svelte";
</script>

<Section>
  <div
    class="mx-auto flex max-w-3xl flex-col items-center justify-between space-y-medium md:flex-row md:items-start md:space-y-0">
    {#each [thanksAction, reportAction] as action}
      <Action {action} />
    {/each}
  </div>
</Section>
