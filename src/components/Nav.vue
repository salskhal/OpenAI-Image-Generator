<template>
  <nav>
    <div>
      <h2>OpenAI Image Generator</h2>
    </div>
    <div>
      <a href="https://beta.openai.com/docs/introduction" target="_blank"
        >OpenAI Docs</a
      >
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  padding: 20px 20px;
  border-bottom: 2px solid rgba(0,0,0,.10);
  align-items: center;
  justify-content: space-between;
}


h2{
  font-weight: 600;
}
a{
    text-decoration: none;
    color: rgba(0,0,0,.30);
    font-weight: 400;
}
</style>
