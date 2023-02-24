<template>
  <div class="w-full bg-white">
    <nav
      @mouseover.self="() => (isCategoryOpen = false)"
      class="fixed z-40 bg-white w-full h-24 px-7 flex items-center justify-between shadow-[0px_2px_20px_rgba(0,75,130,0.14)]"
    >
      <!-- ------------------ LOGO ------------------- -->
      <NuxtLink class="h-full" to="/">
        <div
          class="flex overflow-hidden gap-3 h-full items-center text-primary-orginal cursor-pointer"
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
          @mouseover="() => (isCategoryOpen = true)"
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
            <NuxtLink :to="item.link" class="flex gap-3 items-center">
              <NuxtIcon :name="item.iconName" filled class="text-2xl" />
              <p class="font-medium text-lg">{{ item.title }}</p>
            </NuxtLink>
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
    <Transition
      enter-from-class="opacity-0 -translate-y-10"
      enter-active-class="transition duration-[150ms] ease-in"
      leave-to-class="opacity-0 -translate-y-10"
      leave-active-class="transition duration-[200ms] ease-in"
      class="w-full bg-gray-b4 bg-opacity-[60%] fixed top-24 z-30 h-screen"
    >
      <article
        v-show="isCategoryOpen"
        class="w-full bg-gray-b4 bg-opacity-[60%] fixed top-24 z-30 h-screen"
      >
        <div
          @mouseleave="() => (isCategoryOpen = false)"
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
                  <NuxtIcon :name="item.iconName" filled class="text-2xl" />
                </span>
                <p class="font-medium text-lg">{{ item.title }}</p>
              </li>
            </ul>
          </div>
          <div class="w-full"></div>
        </div>
      </article>
    </Transition>
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
    link: "/",
  },
  {
    iconName: "layout/shop",
    title: "فروشگاه",
    link: "/products",
  },
  {
    iconName: "layout/notification-status",
    title: "رسانه ها",
    link: "/magazine",
  },
  {
    iconName: "layout/briefcase",
    title: "همکاری با ما",
    link: "",
  },
  {
    iconName: "layout/call-calling",
    title: "تماس با ما",
    link: "/about",
  },
  {
    iconName: "layout/user-tag",
    title: "درباره ما",
    link: "",
  },
]);
const categoryList = ref([
  {
    iconName: "layout/category/monitor",
    title: "کامپیوتر",
  },
  {
    iconName: "layout/category/airpods",
    title: "لوازم جانبی موبایل",
  },
  {
    iconName: "layout/category/ram",
    title: "ذخیر سازی",
  },
  {
    iconName: "layout/category/game",
    title: "کنسول بازی",
  },
  {
    iconName: "layout/category/electricity",
    title: "کابل و تبدیل",
  },
  {
    iconName: "layout/category/speaker",
    title: "صوتی و تصویری",
  },
  {
    iconName: "layout/category/apple",
    title: "محصولات اپل",
  },
  {
    iconName: "layout/category/keyboard-open",
    title: "تبلت و لپ تاپ",
  },
]);
</script>

<style scoped></style>
