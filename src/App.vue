<template>
  <div id="app">
    <div class="container is-fluid">
      <div class="controls">
        <div class="controls-left">
          <div class="field">
            <input
              class="is-checkradio"
              id="radio1"
              type="radio"
              name="radio1"
              checked="checked"
              value="Microphone"
              v-model="inputType"
            />
            <label id="radio-label1" for="radio1">Microphone</label>
            <input
              class="is-checkradio"
              id="radio2"
              type="radio"
              name="radio2"
              value="File"
              v-model="inputType"
            />
            <label id="radio-label2" for="radio2">File</label>
          </div>
        </div>
        <div class="button-message-wrapper">
          <div class="control-button">
            <button
              v-if="inputType === 'Microphone'"
              :class="['button', 'is-primary']"
              @click="handlePlay"
            >
              <span class="icon is-small">
                <i class="fas fa-microphone"></i>
              </span>
              <span>{{isRunning ? "End Session" : "Start"}}</span>
            </button>

            <form v-else-if="inputType === 'File'" enctype="multipart/form-data">
              <div class="field">
                <div :class="['file', 'is-primary', isUploading && 'disabled']">
                  <label class="file-label">
                    <input
                      :disabled="isUploading"
                      name="resume"
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
                      <span class="file-label is-primary">Choose File</span>
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="message" :style="{color: error && 'red'}">
            <span>{{message}}</span>
          </div>
        </div>
      </div>

      <audio v-show="false" ref="player" id="player" controls></audio>
      <div class="title-wrapper">
        <input class="input title-input" type="text" placeholder="Title" />
      </div>

      <div id="editor" ref="editor" contenteditable>{{transcription}}</div>
      <div class="buttons is-right bottom">
        <button :class="['button', 'is-primary', 'save-button']" @click.prevent="handleSave">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      isUploading: false,
      isUploaded: false,
      message: "",
      file: "",
      isRunning: false,
      error: "",
      transcription: "",
      inputType: "File"
    };
  },

  // computed() {},

  methods: {
    handleChange() {
      this.error = false;
      this.message = "";
      this.file = this.$refs.file.files[0];
      const url = URL.createObjectURL(this.file);
      this.$refs.player.src = url;
      window.myfile = this.$refs.file.files[0];
      window.player = this.$refs.player;
      this.sendFile();
    },

    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("duration", this.$refs.player.duration);

      try {
        this.isUploading = true;
        const resp = await axios.post("/upload/file", formData);
        this.transcription = resp.data.transcription;
        console.log("transcription", this.transcription, resp.data);
        this.message = `File ${this.file.name} uploaded`;
      } catch (err) {
        console.log("err POST request", err);
        this.message = err.response.data.error;
        this.error = true;
      }
      this.isUploading = false;
    },

    handlePlay() {},
    handleSave() {},
    handleClear() {}
  }
};
</script>

<style lang="scss">
@import "./main.scss";

@import "~bulma";
@import "~bulma-checkradio";

@import "./styles.scss";
</style>


  <!-- <button class="stop-btn" @click="handleStop" :disabled="!isRunning">{{"Stop"}}</button> -->
    <!-- <audio ref="danutza" controls src="./assets/Danutza.mp3"></audio>--> add .