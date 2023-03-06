<template>
  <div dir="ltr" class="relative w-full h-[690px] m-xl:h-[550px]">
    <ClientOnly>
      <swiper
        :modules="[Autoplay, Navigation]"
        class="w-full h-full"
        :navigation="{ nextEl: '.next-el-new', prevEl: '.prev-el-new' }"
        :slides-per-view="1"
        :loop="true"
        :speed="2000"
        :autoplay="{ delay: 3000, waitForTransition: true }"
      >
        <swiper-slide
          v-for="slide in sliderItems"
          :key="slide.id"
          class="w-full h-full flex items-center justify-between px-48 m-xl:px-20 text-white bg-gradient-to-l from-primary-orginal to-[#99BBD6]"
        >
          <div>
            <nuxt-img
              :src="slide.img"
              class="m-xl:scale-75"
              height="450"
              width="370"
            />
          </div>
          <div
            class="h-full max-w-[650px] m-xl:max-w-[550px] items-end text-right flex flex-col justify-center gap-8"
          >
            <h3 class="font-black text-5xl m-xl:text-4xl leading-[60px]">
              {{ slide.title }}
              <span class="text-[#72FFD5]"> محصولات دیجیتال</span>
            </h3>
            <p class="font-light text-xl m-xl:text-lg">
              {{ slide.description }}
            </p>
            <button
              class="c-btn-white bg-white w-44 h-14 text-primary-orginal text-xl font-bold"
            >
              {{ slide.buttonTitle }}
            </button>
          </div>
        </swiper-slide>
      </swiper>
      <NuxtIcon
        name="swiper/arrow-header-left"
        filled
        class="next-el-new text-[40px] absolute top-[50%] right-5 cursor-pointer z-10"
      />
      <NuxtIcon
        name="swiper/arrow-header-right"
        filled
        class="prev-el-new text-[40px] absolute top-[50%] left-5 cursor-pointer z-10"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { SwiperSlide, Swiper } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

const sliderItems = ref([
  {
    id: 1,
    title: "پلتفــــرم خــــرید و فــــروش",
    description:
      "اگر خریدار عمده محصولات دیجیتالی هستید پلتفرم ما محصولاتی متنوع را برای شما فراهم آورده که میتوانید از فروشگاه تهیه و خرید کنید",
    buttonTitle: "شروع کنید",
    img: "images/main/sony.png",
  },
  {
    id: 2,
    title: "پلتفــــرم خــــرید و فــــروش",
    description:
      "اگر خریدار عمده محصولات دیجیتالی هستید پلتفرم ما محصولاتی متنوع را برای شما فراهم آورده که میتوانید از فروشگاه تهیه و خرید کنید",
    buttonTitle: "شروع کنید",
    img: "images/main/sony.png",
  },
]);
</script>

<style scoped></style>
