<template>
  <div class="2xl:max-w-[1558px] m-xl:max-w-full gap-6 m-xl:mx-20 mx-auto my-20 flex items-center justify-between relative">
    <div
      v-for="post in reviews"
      :style="{ backgroundImage: `url(${post.bgImg})` }"
      class="post w-[292px] h-[224px] m-xl:min-w-[220px] m-xl:h-[170px] rounded-[10px] overflow-hidden"
      :key="post.id"
    >
      <div class="flex w-full h-full items-end justify-between p-6 text-white">
        <p class="font-black text-xl">{{ post.title }}</p>
        <NuxtIcon class="text-xl" name="main/arrow-left-circle" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reviews = ref([
  {
    id: 1,
    bgImg: "images/main/reviews/asus1.png",
    title: "بررسی گوشی گیمینگ ایسوس",
  },
  {
    id: 2,
    bgImg: "images/main/reviews/asus2.png",
    title: "بررسی گوشی گیمینگ ایسوس",
  },
  {
    id: 3,
    bgImg: "images/main/reviews/asus3.png",
    title: "بررسی گوشی گیمینگ ایسوس",
  },
  {
    id: 4,
    bgImg: "images/main/reviews/asus4.png",
    title: "بررسی گوشی گیمینگ ایسوس",
  },
  {
    id: 5,
    bgImg: "images/main/reviews/asus2.png",
    title: "بررسی گوشی گیمینگ ایسوس",
  },
]);
</script>

<style scoped>
.post {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 43.02%,
    rgba(0, 0, 0, 0.67) 100%
  );
}
</style>
