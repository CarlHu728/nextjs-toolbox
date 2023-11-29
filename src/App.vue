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
    <!-- <img src="/img.jpg"> -->
    <audio src="music2.ogg" autoplay></audio>
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
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */

  background-image: url('/img.jpg');
  background-size: cover;
  width: 50vw;
  height: 50vh;
}

.box {
  background-image: url('/background.avif');
  background-size: cover;
  background-position: center; /* 将背景图片水平垂直居中 */
  height: 100vh; /* 设置容器高度为视窗高度的100% */
  width: 100vw;
}

</style>