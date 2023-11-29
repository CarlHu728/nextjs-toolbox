<script>
export default {
  data() {
    return {
      musicList: [
        'Feliz Navidad.ogg',
        'Hallelujah.ogg',
        'Last Christmas.ogg',
        'O Christmas Tree.ogg'
      ],
      currentMusicIndex: 0,
      backgroundMusic: null
    };
  },
  computed: {
    currentMusic() {
      return this.musicList[this.currentMusicIndex];
    }
  },
  methods: {
    playMusic() {
      const boomSound = new Audio('test.wav');
      boomSound.play();
      
      this.currentMusicIndex = Math.floor(Math.random() * this.musicList.length);
      if (this.backgroundMusic && !this.backgroundMusic.paused) {
        this.backgroundMusic.pause();
      }
      this.backgroundMusic = new Audio(this.currentMusic);
      this.backgroundMusic.play();
    }
  }
};

</script>

<template>
  <div class="background">
    <div class="center-container">
      <h1 class="title">Santa Hatter</h1>

      <div class="empty-space"></div>

      <div class="box">
        <button class="button" @click="playMusic">
          Click Me
        </button>
      </div>

      
      <h1 class="music">Current Music: {{ currentMusic }}</h1>
    </div>
  </div>
</template>

<style>
.title {
  text-align: center;
  margin-top: 20vw;
  font-size: 15vw;
  font-family: Caslon;
  color: white;
}

.button {
  /* text-align: center; */
  font-size: 6vw;
  font-family: Pixeloid Mono;
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

.center-container {
  display: flex;
  justify-content: center;
  height: 100vw;
}

@media (max-width: 1000px) {
  .center-container {
    justify-content: initial;
    display: initial;
  }
}

.music {
  text-align: center;
  position: fixed;
  bottom: 0;
}

</style>