<template>
  <div class="pt-[145px] px-6 pb-32 flex justify-between gap-40">
    <!-- ------------------------- CATEGORYS ---------------------- -->
    <div class="w-[292px] min-w-[292px] flex flex-col gap-3">
      <div
        class="w-full text-xl font-bold flex items-center justify-between px-4 h-[88px] bg-primary-w2 text-white rounded-[10px]"
      >
        <h6>دسته بندی مطالب</h6>
        <NuxtIcon filled name="magazine/arrow-down-circle" />
      </div>
      <MagazineCategory />
    </div>

    <!-- --------------------------- NEWS --------------------------------- -->
    <MagazineNews />

    <!-- -------------------------------- LAST FAV ------------------------------ -->
    <MagazineMostFav />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
