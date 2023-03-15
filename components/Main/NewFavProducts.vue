<template>
  <div class="w-full bg-[#F6F8FA] px-44 m-xl:px-24 pt-16">
    <div class="max-w-[1558px] mx-auto relative w-full flex flex-col">
      <h4 class="font-bold text-3xl m-xl:text-2xl text-primary-b3">جدیدترین محصولات</h4>
      <p class="text-xl m-xl:text-lg leading-[44px] text-[#8C8C8C] mt-1">
        برای مشاهده ی جدیدترین محصولات
        <span class="text-primary-orginal font-bold">اینجا کلیک کنید</span>
      </p>
      <swiper
      :space-between="24"
        :breakpoints="{
          1600: {
            slidesPerView: 5,
          },
        }"
        class="mt-12 mb-20 w-full flex items-center justify-between"
        :modules="[Navigation]"
        :slides-per-view="4"
        :navigation="{ nextEl: '.next-el-new', prevEl: '.prev-el-new' }"
      >
        <swiper-slide v-for="card in newProducts" :key="card.id">
          <UtilsCard
            :image="card.image"
            :category="card.category"
            :description="card.description"
            :rate="card.rate"
            :price="card.price"
            :liked="card.liked"
            @like-handler="card.liked = !card.liked"
          />
        </swiper-slide>
      </swiper>
      <NuxtIcon
        name="swiper/arrow-circle-right"
        filled
        class="next-el-new text-[40px] absolute top-[50%] m-xl:scale-75 -right-14 cursor-pointer"
      />
      <NuxtIcon
        name="swiper/arrow-circle-left"
        filled
        class="prev-el-new text-[40px] absolute top-[50%] m-xl:scale-75 -left-14 cursor-pointer"
      />
    </div>

    <MainWeekFav />

    <div class="max-w-[1558px] mt-16 mx-auto relative w-full flex flex-col">
      <h4 class="font-bold text-3xl m-xl:text-2xl text-primary-b3">محبوب ترین محصولات</h4>
      <p class="text-xl m-xl:text-lg leading-[44px] text-[#8C8C8C] mt-1">
        برای مشاهده ی محبوب ترین محصولات
        <span class="text-primary-orginal font-bold">اینجا کلیک کنید</span>
      </p>
      <swiper
      :space-between="24"
        :breakpoints="{
          1600: {
            slidesPerView: 5,
          },
        }"
        class="relative mt-12 mb-20 w-full flex items-center justify-between"
        :modules="[Navigation]"
        :slides-per-view="4"
        :navigation="{ nextEl: '.next-el', prevEl: '.prev-el' }"
      >
        <swiper-slide v-for="card in newProducts" :key="card.id">
          <UtilsCard
            :image="card.image"
            :category="card.category"
            :description="card.description"
            :rate="card.rate"
            :price="card.price"
            :liked="card.liked"
            @like-handler="card.liked = !card.liked"
          />
        </swiper-slide>
      </swiper>
      <NuxtIcon
        name="swiper/arrow-circle-right"
        filled
        class="next-el text-[40px] absolute top-[50%] m-xl:scale-75 -right-14 cursor-pointer"
      />
      <NuxtIcon
        name="swiper/arrow-circle-left"
        filled
        class="prev-el text-[40px] absolute top-[50%] m-xl:scale-75 -left-14 cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SwiperSlide, Swiper } from "swiper/vue";
import { Navigation } from "swiper";

const newProducts = ref([
  {
    id: 1,
    image: "images/products/memory1.png",
    category: "ذخیره سازی",
    description: "فلش مموری سامسونگ M20k11gh 16GB",
    rate: 2,
    price: "824,000",
    liked: false,
  },
  {
    id: 2,
    image: "images/products/watch.png",
    category: "ذخیره سازی",
    description: "ساعت هوشمند طرح اپل مدل NG4521",
    rate: 4,
    price: "547,000",
    liked: true,
  },
  {
    id: 3,
    image: "images/products/memory2.png",
    category: "ذخیره سازی",
    description: "بلوتوث فندکی سفید برند وریتی",
    rate: 1,
    price: "908,000",
    liked: false,
  },
  {
    id: 4,
    image: "images/products/watch.png",
    category: "ذخیره سازی",
    description: "ساعت هوشمند طرح اپل مدل NG4521",
    rate: 5,
    price: "824,000",
    liked: false,
  },
  {
    id: 5,
    image: "images/products/memory2.png",
    category: "ذخیره سازی",
    description: "بلوتوث فندکی سفید برند وریتی",
    rate: 1,
    price: "908,000",
    liked: false,
  },
  {
    id: 6,
    image: "images/products/memory2.png",
    category: "ذخیره سازی",
    description: "بلوتوث فندکی سفید برند وریتی",
    rate: 1,
    price: "908,000",
    liked: false,
  },
  {
    id: 7,
    image: "images/products/watch.png",
    category: "ذخیره سازی",
    description: "ساعت هوشمند طرح اپل مدل NG4521",
    rate: 5,
    price: "824,000",
    liked: false,
  },
  {
    id: 8,
    image: "images/products/memory2.png",
    category: "ذخیره سازی",
    description: "بلوتوث فندکی سفید برند وریتی",
    rate: 1,
    price: "908,000",
    liked: false,
  },
]);
</script>

<style scoped></style>
