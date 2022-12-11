<template>
  <span class="loader"></span>
</template>

<style scoped>
/* .loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loader::after {
  content: '';
  width: 192px;
  height: 4.8px;
  background: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
} */
 
.loader {
  width: 100%;
  height: 2px;
  display: inline-block;
  position: relative;
  /* background: rgba(255, 255, 255, 0.15); */
  overflow: hidden;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 100%;  
  height: 2px;
  background: #27c4f5;
  position: absolute;
  top: 0;
  left: 0;
  transition: all ease-in-out;
  animation: animFw 5s linear infinite;
}

@keyframes animFw {
  0% {
    /* width: 0; */
    background: #fd8d32;
  }
  20%{
    background: #70c050;
  }
  40%{
    background: #a307ba;
  }
  60%{
    background:#27c4f5;
  }
  80%{
    background: white;
  }
  100% {
    background: lemonchiffon;
  }
}
</style>