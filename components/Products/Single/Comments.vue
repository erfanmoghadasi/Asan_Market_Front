<template>
  <div class="flex items-start gap-52 m-xl:gap-32 mb-40">
    <!-- ---------------------------- RIGHT SECTION ----------------------------- -->
    <div class="w-[292px] m-xl:w-[250px]">
      <div class="flex items-center gap-3 mb-10">
        <span class="w-2 h-8 bg-primary-orginal rounded-full" />
        <h4 class="font-bold text-xl m-xl:text-lg text-primary-orginal">نظرات خریداران</h4>
      </div>
      <div class="flex items-center gap-2 mb-4">
        <NuxtIcon name="single-product/star" filled />
        <span class="text-lg">3.5 / 5</span>
      </div>
      <p class="text-gray-b5 mb-6">
        شما هم درباره این کالا نظر خود را ثبت کنید. نظر شما پس از بررسی و تایید
        نمایش داده میشود
      </p>
      <button @click="() => isReviewModalOpen = true" class="c-btn-white w-full font-medium text-xl m-xl:text-lg">ثبت دیدگاه</button>
    </div>

    <!-- ---------------------------- LEFT SECTION ----------------------------- -->
    <div class="w-[914px] m-xl:w-[700px]">
      <div class="flex items-center gap-14">
        <div class="flex items-center gap-2 text-lg m-xl:text-base ">
          <NuxtIcon name="single-product/document-filter" filled />
          <span>مرتب سازی بر اساس: </span>
        </div>
        <div class="flex items-center gap-12">
          <span class="cursor-pointer font-medium text-lg m-xl:text-base text-primary-orginal"
            >جدیدترین</span
          >
          <span class="cursor-pointer font-medium text-lg m-xl:text-base text-gray-b6"
            >مفید ترین</span
          >
        </div>
      </div>
      <!-- ------------------------------ COMMENTS --------------------------------------- -->
      <div class="w-full py-8 border-b border-gray-b7">
        <div class="flex items-center mb-6">
          <span
            class="text-white bg-success-b1 px-4 py-1 rounded grid place-items-center ml-2"
            >3.2</span
          >
          <span
            class="text-gray-b5 bg-gray-b8 px-4 py-1 rounded grid place-items-center"
            >خریدار</span
          >
          <div class="mr-5 flex items-center text-gray-b6 gap-4">
            <span>18 آذر 1401</span>
            <span class="w-2 h-2 bg-gray-b7 rounded-full" />
            <span>علی رضوانی</span>
          </div>
        </div>
        <p class="text-lg m-xl:text-base text-gray-b4 leading-9">
          دوستان رنگ آبیش خیلی خوشکله. من خودم بین رنگ نقره ای و آبی دو دل بودم.
          اخرش دلمو زدم به دریا و رنگ آبی رو سفارش دادم. فوق العاده است. خیلی
          خاصه.
        </p>
      </div>
      <div class="w-full py-8 border-b border-gray-b7">
        <div class="flex items-center mb-6">
          <span
            class="text-white bg-success-b1 px-4 py-1 rounded grid place-items-center ml-2"
            >3.0</span
          >
          <span
            class="text-gray-b5 bg-gray-b8 px-4 py-1 rounded grid place-items-center"
            >خریدار</span
          >
          <div class="mr-5 flex items-center text-gray-b6 gap-4">
            <span>18 آذر 1401</span>
            <span class="w-2 h-2 bg-gray-b7 rounded-full" />
            <span>علی رضوانی</span>
          </div>
        </div>
        <p class="text-lg m-xl:text-base text-gray-b4 leading-9">
          خیلی راضیم از خریدم فقط این مشکل رو داره که اگه تمام روز به گوشی متصل
          باشه ۱۲ ساعت شارژ نگه نمی‌داره
        </p>
      </div>
      <div class="w-full py-8 border-b border-gray-b7">
        <div class="flex items-center mb-6">
          <span
            class="text-white bg-success-b1 px-4 py-1 rounded grid place-items-center ml-2"
            >1.5</span
          >
          <span
            class="text-gray-b5 bg-gray-b8 px-4 py-1 rounded grid place-items-center"
            >خریدار</span
          >
          <div class="mr-5 flex items-center text-gray-b6 gap-4">
            <span>18 آذر 1401</span>
            <span class="w-2 h-2 bg-gray-b7 rounded-full" />
            <span>علی رضوانی</span>
          </div>
        </div>
        <p class="text-lg m-xl:text-base text-gray-b4 leading-9">
          اما برای استفاده از امکاناتی نظیر کنترل فشار خون، ثبت EKG ساعت کمی
          آزاد باشه و سه سانت بالای مچ بره
        </p>
      </div>
      <div class="w-full py-8 border-b border-gray-b7">
        <div class="flex items-center mb-6">
          <span
            class="text-white bg-success-b1 px-4 py-1 rounded grid place-items-center ml-2"
            >4.0</span
          >
          <span
            class="text-gray-b5 bg-gray-b8 px-4 py-1 rounded grid place-items-center"
            >خریدار</span
          >
          <div class="mr-5 flex items-center text-gray-b6 gap-4">
            <span>18 آذر 1401</span>
            <span class="w-2 h-2 bg-gray-b7 rounded-full" />
            <span>علی رضوانی</span>
          </div>
        </div>
        <p class="text-lg m-xl:text-base text-gray-b4 leading-9">
          این بهتره یا واچ ۴ که ۶ میلیون و خورده ایه؟ خیلی تفاوتی نمیبینم ولی
          واچ چهار بیشتر فروش داشته تا این
        </p>
      </div>
    </div>

    <!-- ------------------------------ SHARING MODAL ---------------------------- -->
    <ProductsModalReview 
    :isReviewModalOpen="isReviewModalOpen"
    @close-modal="() => isReviewModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
  const isReviewModalOpen = ref(false)
</script>

<style scoped></style>
