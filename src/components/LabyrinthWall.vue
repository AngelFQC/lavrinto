<template>
  <a-box :depth="$constant('WALL_DEPTH')"
         :height="$constant('WALL_HEIGHT')"
         :position="position"
         :rotation="rotation"
         :width="$constant('WALL_WIDTH')"
         color="#e0f3ff"
         material="src: #wall;
                   repeat: 2 2;
                   normalMap: #wall-normal;
                   normalTextureRepeat: 2 2;
                   roughnessMap: #wall-roughness;
                   roughnessTextureRepeat: 2 2"
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
