<template>
  <div id="app">
    <div class="container">
      <div class="controls">
        <div class="buttons">
          <button class="play-btn" @click="handlePlay">{{isRunning ? "Stop" : "Start"}}</button>
          <button class="save-btn" @click.prevent="handleSave" :disabled="isRunning">Save</button>
          <button class="clear-btn" @click.prevent="handleClear">Clear</button>
        </div>

        <div class="dropdown">
          <select class="language-select" v-model="currentLang">
            <option :key="lang" v-for="lang in languages" v-bind:value="lang">{{ lang }}</option>
          </select>
        </div>
      </div>

      <div class="message">
        <span>{{ isRunning ? "Te ascult..." : message}}</span>
      </div>

      <div class="words" ref="editor" contenteditable>
        <p
          class="paragraph-text"
          :key="paragraph.timestamp"
          v-for="paragraph in paragraphs"
        >{{paragraph.text}}</p>
        <p class="utterance-text">{{utterance}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      console.log("stream", stream);
    });
    var SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = window.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.continuous = true;
    this.recognition.lang = this.currentLang;
    this.recognition.maxAlternatives = 1;
    // this.handleStart();
  },

  data() {
    return {
      languages: ["ro-RO", "en-US", "es-MX"],
      currentLang: "ro-RO",
      paragraphs: [],
      utterance: "",
      isRunning: false,
      message: "Te ascult"
    };
  },

  computed: {},
  watch: {
    currentLang() {
      this.recognition.stop();
      this.recognition.lang = this.currentLang;
      // this.handleStart();
    }
  },

  methods: {
    handleClear() {
      this.recognition.stop()
      this.utterance = "";
      this.paragraphs = [];
    },
    
    handleSave() {},

    handlePlay() {
      this.isRunning ? this.handleStop() : this.handleStart();
    },

    handleStop() {
      this.isRunning = false;
      this.recognition.stop();
      this.message = "Apasa start si incepe sa vorbesti";
      console.log("STOP");
    },

    handleStart() {
      this.message = "Te ascult...";

      this.recognition.onstart = e => {
        this.isRunning = true;
        this.message = "";
      };

      this.recognition.onresult = e => {
        const isFinal = Array.from(e.results)[0].isFinal;
        if (isFinal) {
          return;
        }
        this.utterance = Array.from(e.results)
          .map(result => result[0])
          .map(p => p.transcript)
          .join("");
      };

      this.recognition.onend = e => {
        this.isRunning = false;

        this.paragraphs.push({
          text: this.utterance,
          timestamp: e.timeStamp
        });

        this.utterance = "";
      };

      this.recognition.onerror = e => {
        console.log("ONERROR", e.error);
        this.message = e.error;
        if (e.error === "no-speech") {
          this.message = "Apasa start si incepe sa vorbesti";
        } else {
          this.message = e.error;
        }
      };

      this.recognition.start();
    }
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>


  <!-- <button class="stop-btn" @click="handleStop" :disabled="!isRunning">{{"Stop"}}</button> -->
    <!-- <audio ref="danutza" controls src="./assets/Danutza.mp3"></audio>-->