<template>
  <div dir="ltr" class="w-full h-[690px] pt-24">
    <ClientOnly>
    <swiper  
      :modules="[Autoplay]"
    class="w-full h-full" 
    :slides-per-view="1" 
    :loop="true" 
    :speed="2000"
    :autoplay="{delay: 3000, waitForTransition: true}" >
      <swiper-slide
        v-for="slide in sliderItems"
        :key="slide.id"
        class="w-full h-full flex items-center justify-between px-48 text-white bg-gradient-to-l from-primary-orginal to-[#99BBD6]"
      >
      <div>
        <nuxt-img :src="slide.img" height="450" width="370" />
      </div>
      <div class="h-full  max-w-[650px] items-end text-right flex flex-col justify-center gap-8">
        <h3 class="font-black text-5xl leading-[60px]">{{ slide.title }}</h3>
        <p class="font-light text-xl">{{ slide.description }}</p>
        <button
          class="c-btn-white bg-white w-44 h-14 text-primary-orginal text-xl font-bold"
        >
          {{ slide.buttonTitle }}
        </button>
      </div>
      </swiper-slide>
    </swiper>
  </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { SwiperSlide , Swiper  } from "swiper/vue";
import { Navigation , Autoplay } from 'swiper'


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
