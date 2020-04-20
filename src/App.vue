<template>
  <div id="app">
    <div class="container">
      <div class="controls">
        <div class="buttons">
          <button class="button is-primary" @click="handlePlay">
            <span class="icon is-small">
              <i class="fas fa-microphone"></i>
            </span>
            <span>{{isRunning ? "End Session" : "Record"}}</span>
          </button>
          <button class="button is-primary" @click.prevent="handleSave">Save</button>
          <!-- <button class="button is-primary" @click.prevent="handleClear">Clear</button> -->
        </div>
      </div>

      <form enctype="multipart/form-data" @submit.prevent="sendFile">
        <div class="field">
          <div class="file">
            <label class="file-label">
              <input
                class="file-input"
                ref="file"
                type="file"
                accept="audio/*"
                capture
                id="file"
                @change="handleChange"
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Choose a file…</span>
              </span>
            </label>
            <span v-show="file !== ''" class="file-name">{{file.name}}</span>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary">Transcribe</button>
          </div>
        </div>
      </form>
      <audio v-show="false" ref="player" id="player" controls></audio>

      <div class="words" ref="editor" contenteditable></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      message: "",
      file: "",
      isRunning: false
    };
  },

  mounted() {},

  methods: {
    handleChange() {
      this.file = this.$refs.file.files[0];
      const url = URL.createObjectURL(this.file);
      this.$refs.player.src = url;
      window.myfile = this.$refs.file.files[0];
      window.player = this.$refs.player;
    },

    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("duration", this.$refs.player.duration);
      try {
        await axios.post("/upload/file", formData);
      } catch (error) {
        console.log("Error POST request", error);
      }
    },

    handlePlay() {},
    handleSave() {},
    handleClear() {}
  }
};
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
@import "./styles.scss";
</style>


  <!-- <button class="stop-btn" @click="handleStop" :disabled="!isRunning">{{"Stop"}}</button> -->
    <!-- <audio ref="danutza" controls src="./assets/Danutza.mp3"></audio>-->