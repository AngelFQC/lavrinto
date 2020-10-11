<script>
const Constants = {
  WALL_HEIGHT: 5,
  WALL_WIDTH: 3,
  WALL_DEPTH: 0.5,
}

Constants.install = function (Vue) {
  Vue.prototype.$constant = (key) => {
    return Constants[key]
  }
}

export default Constants
</script>
