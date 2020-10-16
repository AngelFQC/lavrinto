<template>
  <a-entity id="rig"
            kinematic-body
            movement-controls
            position="-13 0 8.5">

    <a-entity camera
              look-controls="pointerLockEnabled: true"
              position="0 1.6 0">

      <a-text id="txt-score"
              :value="`Score: ${targetGoals} / ${targetsCount}`"
              align="center"
              anchor="center"
              color="#aed22d"
              font="mozillavr"
              position="0 0.6 -0.8"
              width="3"></a-text>

      <a-text id="txt-win"
              opacity="0"
              align="center"
              anchor="center"
              color="#ff4d00"
              font="mozillavr"
              position="0 0.025 -0.1"
              value="You win!"
              width="1"></a-text>

      <a-entity light="type: point;
                       castShadow: true;
                       decay: 1;
                       distance: 20;
                       color: #fff2e6"
                position="0 2 -0.2"></a-entity>

      <a-entity
          cursor
          material="color: #aed22d"
          position="0 0 -1"
          geometry="primitive: ring; radiusOuter: 0.019; radiusInner: 0.01"
          animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.5 0.5 0.5; to: 1 1 1"
      ></a-entity>
    </a-entity>

  </a-entity>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Player",
  computed: {
    ...mapState(['targetGoals', 'targetsCount']),
  }
}
</script>
