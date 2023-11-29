<script>
export default {
  methods: {
    playAudio() {
      this.$refs.audio.play()
    }
  }
};

</script>

<template>
  <div class="box">
    <h1 class="title">色图</h1>
    <br>
    <!-- <img src="/img.jpg"> -->
    <!-- <audio src="music.mp3" autoplay></audio> -->
    <audio ref="audio" src="test.wav"></audio>
    <button class="button" @click="playAudio"></button>
  </div>
</template>

<style>
.title {
  text-align: center;
  font-size: 100px;
}

.button {
  /* text-align: center; */
  margin-left: 25%;
  background-image: url('/img.jpg');
  background-size: cover;
  width: 50%;
  height: 50%;
}

.box {
  height: 100vh; /* 盒子高度为视窗高度的100% */
  width: 100vw; /* 盒子宽度为视窗宽度的100% */
  /* background-color: #ccc; 为了更好看，设置背景颜色 */
}

</style>