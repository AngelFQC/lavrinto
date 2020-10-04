<template>
  <a-scene>
    <assets></assets>

    <labyrinth></labyrinth>

    <a-plane src="#grass" height="35" position="0 0 -13.5" rotation="-90 0 0" width="27"></a-plane>

    <a-sky color="skyblue"></a-sky>
  </a-scene>
</template>

<script>
import 'aframe'
import Assets from "@/components/Assets";
import Labyrinth from "@/components/Labyrinth";

export default {
  name: 'Scene',
  components: {
    Assets,
    Labyrinth
  },
  data() {
    return {
      wallSize: 3,
      map: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      ],
      walls: []
    }
  },
  created() {
    for (let x = 0; x < this.map.length; x++) {
      for (let y = 0; y < this.map[x].length; y++) {
        let position = (y - this.map.length / 2) * this.wallSize + ' 1.5 ' + (x - 7 - this.map[x].length / 2) * this.wallSize

        switch (this.map[x][y]) {
          case 1:
            this.walls.push({value: position});
            break
          default:
            continue
        }
      }
    }
  }
}
</script>

<style>
</style>