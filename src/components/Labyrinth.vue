<template>
  <a-entity position="1.5 0 -12.5">
    <labyrinth-wall v-for="(wallPosition, wallId) in wallsX"
                    :key="wallId"
                    :position="wallPosition"></labyrinth-wall>

    <labyrinth-wall v-for="(wallPosition, wallId) in wallsY"
                    :key="wallId"
                    :position="wallPosition"
                    rotation="0 90 0"></labyrinth-wall>

    <a-sphere v-for="(targetPosition, targetId) in targets"
              :key="targetId"
              :position="targetPosition"
              color="yellow"
              radius="0.2"
              static-body @click="targetClick"></a-sphere>
  </a-entity>
</template>

<script>
import LabyrinthWall from "@/components/LabyrinthWall";

const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 0, 3, 0, 0, 2, 3, 0, 0, 2, 0, 2, 2],
  [3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0],
  [2, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 2, 2],
  [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 3],
  [2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2],
  [1, 1, 1, 1, 0, 1, 0, 3, 1, 0, 1, 0],
  [2, 0, 2, 0, 2, 3, 2, 2, 0, 2, 0, 0, 2],
  [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [2, 2, 2, 2, 3, 0, 2, 0, 0, 2, 0, 0, 2],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [2, 2, 0, 2, 0, 2, 2, 0, 2, 0, 0, 2, 2],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 3],
  [2, 2, 3, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0],
  [2, 0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 2],
  [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 3, 2],
  [3, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [2, 2, 2, 2, 2, 3, 2, 0, 0, 2, 0, 2, 2],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0],
  [2, 2, 2, 0, 0, 2, 0, 2, 2, 0, 2, 2, 2],
  [0, 3, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0],
  [2, 2, 0, 2, 0, 2, 2, 0, 0, 2, 3, 2, 2],
  [0, 1, 0, 0, 3, 0, 0, 1, 1, 1, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 2],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
  [2, 0, 2, 0, 0, 0, 3, 0, 0, 2, 0, 0, 2],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 3, 1, 0],
  [2, 0, 0, 3, 2, 0, 0, 0, 2, 0, 2, 0, 2],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [2, 3, 0, 0, 2, 0, 0, 0, 0, 2, 0, 3, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
      targets: [],
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
        } else if (3 === map[x][y]) {
          positionY -= 0.25;
          this.targets.push(`${positionX} ${positionY} ${positionZ}`);
        }
      }
    }

    this.$store.state.targetsCount = this.targets.length;
  },
  methods: {
    targetClick (event) {
      this.$store.state.targetGoals++;

      event.target.remove();
    }
  }
}
</script>

<style scoped>
</style>