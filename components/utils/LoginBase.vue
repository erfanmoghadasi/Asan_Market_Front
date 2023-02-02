<template>
  <div
    class="relative my-10 w-[1200px] min-h-[540px] rounded-2xl shadow-[0_8px_22px_0px_#004B821A]"
  >
    <div class="w-full h-full flex justify-center items-center p-16">
      <!-- ---------------------RIGHT SIDE-------------------- -->
      <div class="w-1/2 h-full flex items-center justify-between">
        <!-- -----------LOGO-------------- -->
        <div class="">
          <NuxtIcon :name='props.iconName' class="text-[141px]" filled />
        </div>
        <!-- -----------TEXT-------------- -->
        <div class="pr-6">
          <h6 class="text-gray-b5 text-6 font-black">Welcome</h6>
          <h5 class="text-4xl my-3">{{ title }}</h5>
          <p class="text-[#4F4F4F]">
            {{ description }}
          </p>
        </div>
      </div>
      <!-- ---------------------LEFT SIDE-------------------- -->

      <div class="w-1/2 h-full px-16 ">
        <slot />
      </div>
      <!-- ----------------------- BACK TO HOME -------------------------- -->
      <div
        class="pb-4 flex min-w-fit gap-2 text-[#8C8C8C] absolute -bottom-16 cursor-pointer"
      >
        <span class="drop-shadow-sm">بازگشت به خانه</span>
        <span><Icon name="material-symbols:line-start-arrow" /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconName:  {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});
</script>

<style scoped></style>
