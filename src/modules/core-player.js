class Player {
  constructor (ele) {
    this.player = document.querySelector(ele)
    this.player.controls = false
    /**
     * 监听播放器的播放情况，如果进度变化则返回进度
     */
    this.player.addEventListener('timeupdate', e => {
      this.getProgress()
    })
  }

  /**
   * 设置播放器的播放源文件
   * @param {string} srcString 传入播放文件的地址
   */
  setSrc (srcString) {
    this.player.src = srcString
  }
  /**
   * 播放器的play方法，调用后开始播放当前文件
   */
  play () {
    if (this.player.paused) {
      this.player.play()
    }
  }
  /**
   * 播放器的暂停方法，调用后暂停播放
   */
  pause () {
    // 暂停播放
    if (!this.player.paused) {
      this.player.pause()
    }
  }
  /**
   * 播放器设置音量大小的方法
   * @param {num} volNum 0到1之间的数值，用于设置播放器的音量大小
   */
  setVol (volNum) {
    if (!Number.isNumber(volNum) || volNum < 0 || volNum > 1) {
      console.error('the argument is not available')
    } else {
      this.player.volume = volNum
    }
  }

  /**
   * 切换静音
   * @return {boolen} 切换静音状态后返回布尔值
   */
  toggleMut () {
    this.player.muted = !this.player.muted
    return this.player.muted
  }
  /**
   * stop方法，结束播放器的当前播放
   * @return {[type]} [description]
   */
  stop () {
    this.player.currentTime = 0
    this.player.pause()
  }

  getProgress () {
    let duration = this.player.duration // 获取媒体总长度，单位秒
    let current = this.player.currentTime // 获取当前时间
    let progress = current / duration // 0~1之间，播放进度的比值
    return progress
  }

  setProgress (progress) {
    let duration = this.player.duration
    this.player.currentTime = duration * progress
  }
}

export default Player
