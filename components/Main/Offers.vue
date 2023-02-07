<template>
  <div class="mx-44 my-20 px-6 h-[454px] bg-gray-b8 rounded-2xl flex items-center justify-between">
    <div class="w-[250px] mx-auto ">
      <div class="gift-cart w-44 mx-auto relative z-20">
        <p class="font-black text-3xl text-primary-b4 leading-[50px]">پیشنهادهای شگفت انگیز 
          <span class="text-primary-orginal">آسان مارکت</span>
        </p>
        <nuxt-img src="images/main/gift.png" />
      </div>
    </div>
    <div class="cart-box flex justify-between gap-6 px-6 rounded-xl w-full">
      <UtilsCard
        v-for="card in cardsList"
        :key="card.id"
        :image="card.image"
        :category="card.category"
        :description="card.description"
        :rate="card.rate"
        :price="card.price"
        :liked="card.liked"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const cardsList = ref([
  {
    id: 1,
    image: "images/products/watch.png",
    category: "ذخیره سازی",
    description: "ساعت هوشمند طرح اپل مدل NG4521",
    rate: 2,
    price: "824,000",
    liked: false,
  },
  {
    id: 2,
    image: "images/products/watch.png",
    category: "ذخیره سازی",
    description: "ساعت هوشمند طرح اپل مدل NG4521",
    rate: 2,
    price: "824,000",
    liked: false,
  },
  {
    id: 3,
    image: "images/products/watch.png",
    category: "ذخیره سازی",
    description: "ساعت هوشمند طرح اپل مدل NG4521",
    rate: 2,
    price: "824,000",
    liked: false,
  },
  {
    id: 4,
    image: "images/products/watch.png",
    category: "ذخیره سازی",
    description: "ساعت هوشمند طرح اپل مدل NG4521",
    rate: 2,
    price: "824,000",
    liked: false,
  },
]);
</script>

<style scoped>
  .cart-box {
    box-shadow: -25px 0px 103px -75px #00000040, 25px 0px 103px -75px #00000040;
  }
  .gift-cart::before {
    content: '';
    position: absolute;
    background: #000;
    width: 101%;
    height: 101%;
    z-index: 0;
  }
</style>
