<template>
  <div class="w-full h-[690px]">
    <swiper class="w-full h-full" :slides-per-view="1" :loop="true">
      <SwiperSlide
        v-for="slide in sliderItems"
        :key="slide.id"
        class="w-full h-full flex items-center justify-between px-48 text-white bg-gradient-to-l from-primary-orginal to-[#99BBD6]"
      >
        <div class="h-full py-48 max-w-[650px] flex flex-col justify-between">
          <h3 class="font-black text-5xl leading-[60px]">{{ slide.title }}</h3>
          <p class="font-light text-xl">{{ slide.description }}</p>
          <button
            class="c-btn-white bg-white w-44 h-14 text-primary-orginal text-xl font-bold"
          >
            {{ slide.buttonTitle }}
          </button>
        </div>
        <div>
          <nuxt-img :src="slide.img" height="450" width="370" />
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";

const sliderItems = ref([
  {
    id: 1,
    title: "پلتفــــرم خــــرید و فــــروش محصولات دیجیتال",
    description:
      "اگر خریدار عمده محصولات دیجیتالی هستید پلتفرم ما محصولاتی متنوع را برای شما فراهم آورده که میتوانید از فروشگاه تهیه و خرید کنید",
    buttonTitle: "شروع کنید",
    img: "images/main/sony.png",
  },
  {
    id: 2,
    title: "پلتفــــرم خــــرید و فــــروش محصولات دیجیتال",
    description:
      "اگر خریدار عمده محصولات دیجیتالی هستید پلتفرم ما محصولاتی متنوع را برای شما فراهم آورده که میتوانید از فروشگاه تهیه و خرید کنید",
    buttonTitle: "شروع کنید",
    img: "images/main/sony.png",
  },
]);
</script>

<style scoped></style>
