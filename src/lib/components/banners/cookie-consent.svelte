<script>
  import Banner from "./base.svelte";
</script>

<div data-analytics={`{"position":"cookie-consent"}`}>
  <Banner location="bottom" storageKey="cookie-consent" let:closeBanner>
    <p class="w-7/12 md:w-9/12">
      This website uses cookies to enhance the user experience. Read our <a
        href="/privacy">privacy policy</a> for more info.
    </p>
    <button
      on:click={closeBanner}
      class="rounded-lg bg-off-white px-3 py-1 hover:bg-white md:px-6"
      >Accept Cookies</button>
  </Banner>
</div>
