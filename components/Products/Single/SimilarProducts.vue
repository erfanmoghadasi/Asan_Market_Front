<template>
  <div class="relative w-full px-20 m-xl:px-0 m-xl:max-w-[1280px] mx-auto flex flex-col">
    <h3 class="font-bold text-3xl text-primary-b3 text-center mb-16">
      محصولات مشابه
    </h3>
    <div class="w-full overflow-visible m-xl:px-16 relative mt- mb-20 flex items-center justify-between">
      <swiper
        :space-between="24"
          :breakpoints="{
            1800: {
              slidesPerView: 5,
            },
          }"
          class=""
          :modules="[Navigation]"
          :slides-per-view="4"
          :navigation="{ nextEl: '.next-el', prevEl: '.prev-el' }"
        >
          <swiper-slide v-for="card in newProducts" :key="card.id" class="p-2">
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
    </div>
      <NuxtIcon
        name="swiper/arrow-circle-right"
        filled
        class="next-el text-[40px] absolute top-[50%] -right-4 cursor-pointer"
      />
      <NuxtIcon
        name="swiper/arrow-circle-left"
        filled
        class="prev-el text-[40px] absolute top-[50%] -left-4 cursor-pointer"
      />
  </div>
</template>

<script setup lang="ts">
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/vue";


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
]);
</script>

<style scoped></style>
