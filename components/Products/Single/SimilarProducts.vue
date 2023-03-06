<template>
  <div class="relative m-xl:max-w-[1180px w-auto ">
    <h3 class="font-bold text-3xl text-primary-b3 text-center mb-16">
      محصولات مشابه
    </h3>
    <swiper
        :breakpoints="{
          1280: {
            slidesPerView: 4,
          },
        }"
        class="mt-12 mb-20 py-12 flex items-center justify-between "
        :modules="[]"
        :slides-per-view="4"
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
  </div>
</template>

<script setup lang="ts">

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
