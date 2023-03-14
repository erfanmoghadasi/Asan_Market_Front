<template>
    <div class=" max-w-[766px] py-12 px-36 flex flex-col justify-center">
      <HeadlessDialogTitle class="text-center mb-10">
        <div class="flex items-center justify-center gap-4 mb-2">
          <NuxtIcon
            class="text-3xl"
            name="account/profile/modal/message-notif"
            filled
          />
          <h3 class="font-bold text-xl text-gray-b2">کد  دریافتی را وارد نمایید</h3>
        </div>
        <p class="text-medium text-gray-b6">
            کد بازیابی به ایمیل شما ارسال شد.پس از دریافت آن را وارد  کنید
        </p>
      </HeadlessDialogTitle>
  
      <HeadlessDialogDescription>
        <form dir="ltr" class="w-full flex justify-center gap-[10px]">
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
    <p class="font-medium text-sm text-gray-b5 text-center mb-11">30 ثانیه دیگر تا دریافت کد</p>
        <button
        @click.prevent="handleChange"
         class="c-btn-primary w-full">بعدی</button>
         <div class="flex items-center justify-center mt-4 font-semibold gap-1 text-sm">
        <p class="text-gray-b5">کد فعالسازی را دریافت نکردید؟</p>
        <span
        
        class="text-[#288BFF] cursor-pointer">دوباره امتحان کنید</span>
      </div>
      </HeadlessDialogDescription>
    </div>
  </template>
  
  <script setup lang="ts">
const emit = defineEmits(["change-page"]);

const handleChange = () => {
  emit("change-page", 4);
};
  </script>
  
  <style scoped></style>
  