class Player {
  constructor (ele) {
    this.player = document.querySelector(ele)
    this.player.controls = false
  }

  setSrc (srcString) {
    // setMusic 方法，设置需要播放的音乐
    this.player.src = srcString
  }

  play () {
    // play 方法，调用后开始播放music
    if (this.player.paused) {
      this.player.play()
    }
  }

  pause () {
    // 暂停播放
    if (!this.player.paused) {
      this.player.pause()
    }
  }

  setVol (volNum) {
    // 设置音量
    this.player.volume = volNum
  }

  toggleMut () {
    this.player.muted = !this.player.muted
  }

  end () {
    this.player.end()
  }
}
export default Player
