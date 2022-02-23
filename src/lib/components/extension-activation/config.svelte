<script>
  import Section from "../section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<Section>
  <div
    class="mx-auto mb-xx-large max-w-4xl rounded-4xl bg-off-white p-xx-small text-center shadow-brand sm:py-small sm:px-x-small md:p-medium">
    <h2>To become always ready to code</h2>
    <ol
      class="mx-auto my-small w-full max-w-xl list-decimal space-y-macro pl-small text-left text-p-large md:px-small lg:mt-medium lg:mb-large">
      <li>
        Help Gitpod understand your repository by creating a gitpod.yml file
      </li>
      <li>
        Let Gitpod build your project before you even open it by turning on
        prebuilds
      </li>
    </ol>
    <LinkButton variant="primary" size="large" href="/docs/configure"
      >Configure your project</LinkButton>
    <p class="mt-micro text-link-grey">In less than 5 min</p>
  </div>
</Section>
