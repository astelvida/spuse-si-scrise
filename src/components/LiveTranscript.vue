<template>
  <div id="app">
    <div class="container is-fluid">
      <h3 class="title is-5">Speech-To-Text</h3>

      <div class="controls">
        <div class="controls-left">
          <div class="field">
            <input
              class="is-checkradio"
              id="radio1"
              type="radio"
              name="radio1"
              checked="checked"
              value="live"
              v-model="inputType"
            />
            <label id="radio-label1" for="radio1">Live</label>
            <input
              class="is-checkradio"
              id="radio2"
              type="radio"
              name="radio2"
              value="file"
              v-model="inputType"
            />
            <label id="radio-label2" for="radio2">File</label>
            <input
              class="is-checkradio"
              id="radio3"
              type="radio"
              name="radio3"
              value="recording"
              v-model="inputType"
            />
            <label id="radio-label3" for="radio3">Recording</label>
          </div>
        </div>
        <div class="button-message-wrapper">
          <div class="control-button">
            <button
              v-if="inputType === 'live'"
              :class="['button', 'is-primary']"
              @click="handleLiveTranscription"
            >
              <span class="icon is-small">
                <i class="fas fa-microphone"></i>
              </span>
              <span>{{isLive ? "End Session" : "Start Now"}}</span>
            </button>

            <form v-else-if="inputType === 'file'" enctype="multipart/form-data">
              <div class="field">
                <div :class="['file', 'is-primary', isUploading && 'disabled']">
                  <label class="file-label">
                    <input
                      :disabled="isUploading"
                      name="resume"
                      class="file-input"
                      ref="file"
                      type="file"
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
            <div v-else-if="inputType === 'recording'" class="recording-wrapper">
              <button
                :class="['button', 'is-primary', 'recording', isRecording && 'disabled']"
                @click="handleRecordingStart"
              >
                <span>Start</span>
              </button>
              <button
                :class="['button', 'is-primary', 'recording', !isRecording && 'disabled']"
                @click="handleRecordingStop"
              >
                <span>Stop</span>
              </button>
              <a id="download" ref="downloadLink">Download</a>
            </div>
          </div>
          <div class="message" :style="{color: error === true ? 'red' : 'gray'}">
            <span>{{message}}</span>
          </div>
        </div>
      </div>

      <audio ref="player" id="player" controls></audio>
      <div class="title-wrapper">
        <input class="input title-input" type="text" placeholder="Title" />
      </div>

      <div id="editor" ref="editor" contenteditable>
        <p v-if="inputType === 'File'">{{transcription}}</p>
        <div v-else class="streamed">
          <p
            class="paragraph-text"
            :key="paragraph.timestamp"
            v-for="paragraph in paragraphs"
          >{{paragraph.text}}</p>
          <p class="utterance-text">{{utterance}}</p>
        </div>
      </div>

      <div class="buttons is-right bottom">
        <button :class="['button', 'is-primary', 'save-button']" @click.prevent="handleSave">Save</button>
      </div>
      <!-- <button @click.prevent="sendAudio">Send</button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";

export default {
  name: "App",

  data() {
    return {
      isUploading: false,
      isUploaded: false,
      message: "",
      file: "",
      isLive: false,
      error: "",
      transcription: "",
      inputType: "recording",
      audioStream: "",
      paragraphs: [],
      utterance: "",
      shouldStop: false,
      stopped: false,
      mediaRecorder: {
        state: null
      },
      duration: 0,
      isRecording: false
    };
  },

  // computed() {},
  mounted() {
    var SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = window.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.continuous = true;
    this.recognition.lang = "ro-RO";
    this.recognition.maxAlternatives = 1;
    // this.handleStart();
  },

  computed: {},
  methods: {
    handleRecordingStop() {
      this.mediaRecorder.stop();
      this.isRecording = false;
    },

    handleRecordingStart() {
              this.isRecording = true;


      const handleSuccess = stream => {

        const { downloadLink, player } = this.$refs;
        let recordedChunks = [];
        window.recordedChunks = recordedChunks
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: "audio/webm"
        });

        mediaRecorder.ondataavailable = e => {
          if (e.data.size > 0) {
            recordedChunks.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          let audioUrl = URL.createObjectURL(new Blob(recordedChunks));
          console.log(audioUrl, new Blob(recordedChunks));

                  window.recordedChunks = recordedChunks

          // recordedChunks = [];
          player.src = audioUrl;
          downloadLink.href = audioUrl;
          downloadLink.download = "acetest.wav";
        };

        this.mediaRecorder = mediaRecorder;
        window.myRecorder = this.mediaRecorder;

        mediaRecorder.start();
      };

      navigator.mediaDevices.getUserMedia({ audio: true }).then(handleSuccess);
    },
    handleChange() {
      const player = document.getElementById("player");
      this.error = false;
      this.message = "";
      this.file = this.$refs.file.files[0];
      const url = URL.createObjectURL(this.file);
      player.src = url;
      window.myfile = this.$refs.file.files[0];
      window.player = player;
      this.sendFile();
    },

    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      const player = document.getElementById("player");
      console.log(document.getElementById("player").duration);
      console.log(this.duration);

      formData.append("duration", this.duration);

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

    handleLiveTranscription() {
      this.isLive ? this.handleStop() : this.handleStart();
    },

    handleStop() {
      this.isLive = false;
      this.recognition.stop();
    },

    handleStart() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        console.log("stream", stream);
      });
      this.recognition.onstart = e => {
        this.isLive = true;
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

        console.log(this.utterance);
      };

      this.recognition.onend = e => {
        this.isLive = false;

        this.paragraphs.push({
          text: this.utterance,
          timestamp: e.timeStamp
        });

        this.utterance = "";
      };

      this.recognition.onerror = e => {
        this.message = e.error;
        if (e.error === "no-speech") {
          this.message = "Apasa start si incepe sa vorbesti";
        }
      };

      this.recognition.start();
    },

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


  <!-- <button class="stop-btn" @click="handleStop" :disabled="!isLive">{{"Stop"}}</button> -->
    <!-- <audio ref="danutza" controls src="./assets/Danutza.mp3"></audio>--> add .