<template>
  <div
    class="w-[450px] m-xl:w-[370px] rounded-[10px] bg-gray-b9 text-gray-b7 p-6 border border-gray-b7"
  >
    <h3 class="font-bold text-2xl m-xl:text-lg text-gray-b1 mb-6">فروشنده</h3>
    <div class="py-4 flex gap-3 border-b border-gray-b7">
      <div class="flex flex-col gap-3">
        <NuxtIcon name="single-product/shop" filled class="text-2xl m-xl:text-lg" />
      </div>
      <div class="flex flex-col gap-4">
        <p class="text-xl m-xl:text-base font-medium text-gray-b2">فروشگاه اسپیس</p>
        <p class="text-gray-b5 font-medium m-xl:text-sm">
          50% رضایت از کالا | عملکرد خیلی خوب
        </p>
      </div>
    </div>
    <div class="py-4 flex gap-3 border-b border-gray-b7 text-success-b1">
      <div class="flex flex-col gap-3">
        <NuxtIcon name="single-product/3d-square" filled class="text-2xl m-xl:text-lg" />
        <NuxtIcon name="single-product/green-dot" filled class="text-2xl m-xl:text-lg" />
      </div>
      <div class="flex flex-col gap-4">
        <p class="text-lg m-xl:text-sm font-medium">خرید کارتنی | حداقل 20 کارتن</p>
        <p class="text-lg m-xl:text-sm font-medium">تعداد در هر کارتن 150 عدد</p>
      </div>
    </div>
    <div class="py-4 flex gap-3 border-b border-gray-b7">
      <div class="flex flex-col gap-3">
        <NuxtIcon name="single-product/shield-tick" filled class="text-2xl m-xl:text-lg" />
      </div>
      <div class="flex flex-col gap-4">
        <p class="text-lg m-xl:text-sm font-medium text-gray-b2">
          گارانتی اصالت و سلامت فیزیکی کالا
        </p>
      </div>
    </div>
    <div class="py-4 flex gap-3 border-b border-gray-b7">
      <div class="flex flex-col gap-3 relative">
        <NuxtIcon name="single-product/box-tick" filled class="text-2xl m-xl:text-lg" />
        <NuxtIcon
          name="single-product/blue-dot"
          filled
          class="text-6xl m-xl:text-5xl absolute -right-5 top-10"
        />
      </div>
      <div class="flex flex-col gap-4 text-gray-b2">
        <p class="text-lg  m-xl:text-sm font-medium">موجود در انبار فروشنده</p>
        <div class="text-lg font-medium flex flex-col gap-3">
          <span class="flex items-center gap-2">
            <NuxtIcon name="single-product/truck" class="text-2xl m-xl:text-lg" filled />
            <p class="font-medium text-gray-b5 text-base  m-xl:text-xs">
              ارسال از فروشنده پس از تایید نهایی 1-2 روز دیگر
            </p>
          </span>
          <span class="flex items-center gap-2">
            <NuxtIcon
              name="single-product/profile-circle"
              class="text-2xl m-xl:text-lg"
              filled
            />
            <p class="font-medium text-gray-b5 text-base  m-xl:text-xs">
              ارسال از آسان مارکت پس از دریافت از فروشنده
            </p>
          </span>
        </div>
      </div>
    </div>
    <div class="py-6 flex items-center justify-between">
      <p class="font-medium text-gray-b4 text-lg m-xl:text-base">قیمت برای شما: (هرکارتن)</p>
      <span class="font-bold text-gray-b2 text-2xl m-xl:text-lg">580,000</span>
    </div>
    <button class="c-btn-primary w-full font-bold text-xl m-xl:text-base">
      افزودن به سبد
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
