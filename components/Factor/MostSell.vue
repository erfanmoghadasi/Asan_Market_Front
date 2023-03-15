<template>
  <div class="w-full max-w-[1558px] m-xl:max-w-[1280px] px-12">
    <div class="relative w-full flex flex-col">
      <h4 class="font-bold text-3xl text-primary-b3 text-center py-16">
        خریداران این محصولات را خریده اند
      </h4>
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

      <MainWeekFav />
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
]);
</script>

<style scoped></style>
