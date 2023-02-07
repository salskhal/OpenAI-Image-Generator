<template>
  <nav>
    <div>
      <h2>SEN211 Project </h2>
    </div>
    <div>
     <p>Image Generator</p>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  padding: 10px 10px;
  border-bottom: 2px solid rgba(0,0,0,.10);
  align-items: center;
  justify-content: space-between;
}
h2{
  font-weight: 600;
  font-size: 1.2rem;
}
a{
    text-decoration: none;
    color: rgba(0,0,0,.30);
    font-weight: 400;
}
@media (min-width: 768px){
nav{
  padding: 20px 20px;
}
h2{
  font-size: 1.5rem;
}
}
</style>
