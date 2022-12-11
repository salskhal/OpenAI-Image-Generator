<template>
  <Nav/>
  <Search />


  
  <button @click="generateImage">Trial</button>
  <img :src="imgUrl" alt="f" v-if="imgUrl"/>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { Configuration, OpenAIApi } from "openai";
import Nav from "./components/Nav.vue";
import Search from "./components/Search.vue";

// onMounted(() => {
//   console.log(import.meta.env.VITE_OPENAI_API_KEY);
// });
// const { Configuration, OpenAIApi } = "openai";

const imgUrl = ref("");

let prompt = ref(
  "an astronaut playing basketball with cats in space, digital art"
);
let imageSize = ref("512x512");

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async () => {
  const completion = await openai.createImage({
    prompt: prompt.value,
    n: 6,
    size: imageSize.value,
  });
  console.log(completion.data);
  imgUrl.value = completion.data.data[0].url;
  console.log(imgUrl.value);
};
</script>

<style></style>
