<template>
  <div class="img-container">
    <v-img
      :src="
        imageData.generatedImageUrl ? imageData.generatedImageUrl : placeHolder
      "
      :style="{ 'aspect-ratio': imageData.aspectRatio }"
      min-width="500"
      width="100%"
      cover
    >
    </v-img>
    <v-progress-circular
      v-if="imageData.generating && imageData.generatedImageUrl"
      class="image-progress"
      :rotate="360"
      :size="100"
      :width="8"
      :model-value="imageData.progress"
      color="amber"
    >
      {{ imageData.progress }}%
    </v-progress-circular>

    <v-progress-circular
      class="image-progress"
      :size="100"
      :width="8"
      v-if="imageData.generating && !imageData.generatedImageUrl"
      indeterminate
      color="amber"
    ></v-progress-circular>

  </div>
</template>

<script>
import placeHolder from "../assets/placeholder.jpg";

export default {
  name: "GeneratedImage",
  props: ["imageData"],
  data() {
    return {
      placeHolder,
    };
  },
};
</script>

<style scoped>
.image-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-container{
    background-color: black;
    position: relative;
}
</style>