<template>
  <Nav />
  <Search @generate-image="generateImage" />
  <Loader v-if="loading" />

  
  <div class="section">
    <ImageCard />
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { Configuration, OpenAIApi } from "openai";
import Nav from "./components/Nav.vue";
import Search from "./components/Search.vue";
import Loader from "./components/Loader.vue";
import ImageCard from "./components/ImageCard.vue";

import { storeToRefs } from "pinia";
import { usePromptStore } from "@/store/prompt";

import { downloadFile } from "./utils";

const MyPrompt = usePromptStore();
const name = "kahlid";

const { prompt, generateImage, imgUrl, loading } = storeToRefs(MyPrompt);
</script>

<style scoped>
.section{
  max-width: 60rem;
  padding: 1rem 0rem;
  margin-inline: auto;
}
</style>
