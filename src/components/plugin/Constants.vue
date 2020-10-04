<script>
const Constants = {
  WALL_HEIGHT: 4,
  WALL_WIDTH: 2,
  WALL_DEPTH: 0.25,
}

Constants.install = function (Vue) {
  Vue.prototype.$constant = (key) => {
    return Constants[key]
  }
}

export default Constants
</script>
