<template>
  <NuxtLink to="/login">
  <div
    class="c-btn hover:scale-95 hover:border-primary-w4 transition-all flex items-center px-3 w-[177px] xl:w-[140px] h-12 xl:h-10 bg-primary-orginal"
  >
    <span>
      <NuxtIcon name="layout/login" filled class="text-2xl xl:text-base" />
    </span>
    <p class="text-white xl:text-sm xl:font-medium font-bold flex mr-3 xl:mr-2 ml-4 xl:ml-2 justify-between w-full">
      <span>ورود</span>
      <span class="h-[22px] w-[1px] rounded bg-white"></span>
      <span>ثبت نام</span>
    </p>
  </div>
</NuxtLink>
</template>
