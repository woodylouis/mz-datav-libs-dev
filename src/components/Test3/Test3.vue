<template>
  <div class="test3">message: {{ message }}</div>
</template>

<script>
export default {
  name: 'TestComponent3',
  setup() {
    const message = 'hello louis 3!';
    
    return {
      message
    };
  },
};
</script>

<style lang="scss" scoped>
  .test3 {
    
    color: green
  }
</style>
