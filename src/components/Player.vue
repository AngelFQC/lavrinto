<template>
  <a-entity kinematic-body
            movement-controls
            position="-13 0 8.5">

    <a-entity camera
              look-controls="pointerLockEnabled: true"
              position="0 1.6 0">

      <a-text id="txt-score"
              :value="`Goals ${targetGoals} / ${targetsCount}`"
              align="center"
              anchor="center"
              color="#A83A21"
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
                       decay: 1;
                       distance: 20;
                       color: #fff2e6"
                positon="0 1 0"></a-entity>

      <a-cursor postion="0 0 -0.9" color="#A83A21"></a-cursor>

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
