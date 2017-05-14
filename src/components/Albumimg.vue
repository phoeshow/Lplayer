<template lang="html">
  <div class="">
    <img src="#" alt="albumimg">
  </div>
</template>

<script>
export default {
  name: 'Albumimg',
  data: function () {
    return {}
  },
  props: {
    albumimg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
  div{
    overflow: hidden;
    height: 50px;
    width: 50px;
  }
  img{
    height: 50px;
    width: 50px;
    font-size: 12px;
  }
</style>
