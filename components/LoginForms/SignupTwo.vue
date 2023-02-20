<template>
  <div class="w-full flex flex-col justify-center h-full">
    <h3 class="font-semibold text-2xl text-center mb-10 text-[#CCCCCC]">
      کد دریافتی را وارد نمایید
    </h3>

    <form dir="ltr" class="w-[434px] flex justify-center gap-[10px]">
      <div class="input-wrapper" dir="ltr">
        <input
          type="text"
          name="username"
          id="username"
          class="input-field w-10 h-10"
          maxlength="1"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <input
          type="text"
          name="username"
          id="username"
          class="input-field w-10 h-10"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <input
          type="text"
          name="username"
          id="username"
          class="input-field w-10 h-10"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <input
          type="text"
          name="username"
          id="username"
          class="input-field w-10 h-10"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <input
          type="text"
          name="username"
          id="username"
          class="input-field w-10 h-10"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <input
          type="text"
          name="username"
          id="username"
          class="input-field w-10 h-10"
        />
      </div>
    </form>

    <div class="w-42 font-medium text-sm text-center text-gray-b5">
      30 ثانیه دیگر تا دریافت کد
    </div>
    <!-- ------------------- BUTTONS -------------------- -->
    <div class="mt-14 flex items-center w-full gap-4 justify-center">
      <button @click.prevent="handleChange" class="w-full c-btn-primary">
        بعدی
      </button>
    </div>

    <div
      class="flex items-center justify-center gap-2 font-semibold text-sm mt-6"
    >
      <span class="text-gray-b5">کد فعالسازی را دریافت نکردید؟</span>
      <span class="text-[#288BFF] cursor-pointer">دوباره امتحان کنید</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["change-page"]);

const handleChange = () => {
  emit("change-page", 3);
};
</script>

<style scoped></style>
