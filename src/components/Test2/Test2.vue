<template>
  <div class="test2">message: {{ message }}</div>
</template>

<script>
export default {
  name: 'TestComponent2',
  setup() {
    const message = 'hello louis 2!';
    
    return {
      message
    };
  },
};
</script>

<style lang="scss" scoped>
  .test2 {
    
    color: blue
  }
</style>
