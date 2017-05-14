<template>
  <div id="l-player" class="default dark-theme cl">
    <audio id="player" ></audio>
    <div class="wrap-album-img">
      <!-- album img -->
      <Albumimg albumimg="123"></Albumimg>
    </div>
    <div class="wrap-main">
      <!-- 主控制区 -->
      <div class="wrap-control cl">
        <div class="wrap-play-control">
          <!-- 播放控制 -->
          <Playcontrol></Playcontrol>
        </div>
        <div class="wrap-music-info">
          <!-- 音乐信息 -->
        </div>
        <div class="wrap-playlist">
          <!-- 播放列表 -->
        </div>
        <div class="wrap-vol-control">
          <!-- 声音控制 -->
        </div>
      </div>
      <div class="wrap-progress">

      </div>
    </div>
  </div>
</template>

<script>
  import Player from '../modules/core-player'
  import Playcontrol from './Play-control'
  import Albumimg from './Albumimg'

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
    props: {
      // 传递音乐信息，可以是对象或者数组
      music: {
        type: [Object, Array],
        required: true
      },
      // 播放模式，可以是'loop','single','random','oreder'中的一种
      mode: {
        type: String,
        default: 'loop'
      }
    },
    mounted () {
      this.player = new Player('#player')
    },
    components: {
      Playcontrol,
      Albumimg
    },
    watch: {
      music: function (music, oldval) {
        // 检测music的类型，看看是数组还是对象
        if (music instanceof Array) {

        } else {

        }
      }
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
    background: #212121;
  }

  .wrap-play-control,
  .wrap-music-info{
    float: left;
  }

  .wrap-vol-control,
  .wrap-playlist{
    float: right;
  }


</style>
