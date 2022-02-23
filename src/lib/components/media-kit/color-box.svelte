<script lang="ts">
  export let colorName: string;
  export let colorValue: string;
  export let isDark: boolean = false;
</script>

<div
  class="text-large mb-micro w-64 rounded-4xl py-medium text-center shadow-normal sm:mx-micro sm:mb-small sm:w-80 sm:pl-medium sm:text-left"
  class:text-white={isDark}
  style={`background: ${colorValue}`}>
  {colorName}
  <br />
  {colorValue}
</div>
