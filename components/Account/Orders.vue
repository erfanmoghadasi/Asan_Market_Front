<template>
  <div class="w-full">
    <div v-for="s in 2" class="mb-10 m-xl:mb-6 w-full flex rounded-[10px] border border-gray-b7">
      <div class="p-8 m-xl:p-6 w-1/3 h-full">
        <div class="w-full mb-10">
          <div class="flex items-center gap-3 mb-4 m-xl:mb-3 m-xl:text-sm">
            <span class="text-gray-b4">شماره سند:</span>
            <span class="text-gray-b2">656151</span>
          </div>
          <div class="flex items-center gap-3 mb-4 m-xl:text-sm">
            <span class="text-gray-b4">مبلغ :</span>
            <span class="text-gray-b2">18,500,000 تومان</span>
          </div>
          <div class="flex items-center gap-3 mb-4 m-xl:text-sm">
            <span class="text-gray-b4">وضعیت سفارش :</span>
            <span class="text-gray-b2">در انتظار تایید کارشناس</span>
          </div>
          <div class="flex items-center gap-3 mb-4 m-xl:text-sm">
            <span class="text-gray-b4">تاریخ ثبت سفارش :</span>
            <span class="text-gray-b2">1401 / 10 / 12</span>
          </div>
        </div>
        <button class="c-btn-primary h-9 w-36 m-xl:w-32 m-xl:text-xs">
          مشاهده فاکتور
        </button>
      </div>

      <div class="p-3 grow shadow-inner flex items-center gap-4 overflow-hidden">
        <div
          class="card-box p-2 flex flex-col gap-4 aspect-square justify-center rounded-[10px] items-center"
        >
          <div class="min-h-full">
            <nuxt-img src="images/products/memory1.png" class="m-xl:scale-90" />
          </div>
          <p class="text-center text-xs font-medium">
            ساعت هوشمند طرح اپل مدل NG4521
          </p>
        </div>
        <div
          class="card-box p-2 flex flex-col gap-4 aspect-square justify-center rounded-[10px] items-center"
        >
          <div class="min-h-full">
            <nuxt-img src="images/products/memory2.png" class="m-xl:scale-90 " />
          </div>
          <p class="text-center text-xs font-medium">
            ساعت هوشمند طرح اپل مدل NG4521
          </p>
        </div>
        <div
          class="card-box p-2 flex flex-col gap-4 aspect-square justify-center rounded-[10px] items-center"
        >
          <div class="min-h-full">
            <nuxt-img src="images/products/memory3.png" class="m-xl:scale-90" />
          </div>
          <p class="text-center text-xs font-medium">
            ساعت هوشمند طرح اپل مدل NG4521
          </p>
        </div>
        <div
          class="card-box p-2 flex flex-col gap-4 aspect-square justify-center rounded-[10px] items-center"
        >
          <div class="min-h-full">
            <nuxt-img src="images/products/watch.png" class="m-xl:scale-90" />
          </div>
          <p class="text-center text-xs font-medium">
            ساعت هوشمند طرح اپل مدل NG4521
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-box {
  box-shadow: 0px 2px 20px #e5eef5;
}
</style>
