<template>
  <div id="l-player" class="default dark-theme cl">
    <audio id="player" ></audio>
    <div class="wrap-album-img">
      <!-- album img -->
    </div>
    <div class="wrap-main">
      <!-- 主控制区 -->
      <div class="wrap-control">

      </div>
      <div class="wrap-progress">

      </div>
    </div>
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

  *{
    box-sizing: border-box;
  }
  #l-player{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


  }

  .cl::after{
    content: "";
    display: block;
    clear: both;
  }

  .default{
    width: 650px;
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translate(-50%);
  }

  .dark-theme{
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
  }

  .light-theme{
    color: #2c3e50;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
  }

  .wrap-main,
  .wrap-album-img{
    float: left;
  }
  .wrap-album-img{
    height: 50px;
    width: 50px;
  }
  .wrap-main{
    width: 600px;
    height: 50px;
  }
  .wrap-control{
    height: 40px;
  }

  .wrap-progress{
    height: 10px;
    background: #eee;
  }


</style>
