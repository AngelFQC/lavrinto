<template>
  <a-scene>

    <assets></assets>

    <player></player>

    <labyrinth></labyrinth>

    <a-plane height="52"
             material="src: #grass;
                       color: #ADE506;
                       repeat: 10 10;
                       normalMap: #grass-normal;
                       normalTextureRepeat: 10 10;
                       roughnessMap: #grass-roughness;
                       roughnessTextureRepeat: 10 10"
             position="0 0 -13"
             rotation="-90 0 0"
             static-body
             shadow="receive: true"
             width="40"></a-plane>

    <a-plane height="52"
             material="src: #grass;
                       repeat: 10 10;
                       normalMap: #grass-normal;
                       normalTextureRepeat: 10 10;
                       roughnessMap: #grass-roughness;
                       roughnessTextureRepeat: 10 10"
             :position="`0 ${this.$constant('WALL_HEIGHT')} -13`"
             rotation="-90 0 0"
             scale="1 1 -1"
             width="40"></a-plane>

    <a-sky color="skyblue"></a-sky>
  </a-scene>
</template>

<script>
import 'aframe'
import 'aframe-physics-system/dist/aframe-physics-system';
import 'aframe-extras';

import Assets from "@/components/Assets";
import Labyrinth from "@/components/Labyrinth";
import Player from "@/components/Player";

export default {
  name: 'Scene',
  components: {
    Player,
    Assets,
    Labyrinth
  }
}
</script>

<style>
</style>
