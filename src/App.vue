<template>
  <Nav />
  <Search @generate-image="generateImage" />
  <Loader v-if="loading" />

  <!-- <button @click="MyPrompt.generateImage">Trial</button> -->
  <div class="image">
    <div v-for="(img, index) in imgUrl.data" :key="index">
      <img :src="img.url" alt="f" v-if="imgUrl"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { Configuration, OpenAIApi } from "openai";
import Nav from "./components/Nav.vue";
import Search from "./components/Search.vue";
import Loader from "./components/Loader.vue";

import { storeToRefs } from "pinia";
import { usePromptStore } from "@/store/prompt";

const MyPrompt = usePromptStore();
const name = "kahlid";

const { prompt, generateImage, imgUrl, loading } = storeToRefs(MyPrompt);
</script>

<style scoped>
.image{
  display: grid;
  align-items: center;
  padding-inline: 50px;
  gap: 50px;
  grid-template-columns: repeat(2, 1fr);
}

/* .image{
  width: 200px;
  height: 200px;
} */

.image img{
  width: 100%;
}

@media (min-width: 768px){
  .image{
    padding-inline: 100px;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
