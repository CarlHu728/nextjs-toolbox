<script>
export default {
  methods: {
    playAudio() {
      const audio = new Audio('test.wav');
      audio.play()
    }
  }
};

</script>

<template>
  <div class="background">
    <h1 class="title">Santa Hatter</h1>
    <audio src="music2.ogg" autoplay loop></audio>

    <div class="empty-space"></div>

    <div class="box">
      <button class="button" @click="playAudio">
        Click Me
      </button>
    </div>
  </div>
</template>

<style>
.title {
  text-align: center;
  margin-top: 20px;
  font-size: 15vw;
  color: white;
}

.button {
  /* text-align: center; */
  font-size: 8vw;
  color: white;

  background-image: url('/button_normal.png');
  background-color: rgba(0, 0, 0, 0);
  background-size: cover;

  width: 40vw;
  height: 16vw;

  /* padding: 10px 20px; */
  border: none;
  cursor: pointer;
  /* 正常状态背景 */
}

/* 悬停状态 */
.button:hover {
  background-image: url('/button_hover.png');
}

/* 点击状态 */
.button:active {
  background-image: url('/button_pressed.png');
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.background {
  position: absolute;
  left: 0;
  top: 0;
  background-image: url('/background.webp');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.empty-space {
  margin-bottom: 30vh;
}

</style>