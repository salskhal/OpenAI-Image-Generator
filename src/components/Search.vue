<template>
  <main>
    <div class="surprise">
        <p>Start with a detailed description</p>
        <button @click="selectedPrompt">Surprise me</button>
    </div>
    <form @submit.prevent="generateImages">
        <input type="text" placeholder="An Impressionist oil painting of sunflowers in a purple vase…" v-model="prompt">
        <button>Generate</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { usePromptStore } from "@/store/prompt";


const MyPrompt = usePromptStore()

const { prompt, generateImage } = storeToRefs(MyPrompt)


const generateImages = () =>{
  if(prompt.value === null || prompt.value.match(/^ *$/) !== null) return
  MyPrompt.generateImage()
}


const available = ref([
  {
    prompt: "An Impressionist oil painting of sunflowers in a purple vase…"
  },
  {
    prompt: "3D render of a pink balloon dog in a violet room"
  },
  {
    prompt: "A photograph of a sunflower with sunglasses on in the middle of the flower in a field on a bright sunny day"
  },
  {
    prompt: "A Formula 1 car driving on a neon road"
  },
  {
    prompt: "A hand-drawn sailboat circled by birds on the sea at sunrise"
  },
  {
    prompt: "A comic book cover of a superhero wearing headphones"
  },
  {
    prompt: "A synthwave style sunset above the reflecting water of the sea, digital art"
  },
  {
    prompt: "An abstract visual of artificial intelligence"
  },
  {
    prompt: "A Shiba Inu dog wearing a beret and black turtleneck"
  },
  {
    prompt: "A cat riding a motorcycle"
  },
  {
    prompt: "Two futuristic towers with a skybridge covered in lush foliage, digital art"
  },
])

const selectedPrompt = () =>{
  var item = available.value[Math.floor(Math.random()*available.value.length)]
  prompt.value = item.prompt
}


</script>

<style scoped>
main{
    /* background: pink; */
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 150px;
    /* font-family: sans-serif; */
    font-family: "Poppins", sans-serif;
}
.surprise{
  display: flex;
  align-items: center;
  gap: 10px;
}

.surprise button{
  font-family: "Poppins", sans-serif;
  outline: none;
}

form{
  width: 100%;
  display: flex;
  background: white;
  /* padding: 10px; */
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgb(0 0 82 / 15%);
  margin-top: 20px;
}

input{
  flex-grow: 2;
  padding: 10px;
  border: none;
  font-size: 15px;
}

form button{
  border: none;
  padding-inline: 20px;
  border-left: 1px solid rgba(0,0,0,.05);
  background: white;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: all .2s ease-out;
  outline: none;
}

form button:hover{
  background: rgb(218, 218, 218);
}




</style>