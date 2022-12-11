<template>
  <Nav/>
  <Search @generate-image="generateImage  "/>
  <Loader v-if="loading"/>
  
  <!-- <button @click="MyPrompt.generateImage">Trial</button> -->
  <img :src="imgUrl" alt="f" v-if="imgUrl"/>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { Configuration, OpenAIApi } from "openai";
import Nav from "./components/Nav.vue";
import Search from "./components/Search.vue";
import Loader from "./components/Loader.vue";

import { storeToRefs } from "pinia";
import { usePromptStore } from "@/store/prompt";


const MyPrompt = usePromptStore() 
const name = "kahlid"

const { prompt, generateImage, imgUrl, loading } = storeToRefs(MyPrompt)

// onMounted(() => {
//   console.log(import.meta.env.VITE_OPENAI_API_KEY);
// });
// const { Configuration, OpenAIApi } = "openai";

// const imgUrl = ref("");
// const loading = ref(false)

// let prompt = ref(
//   "A comic book cover of a superhero wearing headphones"
// );


// let imageSize = ref("512x512");

// const configuration = new Configuration({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const generateImage = async () => {
//   loading.value = true
//   const completion = await openai.createImage({
//     prompt: prompt.value,
//     n: 6,
//     size: imageSize.value,
//   });
//   console.log(completion.data);
//   imgUrl.value = completion.data.data[0].url;
//   console.log(imgUrl.value);
//   loading.value = false
// };
</script>

<style></style>
