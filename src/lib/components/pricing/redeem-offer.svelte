<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<style lang="postcss">
  div {
    max-width: 598px;
  }

  li::marker {
    @apply text-orange-900;
  }
</style>

<div
  class="w-11/12 rounded-5xl bg-white pt-medium pb-xx-small text-center shadow-normal sm:w-auto sm:py-small">
  <h2 class="h4 mx-auto max-w-sm px-xx-small">
    Enable the Student Plan by following these steps:
  </h2>
  <ol
    class="my-x-small list-decimal space-y-macro pl-12 pr-xx-small text-left sm:pl-20 sm:pr-small">
    <li>
      <a href="https://gitpod.io/login">Log-in</a> with a free Gitpod account.
    </li>
    <li>
      Make sure that your educational email is your primary email address in
      your GitHub/GitLab/Bitbucket account.
    </li>
    <li>
      Go to the <a href="https://gitpod.io/plans">Plans page</a> and select the Student
      Unlimited Plan.
    </li>
    <li>
      If it doesn't appear, please contact us to register your educational email
      domain.
    </li>
  </ol>
  <LinkButton variant="primary" size="large" href="https://gitpod.io/plans"
    >Check Plans</LinkButton>
</div>
