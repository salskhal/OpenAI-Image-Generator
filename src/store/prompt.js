import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import { Configuration, OpenAIApi } from "openai";

import FileSaver from "file-saver";



export const usePromptStore = defineStore("prompts", () => {
  //   variables
  let imageSize = ref("256x256");
  let prompt = ref("");
  let imgUrl = ref("");
  let loading = ref(false)


  //   OpenAI configuration
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  //   Methods
  const generateImage = async() => {
    loading.value = true;
    imgUrl.value = ""
    const completion = await openai.createImage({
      prompt: prompt.value,
      n: 4,
      // size: imageSize.value,
    });
    console.log(completion.data);
    imgUrl.value = completion.data;
    // console.log(imgUrl.value);
    loading.value = false;
    
    // console.log(prompt.value)
  };

  
// const downloadFile= async (id, photo) =>  {
//   FileSaver.saveAs(photo, `download-${id}.jpg`);
// } 


  return { prompt, generateImage,imgUrl, loading,  };
});
