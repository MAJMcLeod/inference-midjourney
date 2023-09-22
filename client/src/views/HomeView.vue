<template>
  <div class="home">
    <v-toolbar
    style="position: fixed; z-index: 20;"
    border
      color="#262626"
      class="d-flex align-center justify-space-between px-8"
    >
      <img
        id="logo"
        alt="logo"
        src="../assets/logo.svg"
      >
      <v-spacer></v-spacer>
      <div class="d-flex">
        <div
          class="d-flex flex-column justify-center align-end"
        >
          <span class="text-body-1">Ben Aldrich</span>
          <span class="text-caption yellow">cain&abelDDB</span>
        </div>
        <v-avatar class="ml-2">
          <v-img
            :src="userImage"
            alt="Ben"
          ></v-img>
        </v-avatar>
      </div>
    </v-toolbar>
    <ImageEditor
      :generated-image="generatedImage"
      @submitImagePrompt="postImageData"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ImageEditor from '@/components/ImageEditor.vue';
import userImage from '../assets/user.jpeg';

export default {
  name: 'HomeView',
  components: {
    ImageEditor,
  },
  data() {
    return {
      message: 'Hello',
      userImage,
      generatedImage: null,
    };
  },
  created() {
    this.getImageData();
  },
  methods: {
    async getImageData() {
      // console.log(this.$http);
      try {
        const { data } = await this.$http.get('/api/get-last-image-prompt');
        this.message = data;
        console.log(this.message);
      } catch (e) {
        console.error(e);
      }
    },
    async postImageData(imageData) {
      try {
        const { data } = await this.$http.post('/api/create-image', imageData);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
#logo {
  height: 20px;
  width: auto;
}

.yellow {
  color: #fbd10e
}
</style>
