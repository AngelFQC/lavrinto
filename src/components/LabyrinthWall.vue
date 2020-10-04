<template>
  <a-box :depth="$constant('WALL_DEPTH')"
         :height="$constant('WALL_HEIGHT')"
         :position="position"
         :rotation="rotation"
         :width="$constant('WALL_WIDTH') + 0.24"
         src="#wall"></a-box>
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