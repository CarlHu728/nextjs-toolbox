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
    <h1 class="title">Santa Hatter</h1>
    <!-- <img src="/img.jpg"> -->
    <audio src="music2.ogg" autoplay loop></audio>
    <audio ref="audio" src="test.wav"></audio>
    <br>
    <button class="button" @click="playAudio"></button>
  </div>
</template>

<style>
.title {
  text-align: center;
  font-size: 100px;
  color: white;
}

.button {
  text-align: center;

  background-image: url('/img.jpg');
  background-size: cover;
  width: 50vw;
  height: 50vh;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/background.webp');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  
}

</style>