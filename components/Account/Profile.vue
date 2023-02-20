<template>
  <div class="w-full flex gap-6">
    <!-- ---------------------------------- RIGHT SECTION -------------------------------- -->
    <div
      class="relative max-h-[558px] px-6 pt-10 pb-8 bg-gray-b9 border-2 border-gray-b7 w-[333px] rounded-[10px] overflow-hidden z-0"
    >
      <div
        class="absolute top-0 right-0 w-full h-[101px] bg-primary-orginal z-10"
      />
      <nuxt-img
        src="images/account/profile/prof.png"
        class="relative mb-3 mx-auto z-20"
      />
      <h2 class="text-center font-bold text-xl text-gray-b2 mb-5">
        حسین دهقانی
      </h2>
      <div
        class="w-full py-4 font-medium flex items-center justify-between border-b border-dashed"
      >
        <span class="text-gray-b5">شناسه کاربری:</span>
        <span class="text-gray-b2">6543265</span>
      </div>
      <div
        class="w-full py-4 font-medium flex items-center justify-between border-b border-dashed"
      >
        <span class="text-gray-b5">نوع حساب:</span>
        <span class="text-gray-b2">خرده فروشی</span>
      </div>
      <div class="w-full py-4 font-medium flex items-center justify-between">
        <span class="text-gray-b5">وضعیت حساب:</span>
        <span class="text-gray-b2">تایید شده</span>
      </div>
      <button
        class="mt-6 w-full c-btn-primary flex items-center justify-center gap-2"
      >
        <NuxtIcon name="account/profile/edit" filled class="text-xl" />
        <span class="font-medium text-sm">ویرایش اطلاعات</span>
      </button>
      <button
        class="mt-3 w-full c-btn-primary flex items-center justify-center gap-2"
      >
        <NuxtIcon
          name="account/profile/shield-security"
          filled
          class="text-xl"
        />
        <span class="font-medium text-sm">امنیت و کلمه عبور</span>
      </button>
    </div>
    <!-- ---------------------------------- MIDDLE SECTION -------------------------------- -->
    <div
      class="grow p-8 max-h-[558px] bg-gray-b9 border-2 border-gray-b7 rounded-[10px]"
    >
      <div class="flex gap-4">
        <span class="w-2 h-8 bg-primary-orginal rounded-full" />
        <span class="font-bold text-2xl text-gray-b2">اطلاعات کاربری</span>
      </div>
      <div
        class="max-h-[434px] grid pl-2 grid-cols-2 gap-x-6 gap-y-3 mt-6 overflow-y-auto"
      >
        <div
          v-for="item in 20"
          class="w-full h-12 text-[17px] bg-gray-b8 flex items-center px-4 rounded-lg gap-2"
        >
          <span class="text-gray-b4">نام و نام خانوادگی:</span>
          <span class="font-medium text-gray-b2">حسین دهقانی</span>
        </div>
      </div>
    </div>
    <!-- ---------------------------------- LEFT SECTION -------------------------------- -->
    <div
      class="w-[387px] max-h-[558px] p-8 border-2 border-gray-b7 bg-gray-b9 rounded-[10px]"
    >
      <div class="flex gap-4 mb-4">
        <span class="w-2 h-8 bg-primary-orginal rounded-full" />
        <span class="font-bold text-2xl text-gray-b2">کارت ملی </span>
      </div>
      <p class="font-medium leading-6 text-gray-b4 mb-4">
        عکس کارت ملی خود را با فرمت JPG یا PNG را آپلود کنید.حجم فایل شما 1 تا 2
        مگابایت میتواند باشد
      </p>
      <nuxt-img src="images/account/profile/meli.png" class="rounded-lg mb-8" />
      <div
        dir="ltr"
        class="h-12 mb-4 rounded-lg bg-gray-b8 flex items-center justify-start gap-4 px-4"
      >
        <NuxtIcon name="account/profile/link" filled class="text-2xl" />
        <span class="text-gray-b2">jpgfilename19842984</span>
      </div>
      <button
        class="c-btn-primary w-full h-12 mb-4 rounded-lg flex items-center justify-center gap-4 px-4"
      >
        <NuxtIcon name="account/profile/direct-send" filled class="text-2xl" />
        <span class="text-sm">آپلود فایل</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
