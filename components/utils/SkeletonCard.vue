<template>
  <div
    class="bg-white w-[292px]d min-w-[292px] m-xl:w-[280px]d m-xl:min-w-[255px] h-[406px] m-xl:h-[370px] p-6 pb-8 rounded-[10px] flex flex-col justify-between card-shadow"
  >
    <div class="h-[200px] m-xl:h-[180px] w-full mx-auto skeleton"></div>
    <div class="flex flex-col justify-center gap-6 m-xl:gap-4 rounded-md">
      <div class="skeleton h-5 m-xl:h-4 w-20 m-xl:w-16 rounded-md"></div>
      <div class="skeleton h-5 m-xl:h-4 w-52 m-xl:w-44 rounded-md"></div>
      <div class="skeleton h-5 m-xl:h-4 w-28 m-xl:w-20 rounded-md"></div>
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
