<template>
  <a-entity position="1.5 0 -12.5">
    <labyrinth-wall v-for="(wallPosition, wallId) in wallsX"
                    :key="wallId"
                    :position="wallPosition"></labyrinth-wall>

    <labyrinth-wall v-for="(wallPosition, wallId) in wallsY"
                    :key="wallId"
                    :position="wallPosition"
                    rotation="0 90 0"></labyrinth-wall>

    <a-torus v-for="(targetPosition, targetId) in targets"
             :key="targetId"
             :position="targetPosition"
             @click="targetClick"
             color="#2ac"
             arc="360"
             radius="0.2"
             radius-tubular="0.05"
             rotation="0 0 0"
             animation="property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 1500"
             static-body></a-torus>

  </a-entity>
</template>

<script>
import LabyrinthWall from "@/components/LabyrinthWall";

import firstMap from "@/maps/first";

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
    for (let x = 0; x < firstMap.length; x++) {
      for (let y = 0; y < firstMap[x].length; y++) {
        let positionX = (y - firstMap[x].length / 2) * this.$constant('WALL_WIDTH'),
            positionY = this.$constant('WALL_HEIGHT') / 2,
            positionZ = (x - firstMap.length / 2) * this.$constant('WALL_WIDTH') / 2;

        if (1 === firstMap[x][y]) {
          this.wallsX.push(`${positionX} ${positionY} ${positionZ}`);
        } else if (2 === firstMap[x][y]) {
          this.wallsY.push(`${positionX} ${positionY} ${positionZ}`);
        } else if (3 === firstMap[x][y]) {
          positionY /= 1.5;

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

      if (this.$store.state.targetGoals === this.$store.state.targetsCount) {
        document.getElementById('txt-win').setAttribute('opacity', '1')
        document.getElementById('txt-score').setAttribute('opacity', '0')
      }
    }
  }
}
</script>
