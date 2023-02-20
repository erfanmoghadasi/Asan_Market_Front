<template>
  <div class="w-full min-h-screen pt-[145px]">
    <!-- ------------------------------- FINAL BILL MODAL -------------------------- -->
    <FactorBillModal @close-modal="isModalOpen = false" v-if="isModalOpen" />

    <div class="w-full max-w-[1558px] mb-32 mx-auto">
      <div
        class="relative flex w-full items-center justify-start gap-14 pb-7 mb-6 border-b-2 border-gray-b7"
      >
        <button
          @click="tab = false"
          :class="!tab ? 'text-primary-orginal' : ' text-gray-b5'"
          class="font-medium flex items-center text-2xl justify-center gap-3"
        >
          <span>سبد خرید</span>
          <span class="w-8 h-8 bg-gray-b8 rounded text-base grid items-center"
            >10</span
          >
        </button>
        <button
          @click="tab = true"
          :class="tab ? 'text-primary-orginal' : ' text-gray-b5'"
          class="font-medium flex items-center text-2xl justify-center gap-3"
        >
          <span>خرید قبلی</span>
          <span class="w-8 h-8 bg-gray-b8 rounded text-base grid items-center"
            >3</span
          >
        </button>

        <span
          :class="tab ? 'right-[195px]' : 'right-0'"
          class="w-[140px] h-1 bg-primary-orginal rounded absolute -bottom-[3px] transition-all"
        />
      </div>

      <div class="flex gap-6 w-full">
        <div
          class="grow border-2 border-gray-b7 rounded-[10px] overflow-hidden"
        >
          <FactorProductBill
            v-for="item in selectedBill"
            :image="item.image"
            :key="item.image"
          />
        </div>
        <div
          class="w-[450px] h-[400px] flex flex-col justify-between p-6 rounded-[10px] bg-gray-b9 border-2 border-gray-b7"
        >
          <div class="w-full flex flex-col gap-8">
            <div class="w-full flex items-center justify-between font-medium">
              <span class="text-xl text-gray-b4 drop-shadow">تعداد کالاها</span>
              <span class="text-2xl text-gray-b2">3 محصول</span>
            </div>
            <div class="w-full flex items-center justify-between font-medium">
              <span class="text-xl text-gray-b4 drop-shadow">قیمت کالاها</span>
              <span class="text-2xl text-gray-b2">580,000</span>
            </div>
            <div class="w-full flex items-center justify-between font-medium">
              <span class="text-xl text-gray-b4 drop-shadow">تخفیف</span>
              <span class="text-2xl text-gray-b2">580,000</span>
            </div>
            <div class="w-full flex items-center justify-between font-medium">
              <span class="text-xl text-gray-b4 drop-shadow">جمع فاکتور</span>
              <span class="text-2xl text-gray-b2">80,580,000</span>
            </div>
          </div>
          <button
            @click="() => (isModalOpen = true)"
            class="c-btn-primary w-full font-bold text-xl"
          >
            ثبت و مشاهده پیش فاکتور
          </button>
        </div>
      </div>
    </div>

    <!-- ------------------------------- SIMILAR PRODUCTS -------------------------- -->
    <div
      class="w-full bg-[#F6F8FA] py-16 flex flex-col items-center justify-between"
    >
      <FactorMostSell />
    </div>
  </div>
</template>

<script setup lang="ts">
const tab = ref(false);
const isModalOpen = ref(false);

const selectedBill = computed(() => {
  return !tab.value ? currentBill.value : lastBill.value;
});

const currentBill = ref([
  { image: "images/products/memory3.png" },
  { image: "images/products/memory1.png" },
  { image: "images/products/watch.png" },
]);
const lastBill = ref([
  { image: "images/products/watch.png" },
  { image: "images/products/memory2.png" },
]);
</script>

<style scoped></style>
