<template>
  <div
    class="bg-white w-[292px] h-[406px] p-6 pb-8 rounded-[10px] flex flex-col justify-between card-shadow"
  >
    <div class="h-[200px] w-full mx-auto skeleton"></div>
    <div class="flex flex-col justify-center gap-6 rounded-md">
      <div class="skeleton h-5 w-20 rounded-md"></div>
      <div class="skeleton h-6 w-52 rounded-md"></div>
      <div class="skeleton h-4 w-28 rounded-md"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-shadow {
  box-shadow: 0px 2px 20px #e5eef5;
}

.skeleton {
  animation: pulse-bg 1.5s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #dddddd;
  }
  100% {
    background-color: #eee;
  }
}
</style>
