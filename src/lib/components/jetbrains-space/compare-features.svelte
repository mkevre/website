<script lang="ts">
  import { JetBrainsComparison } from "../../contents/jetbrains-space";

  import SectionCommon from "../section-common.svelte";
  import FeatureTable from "../ui-library/feature-table/feature-table.svelte";
</script>

<SectionCommon
  title="Compare features"
  text="Remote development without friction that integrates with your individual stack."
  textClassNames="mb-xx-small"
>
  <FeatureTable slot="content" tableData={JetBrainsComparison} />
</SectionCommon>
