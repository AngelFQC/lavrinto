<template>
  <a-scene>

    <assets></assets>

    <player></player>

    <labyrinth></labyrinth>

    <a-plane height="52"
             material="src: #grass;
                       repeat: 25 25;
                       normalMap: #grass-normal;
                       normalTextureRepeat: 25 25;
                       roughnessMap: #grass-roughness;
                       roughnessTextureRepeat: 25 25"
             position="0 0 -13"
             rotation="-90 0 0"
             static-body
             width="40"></a-plane>

    <a-plane height="52"
             material="src: #grass;
                       repeat: 25 25;
                       normalMap: #grass-normal;
                       normalTextureRepeat: 25 25;
                       roughnessMap: #grass-roughness;
                       roughnessTextureRepeat: 25 25"
             :position="`0 ${$constant('WALL_HEIGHT')} -13`"
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
