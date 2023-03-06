<template>
  <div class="my-32  max-w-[1558px] mx-auto w-full flex flex-col items-center">
    <h3 class="font-bold text-3xl text-primary-b3 mb-24">
      دسته بندی های پر طرفدار
    </h3>
    <div class="w-full flex flex-wrap justify-center gap-[70px]">
      <div
        v-for="product in products"
        :class="product.bg"
        class="rounded-full mb-16 stone w-[189px] h-[189px] m-xl:w-[140px] m-xl:h-[140px] relative grid hover:scale-95 transition-all"
      >
        <nuxt-img
          class="place-self-center scale-105 m-xl:scale-[0.85] -translate-y-3"
          :src="product.image"
        />
        <p
          class="w-full text-center font-bold text-gray-b1 text-xl m-xl:text-base absolute -bottom-[55px]"
        >
          {{ product.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = ref([
  {
    image: "images/most-fan/camera.png",
    title: "دوربین",
    bg: "stone",
  },
  {
    image: "images/most-fan/headphone.png",
    title: "هدفون و هندزفری",
    bg: "metal",
  },
  {
    image: "images/most-fan/flash.png",
    title: "فلش مموری",
    bg: "pink",
  },
  {
    image: "images/most-fan/iphone.png",
    title: "محصولات اپل ",
    bg: "green",
  },
  {
    image: "images/most-fan/laptop.png",
    title: "لوازم جانبی لپ تاپ",
    bg: "stone",
  },
  {
    image: "images/most-fan/tv.png",
    title: "لورم ایپسوم",
    bg: "pink",
  },
  {
    image: "images/most-fan/headphone.png",
    title: "هدفون و هندزفری",
    bg: "green",
  },
  {
    image: "images/most-fan/laptop.png",
    title: "لوازم جانبی لپ تاپ",
    bg: "pink",
  },
  {
    image: "images/most-fan/camera.png",
    title: "دوربین",
    bg: "stone",
  },
  {
    image: "images/most-fan/headphone.png",
    title: "هدفون و هندزفری",
    bg: "metal",
  },
  {
    image: "images/most-fan/flash.png",
    title: "فلش مموری",
    bg: "pink",
  },
  {
    image: "images/most-fan/laptop.png",
    title: "لوازم جانبی لپ تاپ",
    bg: "stone",
  },
]);
</script>

<style scoped>
.stone {
  background: linear-gradient(143.73deg, #e5eeea 5.62%, #ece8e3 99.35%);
}
.metal {
  background: linear-gradient(143.73deg, #e5eeea 5.62%, #ece8e3 99.35%);
}
.pink {
  background: linear-gradient(143.73deg, #ffdad8 5.62%, #ecece7 99.35%);
}
.green {
  background: linear-gradient(143.73deg, #e1ffeb 5.62%, #d8e7fa 99.35%);
}
</style>
