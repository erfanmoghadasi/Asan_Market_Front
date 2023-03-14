<template>
  <div>
    <div class="pt-[110px] flex justify-between">
      <p class="font-bold text-[#999999] pr-4 m-xl:text-sm">
        فروشگاه آسان مارکت / کامپیوتر / سخت افزار و قطعات / رم ram
      </p>
      <p class="font-bold text-[#333333] pl-4 m-xl:text-sm">موجودی: 65,000,000 تومان</p>
    </div>
    <div class="w-full pt-10 pb-24 max-h-fit flex relative">
      <ProductsSidebarFilter />
      <!-- ----------------------- CARDS ----------------------- -->
      <div class="grow">
        <!-- ------------------------------ SORTING -------------------------- -->
        <div
          class="grow ml-6 pb-4 mb-10 m-xl:text-sm font-bold text-[#999999] flex items-center gap-4 border-b-2 border-[#EBEBEB]"
        >
          <h6 class="flex items-center gap-2 text-[#333333]">
            <NuxtIcon name="filter/sort" />
            <span>مرتب سازی:</span>
          </h6>
          <p
            v-for="p in sortBy"
            class="cursor-pointer select-none"
            :class="p.isClicked && 'text-primary-orginal'"
            @click="handleSort"
          >
            {{ p.title }}
          </p>
        </div>

        <!-- ------------------------------- CARD SKELETON / PRODUCTS ---------------------------- -->
        <ClientOnly>
          <Suspense>
            <template #default>
              <ProductsFilteredProducts />
            </template>
            <template #fallback>
              <div class="w-full grid auto-cols-min grid-cols-3 gap-6 2xl:grid-cols-4 3xl:grid-cols-5 pl-6">
                <UtilsSkeletonCard v-for="s in 16" />
              </div>
            </template>
          </Suspense>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sortBy = ref([
  {
    title: "مرتبط ترین",
    isClicked: false,
  },
  {
    title: "پربازدیدترین",
    isClicked: true,
  },
  {
    title: "جدیدترین",
    isClicked: false,
  },
  {
    title: "پرفروش ترین",
    isClicked: false,
  },
  {
    title: "ارزانترین",
    isClicked: false,
  },
  {
    title: "گرانترین",
    isClicked: false,
  },
  {
    title: "پیشنهاد خریداران",
    isClicked: false,
  },
]);
const handleSort = (e: any) => {
  sortBy.value.forEach((p) => {
    p.isClicked = false;
    p.title === e.target.innerText
      ? (p.isClicked = true)
      : (p.isClicked = false);
  });
};
</script>
