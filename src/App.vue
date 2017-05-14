<template>
  <div id="app">
    <Lplayer :music="music"></Lplayer>
  </div>
</template>

<script>
import Lplayer from './components/Lplayer'

export default {
  name: 'app',
  data: function () {
    return {
      music: {
        src: '1.mp3',
        name: '',
        album: '',
        albumimg: ''
      }
    }
  },
  components: {
    Lplayer
  }
}
</script>

<style>

</style>
