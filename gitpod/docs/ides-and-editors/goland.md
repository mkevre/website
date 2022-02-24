---
section: ides-and-editors
title: GoLand
---

<script context="module">
  export const prerender = true;
</script>

# {title}

Gitpod enables code editing using JetBrains GoLand currently via [JetBrains Gateway](jetbrains-gateway).

> **Please note:** JetBrains {title} Desktop is currently in beta.
>
> If you experience any issues or have feedback, please [get in touch](https://www.gitpod.io/support).

### Getting Started

1. **Install the [latest “release” version](https://www.jetbrains.com/help/idea/remote-development-a.html#gateway) of JetBrains Gateway** - With [JetBrains Gateway and Gitpod](jetbrains-gateway) you can create and manage your latest 20 Gitpod workspaces.
2. **Install the Gitpod plugin** - Navigate to the JetBrains Gateway "Remote Development" wizard, and click "install" to install the [Gitpod plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway) (no JetBrains Gateway restart is required).
3. **Update your Gitpod preferences** - Select GoLand on the [Gitpod preferences page](https://gitpod.io/preferences) which will set GoLand as your default Desktop IDE for future workspace starts.
4. **Start (or restart) your workspace** - Either start a workspace directly from within the [JetBrains Gateway](jetbrains-gateway) via the Gitpod plugin **OR** open a new workspace direclty in Gitpod where on workspace start you will be prompted to open GoLand for that workspace.

<figure>
    <img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Selecting {title} in the preferences" src="/images/editors/goland.gif">
    <figcaption>Updating Gitpod IDE preferences to GoLand</figcaption>
</figure>

**Important:** The early access programs (EAP) version of JetBrains Gateway isn’t yet compatible with the [Gitpod Gateway plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway), so please ensure that you download the “release” / stable version, not the EAP version. You must also stop/restart any started workspaces after selecting an IDE preferences for your IDE preferences to take effect.
