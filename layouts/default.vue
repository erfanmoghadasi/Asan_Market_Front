<template>
  <div class="w-full bg-white">
    <nav
      @mouseover.self="isCategoryOpen = false"
      class="fixed z-40 bg-white w-full h-24 px-7 flex items-center justify-between shadow-[0px_2px_20px_rgba(0,75,130,0.14)]"
    >
      <!-- ------------------ LOGO ------------------- -->
      <NuxtLink to="/">
        <div
          class="flex gap-3 h-full items-center text-primary-orginal cursor-pointer"
        >
          <span class="flex items-center max-h-10">
            <NuxtIcon name="layout/nav-logo" class="text-5xl"
          /></span>
          <span class="max-h-10 flex items-center">
            <NuxtIcon
              name="layout/asan-market"
              class="text-[188px] translate-y-2"
          /></span>
        </div>
      </NuxtLink>

      <!-- ------------------ MIDDLE SECTION ------------------- -->
      <div class="min-w-max h-full flex items-center">
        <div
          @mouseover="isCategoryOpen = true"
          class="flex h-full items-center gap-3 cursor-pointer"
        >
          <span>
            <NuxtIcon name="layout/menu" filled class="text-2xl" />
          </span>
          <p class="font-medium text-lg">دسته بندی کالاها</p>
        </div>

        <span class="h-5 bg-[#DCDCDC] w-[1px] mx-3 rounded" />

        <ul class="flex items-center justify-between gap-14 mx-6">
          <li
            v-for="item in navList"
            :key="item.title"
            class="flex h-full items-center gap-3 cursor-pointer"
          >
            <span>
              <NuxtIcon :name="item.iconName" filled class="text-2xl" />
            </span>
            <p class="font-medium text-lg">{{ item.title }}</p>
          </li>
        </ul>

        <span class="h-5 bg-[#DCDCDC] w-[1px] mx-3 rounded" />

        <span>
          <NuxtIcon
            name="layout/search"
            filled
            class="text-2xl cursor-pointer"
          />
        </span>
      </div>

      <!-- ------------------ LOGIN / SINGUP BUTTON ----------------------------- -->
      <LayoutLoginButon />
    </nav>

    <!-- ------------------------ CATEGORY LIST ------------------------------- -->
    <article
      v-show="isCategoryOpen"
      class="w-full bg-gray-b4 bg-opacity-[60%] fixed top-24 z-30 h-screen"
    >
      <div
        @mouseleave="isCategoryOpen = false"
        class="w-full h-[500px] bg-white p-4"
      >
        <div class="w-60 h-full">
          <ul class="flex flex-col justify-between h-full">
            <li
              class="flex items-center gap-3 cursor-pointer text-gray-b2"
              v-for="item in categoryList"
              :key="item.title"
            >
              <span>
                <NuxtIcon :name="item.iconName" class="text-2xl" />
              </span>
              <p class="font-medium text-lg">{{ item.title }}</p>
            </li>
          </ul>
        </div>
        <div class="w-full"></div>
      </div>
    </article>
    <div>
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const isCategoryOpen = ref(false);
const navList = ref([
  {
    iconName: "layout/vector",
    title: "خانه",
  },
  {
    iconName: "layout/shop",
    title: "فروشگاه",
  },
  {
    iconName: "layout/notification-status",
    title: "رسانه ها",
  },
  {
    iconName: "layout/briefcase",
    title: "همکاری با ما",
  },
  {
    iconName: "layout/call-calling",
    title: "تماس با ما",
  },
  {
    iconName: "layout/user-tag",
    title: "درباره ما",
  },
]);
const categoryList = ref([
  {
    iconName: "layout/category/mobile",
    title: "کامپیوتر",
  },
  {
    iconName: "layout/category/computer",
    title: "لوازم جانبی موبایل",
  },
  {
    iconName: "layout/category/memory",
    title: "ذخیر سازی",
  },
  {
    iconName: "layout/category/game",
    title: "کنسول بازی",
  },
  {
    iconName: "layout/category/cable",
    title: "کابل و تبدیل",
  },
  {
    iconName: "layout/category/sound",
    title: "صوتی و تصویری",
  },
  {
    iconName: "layout/category/apple",
    title: "محصولات اپل",
  },
  {
    iconName: "layout/category/laptop",
    title: "تبلت و لپ تاپ",
  },
]);
</script>

<style scoped></style>
