<template>
  <div id="l-player">
    <audio id="player"></audio>
  </div>
</template>

<script>
  import Player from '../modules/core-player'

  export default {
    name: 'Lplayer',
    data: function () {
      return {
        player: null
      }
    },
    methods: {
      play () {
        this.player.play()
      }
    },
    computed: {

    },
    porps: {

    },
    mounted () {
      this.player = new Player('#player')
    }
  }

</script>

<style scoped>
  #l-player{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 200px;
    height: 100px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
  }
</style>
