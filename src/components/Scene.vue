<template>
  <a-scene fog="type: linear; color: #ECECEC; far: 4.5; near: 0.25;">
    <assets></assets>

    <a-entity kinematic-body movement-controls position="-13 0 8.5">
      <a-entity camera look-controls="pointerLockEnabled: true" position="0 1.6 0">
        <a-text id="score" align="center" anchor="center" color="black" font="mozillavr" position="0 0.6 -0.8"
                :value="`Goals ${targetGoals} / ${targetsCount}`" visible="" width="3"></a-text>

        <a-text id="txt-win" align="center" anchor="center" color="#9fbc00" font="mozillavr" opacity="0"
                position="0 0.025 -0.1" value="You win!" width="1"></a-text>

        <a-cursor postion="0 0 -1"></a-cursor>

      </a-entity>
    </a-entity>

    <labyrinth></labyrinth>

    <a-plane height="52"
             position="0 0 -13"
             rotation="-90 0 0"
             static-body
             width="40"
             material="src: #grass;
                       repeat: 8 8;
                       normalMap: #grass-normal;
                       normalTextureRepeat: 8 8;
                       roughnessMap: #grass-roughness;
                       roughnessTextureRepeat: 8 8"></a-plane>

    <a-sky color="skyblue"></a-sky>
  </a-scene>
</template>

<script>
import 'aframe'
import 'aframe-physics-system/dist/aframe-physics-system';
import 'aframe-extras';

import { mapState } from 'vuex';

import Assets from "@/components/Assets";
import Labyrinth from "@/components/Labyrinth";

export default {
  name: 'Scene',
  components: {
    Assets,
    Labyrinth
  },
  computed: {
    ...mapState(['targetGoals', 'targetsCount']),
  }
}
</script>

<style>
</style>
