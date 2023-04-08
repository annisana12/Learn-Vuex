<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter />
    <counter-squared />
    <buttons />
    <color-code-input />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default,
    'buttons': require('@/components/Buttons.vue').default,
    'color-code-input': require('@/components/ColorCodeInput.vue').default
  }
}
</script>

<style >
div {
  margin-bottom: 20px;
}

.counter {
  font-size: 60px;
}

.buttons button {
  width: 100px;
  font-size: 40px;
  margin: 0 10px;
}

input {
  padding: 8px 15px;
}
</style>
