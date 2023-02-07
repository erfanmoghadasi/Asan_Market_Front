<template>
  <div class="p-44 flex items-center justify-between">
    <div
      class="box relative w-44 h-44 rounded-2xl bg-gradient-to-br from-[#E9ECEF] to-[#FFFFFF] cursor-pointer"
      v-for="item in boxList"
    >
      <nuxt-img
        class="mx-auto -translate-y-8"
        :src="`/images/box-category/${item.image}.png`"
      />
      <p
        class="absolute bottom-6 w-full font-medium text-center text-lg text-gray-b1"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const boxList = ref([
  {
    title: "کامپیوتر",
    image: "pc",
  },
  {
    title: "لوازم جانبی موبایل",
    image: "mobile",
  },
  {
    title: "ذخیره سازی",
    image: "memory",
  },
  {
    title: "کنسول بازی",
    image: "game",
  },
  {
    title: "کابل و تبدیل",
    image: "cable",
  },
  {
    title: "صوتی و تصویری",
    image: "tv",
  },
  {
    title: "محصولات اپل",
    image: "iphone",
  },
  {
    title: "تبلت و لپ تاپ",
    image: "laptop",
  },
]);
</script>

<style scoped>
.box {
  box-shadow: -5.79868px -1.93289px 15.4631px rgba(255, 255, 255, 0.8),
    5.79868px 4.83223px 19.3289px #e5eef5;
}
</style>
