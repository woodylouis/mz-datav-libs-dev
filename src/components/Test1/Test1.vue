<template>
  <div>
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
  </div>
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
