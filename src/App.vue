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
  <h1 class="title">色图</h1>

  <br>
  <!-- <img src="/img.jpg"> -->
  <!-- <audio src="music.mp3" autoplay></audio> -->
  <audio ref="audio" src="test.wav"></audio>
  <button class="button" @click="playAudio"></button>

  <br>

</template>

<style>
.title {
  text-align: center;
  font-size: 100px;
}
.button {
  background-image: url('/img.jpg');
  background-size: cover;
  width: 2000px;
  height: 3000px;
}
</style>