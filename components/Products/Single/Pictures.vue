<template>
  <div class="w-[607px] flex flex-col gap-6">
    <div
      class="relative grid place-items-center w-full h-[480px] border border-gray-b7"
    >
      <div
        class="absolute top-6 right-6 flex flex-col gap-6 text-2xl text-gray-b2"
      >
        <NuxtIcon filled class="cursor-pointer" name="single-product/chart" />
        <NuxtIcon filled class="cursor-pointer" name="single-product/heart" />
        <NuxtIcon
          @click="() => (isShareModalOpen = true)"
          filled
          class="cursor-pointer"
          name="single-product/hierarchy"
        />
        <NuxtIcon
          @click="() => (isNotificationModalOpen = true)"
          filled
          class="cursor-pointer"
          name="single-product/notification"
        />
        <NuxtIcon filled class="cursor-pointer" name="single-product/row" />
      </div>
      <nuxt-img src="images/products/single-product/watch.png" />
    </div>
    <div class="flex items-center justify-between gap-3">
      <span
        v-for="p in 5"
        class="w-[112px] h-[112px] bg-gray-b8 grid place-items-center"
      >
        <NuxtIcon name="single-product/gallery-slash" filled class="text-2xl" />
      </span>
    </div>
    <div
      @click="() => (isReportModalOpen = true)"
      class="flex items-center gap-3 text-gray-b4 cursor-pointer"
    >
      <NuxtIcon name="single-product/info-circle" filled />
      <p class="font-medium">گزارش نادرستی مشخصات</p>
    </div>

    <!-- ------------------------------ REPORT MODAL ---------------------------- -->
    <ProductsModalReport
      :isReportModalOpen="isReportModalOpen"
      @close-modal="() => (isReportModalOpen = false)"
    />
    <!-- ------------------------------ SHARING MODAL ---------------------------- -->
    <ProductsModalShare
      :isShareModalOpen="isShareModalOpen"
      @close-modal="() => (isShareModalOpen = false)"
    />
    <!-- ------------------------------ NOTIFICATION MODAL ---------------------------- -->
    <ProductsModalNotification
      :isNotificationModalOpen="isNotificationModalOpen"
      @close-modal="() => (isNotificationModalOpen = false)"
    />
  </div>
</template>

<script setup lang="ts">
const isReportModalOpen = ref(false);
const isShareModalOpen = ref(false);
const isNotificationModalOpen = ref(false);
</script>

<style scoped></style>
