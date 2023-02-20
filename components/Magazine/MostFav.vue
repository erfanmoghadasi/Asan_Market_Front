<template>
  <div class="w-[420px] min-w-[420px]">
    <h4 class="mb-12 font-bold text-2xl text-gray-b2">آخرین پست ها و مطالب</h4>
    <div
      v-for="item in favList"
      :key="item.id"
      class="h-32 w-full flex gap-6 mb-6"
    >
      <nuxt-img width="123" :src="item.image" />
      <div class="flex flex-col justify-between py-3">
        <h5 class="font-bold text-gray-b2">{{ item.title }}</h5>
        <p class="text-gray-b4">{{ item.description }}</p>
      </div>
    </div>
    <h4 class="my-12 font-bold text-2xl text-gray-b2">پر بازدیدترین مطالب</h4>
    <div
      v-for="item in favList"
      :key="item.id"
      class="h-32 w-full flex gap-6 mb-6"
    >
      <nuxt-img width="123" :src="item.image" />
      <div class="flex flex-col justify-between py-3">
        <h5 class="font-bold text-gray-b2">{{ item.title }}</h5>
        <p class="text-gray-b4">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const favList = ref([
  {
    id: 1,
    title: "رندرهای گلکسی M54 5G",
    description:
      "طبق رندرها، گلکسی M54 5G فاقد ماژول دوربین است و سنسورهای دوربین هر.... ",
    image: "images/magazine/fav1.png",
  },
  {
    id: 2,
    title: "مک‌بوک پرو 512 گیگی",
    description:
      "ظاهراً حافظه SSD مدل 256 گیگابایتی مک مینی M2 و مدل 512 گیگابایتی.....",
    image: "images/magazine/fav2.png",
  },
  {
    id: 3,
    title: "نکاتی برای ارز دیجیتال",
    description:
      "عملکرد این سیستم‌های مبتنی بر فعالیت‌های دنیای واقعی حتی از گذشته سریع‌تر....",
    image: "images/magazine/fav3.png",
  },
]);
</script>

<style scoped></style>
