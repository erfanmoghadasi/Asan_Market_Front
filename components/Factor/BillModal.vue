<template>
  <div
    class="fixed w-full overflow-y-auto min-h-fit  z-50 h-screen bg-black bg-opacity-30 pb-10 px-80 -translate-y-[145px] grid place-items-center"
  >
    <div class=" mt-20 mx-auto absolute right-[50%] translate-x-1/2 top-0  m-xl:min-w-[1100px] min-w-[1240px] rounded-2xl bg-white">
      <header
        class="h-44 border-b-2 border-gray-b7 text-center flex flex-col gap-4 justify-center items-center"
      >
        <h3
          class="font-bold text-xl text-gray-b2 flex items-center justify-center gap-4"
        >
          <NuxtIcon filled name="factor/receipt" />
          <span>ثبت پیش فاکتور</span>
        </h3>
        <p class="font-normal text-lg text-center text-gray-b3">
          پیش فاکتور شما ثبت شد.پس از بررسی توسط کارشناسان ما، با شما تماس گرفته
          میشود
        </p>
      </header>
      <main class="py-10 w-full">
        <div class="w-full px-6 grid justify-between grid-cols-10 gap-y-6">
          <span class="flex items-center gap-2 col-span-4">
            <p class="text-gray-b2 font-bold">نام خریدار:</p>
            <p class="text-gray-b4 font-medium">
              سبز سیستم سعیدی محصولات باتری
            </p>
          </span>
          <span class="flex items-center gap-2 col-span-3">
            <p class="text-gray-b2 font-bold">تلفن:</p>
            <p class="text-gray-b4 font-medium">12345678</p>
          </span>
          <span class="flex items-center gap-2 col-span-3">
            <p class="text-gray-b2 font-bold">شماره سند:</p>
            <p class="text-gray-b4 font-medium"></p>
          </span>
          <span class="flex gap-2 row-span-2 col-span-4">
            <p class="text-gray-b2 font-bold">کد خریدار:</p>
            <p class="text-gray-b4 font-medium">01/02/0158</p>
          </span>
          <span class="flex items-center gap-2 col-span-3">
            <p class="text-gray-b2 font-bold">فکس:</p>
            <p class="text-gray-b4 font-medium">12345678</p>
          </span>
          <span class="flex items-center gap-2 col-span-3">
            <p class="text-gray-b2 font-bold">شماره فاکتور:</p>
            <p class="text-gray-b4 font-medium">3521</p>
          </span>
          <span class="flex items-center gap-2 col-span-3">
            <p class="text-gray-b2 font-bold">آدرس:</p>
            <p class="text-gray-b4 font-medium">تهران _ تهران</p>
          </span>
          <span class="flex items-center gap-2 col-span-3">
            <p class="text-gray-b2 font-bold">تاریخ فاکتور:</p>
            <p class="text-gray-b4 font-medium">1401/2/13</p>
          </span>
        </div>

        <!-- ----------------------------------- TABLE ---------------------------------- -->
        <table class="w-full my-8">
          <tr class="bg-gray-b8 h-11 border">
            <th class="border" v-for="item in columnsHeader" :key="item.name">
              {{ item.name }}
            </th>
          </tr>
          <tr
            v-for="item in rowData"
            :key="item.id"
            class="text-center h-14 border"
          >
            <td class="border">{{ item.id }}</td>
            <td class="border">{{ item.productCode }}</td>
            <td class="border">{{ item.productName }}</td>
            <td class="border">{{ item.qty }}</td>
            <td class="border">{{ item.unit }}</td>
            <td class="border">{{ item.price }}</td>
            <td class="border">{{ item.off }}</td>
            <td class="border">{{ item.fee }}</td>
            <td class="border"></td>
          </tr>
        </table>
      </main>

      <!-- --------------------------- FOOTER -------------------------------- -->
      <footer class="w-full mt-8 flex items-center justify-between px-6 mb-10">
        <div class="flex items-center gap-8">
          <button
            class="c-btn w-48 bg-primary-orginal font-medium text-lg text-white"
          >
            ثبت و ارسال
          </button>
          <button
            @click="closeModal"
            class="c-btn w-48 font-medium text-lg text-primary-orginal"
          >
            انصراف
          </button>
        </div>
        <div class="flex items-center gap-8">
          <button
            class="c-btn w-80 border-gray-b4 text-gray-b4 font-medium text-lg"
          >
            Save PDF
          </button>
          <button
            class="c-btn w-32 border-gray-b4 text-gray-b4 font-medium text-lg"
          >
            Save PDF
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};

const columnsHeader = ref([
  {
    name: "ردیف",
  },
  {
    name: "کد کالا",
  },
  {
    name: "نام کالا",
  },
  {
    name: "تعداد",
  },
  {
    name: "واحد",
  },
  {
    name: "قیمت",
  },
  {
    name: "تخفيف",
  },
  {
    name: "قیمت نهایی",
  },
  {
    name: "قیمت مصرف کننده",
  },
]);

const rowData = ref([
  {
    id: 1,
    productCode: "001700006",
    productName: "کابل AUX فنری PANATECH مدل P-A14 یکسر L",
    qty: "4780",
    unit: "تعداد",
    price: "259,880",
    off: "0 %",
    fee: "259,880",
  },
  {
    id: 2,
    productCode: "001700007",
    productName: "فلش مموری سامسونگ 16 گیگابایتی",
    qty: "50",
    unit: "کارتن",
    price: "119,880",
    off: "5 %",
    fee: "119,880",
  },
  {
    id: 3,
    productCode: "001700008",
    productName: "اپل واچ 2022 اس ای",
    qty: "500",
    unit: "کارتن",
    price: "187,880",
    off: "15 %",
    fee: "187,880",
  },
  {
    id: 4,
    productCode: "001700033",
    productName: "هارد اکسترنال ای دیتا مدل HD710 Pro ظرفیت 2 ترابایت",
    qty: "25",
    unit: "تعداد",
    price: "979,880",
    off: "20 %",
    fee: "979,880",
  },
]);
</script>

<style scoped></style>
