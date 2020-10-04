<template>
  <div id="app">
    <scene></scene>
  </div>
</template>

<script>
import Scene from './components/Scene'

export default {
  name: 'app',
  components: {
    Scene
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>