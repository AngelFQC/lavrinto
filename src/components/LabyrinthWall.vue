<template>
  <a-box :depth="this.$constant('WALL_DEPTH')"
         :height="this.$constant('WALL_HEIGHT')"
         :position="position"
         :rotation="rotation"
         :width="this.$constant('WALL_WIDTH')"
         material="src: #wall;
                   normalMap: #wall-normal;
                   roughnessMap: #wall-roughness"
         shadow="receive: true; cast: true"
         static-body></a-box>
</template>

<script>
export default {
  name: 'LabyrinthWall',
  props: {
    position: {
      type: String,
      required: true
    },
    rotation: {
      type: String,
      default: '0 0 0'
    }
  }
}
</script>
