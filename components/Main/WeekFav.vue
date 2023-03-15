<template>
  <div
    class="max-w-[1558px] mx-auto fav-box w-full h-[122px] m-xl:h-[90px] rounded-lg flex justify-between gap-6 items-center px-16 my-4"
  >
    <div class="flex items-center justify-center gap-6">
      <h3 class="font-bold text-3xl m-xl:text-xl text-white">
        محبوب ترین های هوشمند این هفته
      </h3>
      <button
        class="bg-white w-32 m-xl:w-28 h-10 m-xl:text-sm transition-all hover:border hover:border-green-700 hover:bg-opacity-90 rounded flex items-center justify-center gap-3"
      >
        <span>مشاهده</span>
        <NuxtIcon name="main/arrow-left" />
      </button>
    </div>
    <div class="flex items-center justify-between gap-10">
      <NuxtIcon filled class="text-[122px] m-xl:text-[90px] opacity-60" name="main/sony" />
      <NuxtIcon filled class="text-[132px] m-xl:text-[90px] opacity-60" name="main/nintendo" />
      <NuxtIcon filled class="text-[150px] m-xl:text-[110px] opacity-60" name="main/microsoft" />
      <NuxtIcon filled class="text-[36px] m-xl:text-[25px] opacity-60" name="main/apple" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.fav-box {
  background: linear-gradient(269.68deg, #6ea89a -3.33%, #597c74 105.44%);
}
</style>
