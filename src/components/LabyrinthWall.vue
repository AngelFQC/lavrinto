<template>
  <a-box :depth="$constant('WALL_DEPTH')"
         :height="$constant('WALL_HEIGHT')"
         :position="position"
         :rotation="rotation"
         :width="$constant('WALL_WIDTH')"
         material="src: #wall;
                repeat: 0.8 1;
                normalMap: #wall-normal;
                normalTextureRepeat: 0.8 1;
                roughnessMap: #wall-roughness;
                roughnessTextureRepeat: 0.8 1"
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
