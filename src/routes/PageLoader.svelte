<script>
import { navigating } from '$app/state';

function width() {
  return {
    duration: 500,
    css: (t) => `width: ${t * 100}%;`,
  };
}
</script>

{#if navigating.to}
  <div in:width></div>
{/if}

<style>
div {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3px;
  background-color: currentColor;
  z-index: 99999;
}
</style>
