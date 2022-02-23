<script lang="ts">
  import type { ExtensionButton } from "$lib/types/extension-button.type";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Section from "../section.svelte";

  const buttons: ExtensionButton[] = [
    {
      name: "chrome-extension",
      icon: "svg/browsers/chrome.svg",
      text: "Chrome Extension",
      href: "https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki",
    },
    {
      name: "firefox-extension",
      icon: "svg/browsers/firefox.svg",
      text: "Firefox Extension",
      href: "https://addons.mozilla.org/firefox/addon/gitpod/",
    },
  ];
</script>

<Section
  class="mx-auto flex max-w-2xl flex-col items-center rounded-5xl bg-off-white px-micro py-small shadow-normal sm:px-small sm:py-medium lg:max-w-none lg:flex-row lg:space-x-small xl:space-x-20 xl:py-24 xl:px-20">
  <div class="mb-x-small lg:mb-0">
    <img
      src="/images/index/gitpod-browser-extension.png"
      alt="Open in Gitpod button added via the Gitpod Browser Extension" />
  </div>
  <div>
    <h3 class="h3">Spin up developer environments with a single click.</h3>
    <p class="mt-xx-small mb-x-small">
      Install the browser extension and add a button to your GitLab, GitHub and
      Bitbucket projects to easily spin up a dev environment with a single
      click.
    </p>
    <div class="fl flex flex-wrap items-center justify-center space-x-4">
      {#each buttons as { href, icon, text }}
        <LinkButton
          variant="white"
          size="medium"
          {href}
          target="_blank"
          rel="noopener">
          <img
            class="mr-2 inline-block h-6 w-6"
            src={`/${icon}`}
            alt={text}
            width="24"
            height="24" />
          {text}
        </LinkButton>
      {/each}
    </div>
  </div>
</Section>
