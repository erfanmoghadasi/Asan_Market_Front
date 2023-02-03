<template>
  <nav
    class="w-full h-24 px-7 flex items-center justify-between shadow-[0px_2px_20px_rgba(0,75,130,0.14)]"
  >
    <!-- ------------------ LOGO ------------------- -->
    <div
      class="flex gap-3 h-full items-center text-primary-orginal cursor-pointer"
    >
      <span class="flex items-center max-h-10">
        <NuxtIcon name="layout/nav-logo" class="text-5xl"
      /></span>
      <span class="max-h-10 flex items-center">
        <NuxtIcon name="layout/asan-market" class="text-[188px] translate-y-2"
      /></span>
    </div>

    <!-- ------------------ MIDDLE SECTION ------------------- -->
    <div class="min-w-max flex">
      <div class="flex items-center gap-3 cursor-pointer">
        <span>
          <NuxtIcon name="layout/menu" filled class="text-2xl" />
        </span>
        <p class="font-medium text-lg">دسته بندی کالاها</p>
      </div>

      <span class="h-5 bg-[#DCDCDC] w-[1px] mx-3 rounded" />

      <ul class="flex items-center justify-between gap-14 mx-6">
        <li class="flex items-center gap-3 cursor-pointer">
          <span>
            <NuxtIcon name="layout/vector" filled class="text-2xl" />
          </span>
          <p class="font-medium text-lg">خانه</p>
        </li>
        <li class="flex items-center gap-3 cursor-pointer">
          <span>
            <NuxtIcon name="layout/shop" filled class="text-2xl" />
          </span>
          <p class="font-medium text-lg">فروشگاه</p>
        </li>
        <li class="flex items-center gap-3 cursor-pointer">
          <span>
            <NuxtIcon
              name="layout/notification-status"
              filled
              class="text-2xl"
            />
          </span>
          <p class="font-medium text-lg">رسانه ها</p>
        </li>
        <li class="flex items-center gap-3 cursor-pointer">
          <span>
            <NuxtIcon name="layout/briefcase" filled class="text-2xl" />
          </span>
          <p class="font-medium text-lg">همکاری با ما</p>
        </li>
        <li class="flex items-center gap-3 cursor-pointer">
          <span>
            <NuxtIcon name="layout/call-calling" filled class="text-2xl" />
          </span>
          <p class="font-medium text-lg">تماس با ما</p>
        </li>
        <li class="flex items-center gap-3 cursor-pointer">
          <span>
            <NuxtIcon name="layout/user-tag" filled class="text-2xl" />
          </span>
          <p class="font-medium text-lg">درباره ما</p>
        </li>
      </ul>

      <span class="h-5 bg-[#DCDCDC] w-[1px] mx-3 rounded" />

      <span>
        <NuxtIcon name="layout/search" filled class="text-2xl cursor-pointer" />
      </span>
    </div>

    <!-- ------------------ LOGIN / SINGUP BUTTON ----------------------------- -->
    <LayoutLoginButon />
  </nav>
  <slot />
  <LayoutFooter />
</template>

<script setup lang="ts"></script>

<style scoped></style>
