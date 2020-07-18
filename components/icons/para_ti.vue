<template>
  <svg
    :fill="color"
    :width="width"
    :height="width"
    id="Capa_1"
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140.81 82.17">
    <path
      class="cls-1"
          d="M92.59,82.17,69.29,60.72l2.23-2.42L92.59,77.71l37.54-34.56A23,23,0,0,0,99,9.35l-6.41,5.9-6.41-5.9a22.7,22.7,0,0,0-16.52-6L69.53,0A26.45,26.45,0,0,1,88.41,6.94l4.18,3.85,4.19-3.85a26.26,26.26,0,0,1,35.57,38.63Z"/>
    <path
      class="cls-1"
          d="M48.21,82.17,8.46,45.57A26.26,26.26,0,0,1,44,6.94l4.18,3.85L52.4,6.94A26.26,26.26,0,0,1,88,45.57ZM26.26,3.29A23,23,0,0,0,10.68,43.15L48.21,77.71,85.75,43.15A23,23,0,0,0,71.13,3.3,22.77,22.77,0,0,0,54.62,9.35l-6.41,5.9L41.8,9.35A22.89,22.89,0,0,0,26.26,3.29Z"/>
  </svg>
</template>

<script>
export default {
  name: 'para_ti',
  props: {
    width: {
      type: String,
      default: '60px'
    },
    color: {
      type: String,
      default: '#C5946E'
    }
  }
}
</script>

<style scoped>
</style>
