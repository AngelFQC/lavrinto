<template>
  <a-entity position="1 0 -13.5">
    <labyrinth-wall v-for="(wallPosition, wallId) in wallsX"
                    :key="wallId"
                    :position="wallPosition"></labyrinth-wall>

    <labyrinth-wall v-for="(wallPosition, wallId) in wallsY"
                    :key="wallId"
                    :position="wallPosition"
                    rotation="0 90 0"></labyrinth-wall>
  </a-entity>
</template>

<script>
import LabyrinthWall from "@/components/LabyrinthWall";

const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 2],
  [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0],
  [2, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 2, 2],
  [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2],
  [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [2, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0, 0, 2],
  [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [2, 2, 0, 2, 0, 2, 2, 0, 2, 0, 0, 2, 2],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [2, 0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 2],
  [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 0, 2, 2],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0],
  [2, 2, 2, 0, 0, 2, 0, 2, 2, 0, 2, 2, 2],
  [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0],
  [2, 2, 0, 2, 0, 2, 2, 0, 0, 2, 0, 2, 2],
  [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 2],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
  [2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export default {
  name: "Labyrinth",
  components: {
    LabyrinthWall
  },
  data() {
    return {
      wallsX: [],
      wallsY: [],
    }
  },
  created() {
    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[x].length; y++) {
        let positionX = (y - map[x].length / 2) * this.$constant('WALL_WIDTH'),
            positionY = this.$constant('WALL_HEIGHT') / 2,
            positionZ = (x - map.length / 2) * this.$constant('WALL_WIDTH') / 2;

        if (1 === map[x][y]) {
          this.wallsX.push(`${positionX} ${positionY} ${positionZ}`);
        } else if (2 === map[x][y]) {
          this.wallsY.push(`${positionX} ${positionY} ${positionZ}`);
        }
      }
    }
  }
}
</script>

<style scoped>
</style>