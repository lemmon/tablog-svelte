<script>
import { navigating } from '$app/stores'

function width() {
  return {
    duration: 500,
    css: (t) => `width: ${t * 100}%;`,
  }
}
</script>

{#if $navigating}
  <div in:width />
{/if}

<style>
div {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  z-index: 99999;
}
</style>
