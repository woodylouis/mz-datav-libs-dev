<template>
  <svg width="0" height="0" viewBox="0 0 100 100">
    <defs>
      <symbol id="more" viewBox="0 0 100 100">
        <circle r="5" cx="20" cy="25" fill="currentColor" />
        <circle r="5" cx="20" cy="50" fill="currentColor" />
        <circle r="5" cx="20" cy="75" fill="currentColor" />
        <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor" />
        <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor" />
        <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor" />
      </symbol>
      <symbol id="filledArrowRight" viewBox="0 0 100 100">
        <polyline points="20 10, 80 50, 20 90" fill="currentColor"></polyline>
      </symbol>
      <symbol id="arrowRight" viewBox="0 0 100 100">
        <polyline points="30 20, 70 50, 30 80" fill="transparent" stroke="currentColor" stroke-width="3"></polyline>
      </symbol>
    </defs>
  </svg>

  <!-- <div>
    <svg
      width="500"
      height="200"
      viewBox="0 0 50 20"
      style="border: 1px solid #000000"
    >
      <rect
        x="10"
        y="10"
        width="10"
        height="5"
        style="stroke: #000000; fill: none"
      />
    </svg>
    <svg width="500" height="200" style="border: 1px solid #000000">
      <rect
        x="100"
        y="100"
        width="100"
        height="50"
        stroke-width="10"
        style="stroke: #000000; fill: none"
      />
    </svg>
    <svg
      width="500"
      height="200"
      viewBox="0 0 200 200"
      style="border: 1px solid #000000"
      preserveAspectRatio="none"
    >
      <rect
        x="100"
        y="100"
        width="100"
        height="50"
        stroke-width="10"
        style="stroke: #000000; fill: none"
      />
    </svg>
  </div> -->
</template>

<script>
export default {
  name: 'TestComponent1',
  setup() {
    const message = 'hello louis 1 from libs!';

    return {
      message
    };
  }
};
</script>

<style lang="scss" scoped>
.test2 {
  color: red;
}
</style>
