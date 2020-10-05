<template>
  <a-scene fog="type: linear; color: #CCC; far: 10; near: 0;">
    <assets></assets>

    <a-entity position="-13 0 8.5" movement-controls kinematic-body>
      <a-entity camera position="0 1.6 0" look-controls="pointerLockEnabled: true">
      </a-entity>
    </a-entity>


    <labyrinth></labyrinth>

    <a-plane src="#grass" height="52" position="0 0 -13" rotation="-90 0 0" width="40" static-body></a-plane>

    <a-sky color="skyblue"></a-sky>
  </a-scene>
</template>

<script>
import 'aframe'
import 'aframe-physics-system/dist/aframe-physics-system';
import 'aframe-extras';

import Assets from "@/components/Assets";
import Labyrinth from "@/components/Labyrinth";

export default {
  name: 'Scene',
  components: {
    Assets,
    Labyrinth
  }
}
</script>

<style>
</style>