<template>
    <div class="w-[766px]s h-[499px]s py-12 px-36 flex flex-col justify-center">
      <HeadlessDialogTitle class="text-center mb-10">
        <div class="flex items-center justify-center gap-4 mb-2">
          <NuxtIcon
            class="text-3xl"
            name="account/profile/modal/lock"
            filled
          />
          <h3 class="font-bold text-xl text-gray-b2">کلمه عبور جدید</h3>
        </div>
        <p class="text-medium text-gray-b6">
            کلمه عبور شما باید ترکیبی از حروف کوچیک و بزرگ لاتین، اعداد، نشانه ها باشد
        </p>
      </HeadlessDialogTitle>
  
      <HeadlessDialogDescription>
        <form class="w-full">
            <div class="input-wrapper" dir="ltr">
              <label class="input-label" for="password"
                >کلمه عبور جدید</label
              >
              <input type="text" name="password" id="password" class="input-field" />
            </div>
            <div class="input-wrapper" dir="ltr">
              <label class="input-label" for="confirm"
                >تکرار کلمه عبور جدید</label
              >
              <input type="text" name="confirm" id="confirm" class="input-field" />
            </div>
            <button
       class="c-btn-primary w-full">ذخیره</button>
        </form>
      </HeadlessDialogDescription>
    </div>
  </template>
  
  <script setup lang="ts">
// const emit = defineEmits(["change-page"]);

// const handleChange = () => {
//   emit("change-page", 4);
// };
  </script>
  
  <style scoped></style>
  