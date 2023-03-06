<template>
  <NuxtLink to="/login">
  <div
    class="c-btn hover:scale-95 hover:border-primary-w4 transition-all flex items-center px-3 w-[177px] m-xl:w-[140px] h-12 m-xl:h-10 bg-primary-orginal"
  >
    <span>
      <NuxtIcon name="layout/login" filled class="text-2xl m-xl:text-base" />
    </span>
    <p class="text-white m-xl:text-sm m-xl:font-medium font-bold flex mr-3 ml-4 m-xl:mx-2 justify-between w-full">
      <span>ورود</span>
      <span class="h-[22px] w-[1px] rounded bg-white"></span>
      <span>ثبت نام</span>
    </p>
  </div>
</NuxtLink>
</template>
