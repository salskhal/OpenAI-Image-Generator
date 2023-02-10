<template>
  <div class="grid">
    <div v-for="(img, index) in imgUrl.data" :key="index" class="img group">
      <img :src="img.url" alt="f" v-if="imgUrl" />
      
    </div>
  </div>
</template>

<script setup>
import { usePromptStore } from "@/store/prompt";
import { storeToRefs } from "pinia";

const store = usePromptStore();

const { imgUrl } = storeToRefs(store);

const saveImage = (id, photo) => {
    store.downloadFile(id, photo)
}

</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}




img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.75rem;
}

.img {
  border-radius: 0.75rem;
  position: relative;
  --tw-shadow: 0 0 1px 0 rgba(189, 192, 207, 0.06),
    0 10px 16px -1px rgba(189, 192, 207, 0.2);
  --tw-shadow-colored: 0 0 1px 0 var(--tw-shadow-color),
    0 10px 16px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}




@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 480px) {
    .grid{
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

</style>
