<template>
  <div class="pt-[145px] m-xl:pt-[100px] px-6">
    <div class="w-full mb-12 text-[#999] m-xl:text-sm">
      فروشگاه آسان مارکت / کامپیوتر / سخت افزار و قطعات / فلش مموری سامسونگ
      M20k11gh 16GB
    </div>
    <!-- ------------------------------- UPPER SECTION ----------------------- -->
    <div class="flex gap-6 items-start mb-16">
      <!-- ---------------------- RIGHT / IMAGE ------------------ -->
      <ProductsSinglePictures />
      <!-- ---------------------- MIDDLE ------------------ -->
      <ProductsSingleIntroduction />
      <!-- ---------------------- LEFT  ------------------ -->
      <ProductsSingleShop />
    </div>

    <ProductsSingleSpecs />

    <ProductsSingleOtherShops />

    <ProductsSingleComments />

    <ProductsSingleSimilarProducts />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
</script>

<style scoped></style>
