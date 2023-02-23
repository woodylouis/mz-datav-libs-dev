<template>
  <div class="test">message: {{ message }}</div>
</template>

<script>
export default {
  name: 'TestComponent1',
  setup() {
    const message = 'hello louis 1!';
    
    return {
      message
    };
  },
};
</script>

<style lang="scss" scoped>
  .test2 {
    
    color: red
  }
</style>
