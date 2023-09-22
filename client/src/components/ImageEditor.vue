<template>
  <section class="pa-4 fill-height d-flex align-center">
    <v-container class="fill-height" style="max-height: 85vh">
      <v-row class="fill-height">
        <v-col cols="8" class="fill-height">
          <v-card
            elevation="2"
            class="d-flex flex-column align-center fill-height"
          >
            <div
              id="imageContainer"
              class="d-flex align-center justify-center w-100 h-100"
            >
              <GeneratedImage
                :imageData="{
                  aspectRatio,
                  generatedImageUrl,
                  progress,
                  generating,
                }"
              />
            </div>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-list class="text-left">
              <v-list-item>
                <div class="text-h6">Generate Image</div>
                <v-divider class="my-2 pb-2"></v-divider>
              </v-list-item>
              <v-list-item>
                <v-text-field
                  label="Prompt"
                  v-model="imagePrompt"
                ></v-text-field>
              </v-list-item>
              <v-list-item>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="Aspect Width"
                      v-model="imageWidth"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Aspect Height"
                      v-model="imageHeight"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-list-item>
              <v-list-item>
                <v-btn variant="tonal" :disabled="generating ? true : false" @click="generateImage">{{generating ? "Generating..." : "Generate"}}</v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import GeneratedImage from "./GeneratedImage.vue";

export default {
  name: "ImageEditor",
  components: {
    GeneratedImage,
  },
  data() {
    return {
      generating: false,
      progress: 0,
      generatedImageUrl: null,
      imagePrompt: "",
      imageWidth: 16,
      imageHeight: 9,
      valid: false,
      headers: {
        Authorization: "Bearer 558ee60b-af70-42a5-b27a-46215f74d0d2",
        "Content-Type": "application/json",
      },
    };
  },
  methods: {
    async generateImage() {
      this.generatedImageUrl = null;
      this.generating = true;
      this.progress = 0;
      // Createrequest data for API
      const reqData = JSON.stringify({
        msg: this.imagePrompt + " --ar " + this.aspectRatioReq,
        ref: "",
        webhookOverride: "",
        ignorePrefilter: "false",
      });

      console.log(reqData);

      try {
        const { data } = await this.$http.post(
          "https://api.thenextleg.io/v2/imagine",
          reqData,
          { headers: this.headers }
        );
        console.log("Request Sent => ", data.messageId);

        // After post check updates of prompt generation
        this.getImageStatus(data.messageId);
      } catch (error) {
        console.error("ERROR AT PROMPT => ", error);
      }
    },
    async getImageStatus(messageId) {
      try {
        // Store progress percentile sent back from api
        console.log("Starting job for", messageId);
        // Setting interval to run get request every n seconds -> add config file
          const statusInterval = setInterval(async () => {
            // Check if generation is complete
            if (this.progress !== 100) {
              console.log("The progress is below 100")
              try {
                const response = await this.$http.get(
                  `https://api.thenextleg.io/v2/message/${messageId}?expireMins=2`,
                  { headers: this.headers }
                );
                console.log(
                  "Progress Recieved for",
                  messageId,
                  " =>",
                  response
                );

                // Update progress variable every time request is run
                this.progress = response.data.progress;

                if (response.data.progressImageUrl) {
                  console.log(response.data.progressImageUrl);
                  this.generatedImageUrl = response.data.progressImageUrl;
                }

                // If proress in 100% stop sending requests
                if (response.data.progress === 100) {
                  console.log("The progress is above 100")
                  console.log(
                    "Progress Complete for",
                    messageId,
                    "! =>",
                    response.data.response.imageUrl
                  );
                  this.generating = false;
                  this.generatedImageUrl = response.data.response.imageUrl;
                  clearInterval(statusInterval)
                }
              } catch (error) {
                console.error("ERROR AT STATUS CHECK =>", error);
              }
            }
          }, 2000);
      } catch (error) {
        console.error(error);
      }
    },
    emitImagePrompt() {
      const imageData = {
        prompt: this.imagePrompt,
      };
      this.$emit("submitImagePrompt", imageData);
    },
  },
  computed: {
    aspectRatio() {
      return this.imageWidth + "/" + this.imageHeight;
    },
    aspectRatioReq() {
      return this.imageWidth + ":" + this.imageHeight;
    },
  },
};
</script>

<style>
#imageContainer {
  height: 400px;
  display: flex;
  align-items: center;
}
</style>
