<template>
  <div class="max-w-[1558px] m-xl:mx-20 m-xl:max-w-full mx-auto my-28 flex items-center gap-6 justify-between">
    <div
      class="box relative w-44 h-44 m-xl:w-32 m-xl:h-32 rounded-2xl bg-gradient-to-br from-[#E9ECEF] to-[#FFFFFF] cursor-pointer"
      v-for="item in boxList"
    >
      <nuxt-img
        class="mx-auto m-xl:scale-75 -translate-y-8 transition-all hover:-translate-y-10"
        :src="`/images/box-category/${item.image}.png`"
      />
      <p
        class="absolute bottom-6 w-full font-medium text-center text-lg m-xl:text-sm text-gray-b1"
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
