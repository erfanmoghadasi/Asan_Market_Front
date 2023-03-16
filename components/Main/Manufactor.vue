<template>
  <div class="w-full bg-gray-b9 text-center">
    <h5 class="font-bold text-3xl m-xl:text-2xl text-primary-b3 pt-12">تولید کنندگان</h5>
    <div class="flex w-full justify-between items-center h-52">
      <NuxtIcon
        class="text-[122px] m-xl:text-[100px] opacity-60 text-[#BCBCBC]"
        name="main/sony"
      />
      <NuxtIcon
        class="text-[132px]  m-xl:text-[110px] opacity-60 text-[#BCBCBC]"
        name="main/nintendo"
      />
      <NuxtIcon
        class="text-[150px] m-xl:text-[130px] opacity-60 text-[#BCBCBC]"
        name="main/microsoft"
      />
      <NuxtIcon
        class="text-[36px] m-xl:text-[24px] opacity-60 text-[#BCBCBC]"
        name="main/apple"
      />
      <NuxtIcon
        class="text-[122px] m-xl:text-[100px] opacity-60 text-[#BCBCBC]"
        name="main/verity"
        filled
      />
      <NuxtIcon
        class="text-[132px] m-xl:text-[110px] opacity-60 text-[#BCBCBC]"
        name="main/panatech"
      />
      <NuxtIcon
        class="text-[132px] m-xl:text-[110px] opacity-60 text-[#BCBCBC]"
        name="main/nintendo"
      />
      <NuxtIcon
        class="text-[122px] m-xl:text-[100px] opacity-60 text-[#BCBCBC]"
        name="main/sony"
      />
      <NuxtIcon
        class="text-[36px] m-xl:text-[34px] opacity-60 text-[#BCBCBC]"
        name="main/apple"
      />
      <NuxtIcon
        class="text-[150px] m-xl:text-[120px] opacity-60 text-[#BCBCBC]"
        name="main/microsoft"
      />
    </div>
    <div
      class="h-[330px] m-xl:h-[250px] w-full box flex gap-[500px] m-xl:gap-40 justify-between"
    >
      <div
        class="h-full flex flex-col justify-center gap-4 items-start pr-40 m-xl:pr-20"
      >
        <h6 class="font-bold text-3xl m-xl:text-xl text-white">آسان سرویس</h6>
        <p class="font-light text-xl m-xl:text-sm text-white text-right">
          خدمات گارانتی محصولات خریداری شده از آسان مارکت در آسان سرویس ، با پر
          کردن فرم گارانتی میتوانید از خدمات آسان سرویس بهره مند شوید
        </p>
        <button class="w-40 text-white font-bold text-xl h-12 m-xl:text-sm m-xl:h-10 rounded box-btn">
          مشاهده سایت
        </button>
      </div>
      <nuxt-img src="images/main/mask.png" class="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  background: linear-gradient(270deg, #130f26 49.31%, rgba(19, 15, 38, 0) 100%);
}
.box-btn {
  background: linear-gradient(95.1deg, #004e8b -36.14%, #86d4ff 131.58%);
}
</style>
