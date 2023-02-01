<template>
  <div
    class="w-[1153px] h-[536px] rounded-2xl shadow-[0_8px_22px_0px_#004B821A]"
  >
    <div class="w-full h-full flex justify-center items-center p-16">
      <!-- ---------------------RIGHT SIDE-------------------- -->
      <div class="w-1/2 h-full flex items-center justify-center">
        <!-- -----------LOGO-------------- -->
        <div class="">
            <NuxtIcon name="login/Group 275" class="text-[141px] " filled />
        </div>
        <!-- -----------TEXT-------------- -->
        <div class="pr-6">
            <h6 class="text-[#8B8B8B] text-[24px]">Welcome</h6>
            <h5 class="text-4xl">خـــــوش آمــــدید</h5>
            <p>آسان مارکت متن خلاصه ساختگی با تولید سادگی نامفهوم از صنعت گرافیک با استفاده از طراحان است</p>
        </div>
      </div>
      <!-- ---------------------LEFT SIDE-------------------- -->

      <div class="w-1/2 h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
