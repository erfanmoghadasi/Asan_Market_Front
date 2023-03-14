<template>
  <HeadlessDialogDescription class="w-[986px] h-[590px] flex">
    <!-- ---------------------------- LEFT SECTION ------------------------ -->
    <div
      class="flex flex-col justify-between w-1/2 min-h-full pt-8 bg-gradient-to-r rounded-xl overflow-hidden from-[#2B519F] to-[#0E1853]"
    >
      <h1 class="font-bold text-xl text-white px-8">
        تغییر کلمه عبور پنل کاربری
      </h1>
      <p class="text-gray-b7 leading-[27px] px-8">
        کلمه عبور فعلی خود و کلمه عبور جدید را وارد نمایید کلمه عبور شما باید
        ترکیبی از حروف و اعداد و نشانه ها باشد
      </p>
      <nuxt-img src="images/account/profile/change.png" class="w-full" />
    </div>
    <!-- ---------------------------- RIGHT SECTION ------------------------ -->
    <form class="w-1/2 flex flex-col justify-center px-16">
      <div class="input-wrapper" dir="ltr">
        <label class="input-label" for="username2">کلمه عبور فعلی</label>
        <input
          type="text"
          name="username2"
          id="username2"
          class="input-field"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <label class="input-label" for="username2">کلمه عبور جدید</label>
        <input
          type="text"
          name="username2"
          id="username2"
          class="input-field"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <label class="input-label" for="username2">تکرار کلمه عبور جدید</label>
        <input
          type="text"
          name="username2"
          id="username2"
          class="input-field"
        />
      </div>
      <button
        class="c-btn bg-gray-b7 text-white text-lg border-transparent mt-10"
      >
        ذخیره
      </button>
      <div class="flex items-center justify-center mt-4 font-semibold gap-1">
        <p class="text-[#8C8C8C]">رمز خود را فراموش کرده اید؟</p>
        <span
        @click.prevent="handleChange"
        class="text-primary-orginal cursor-pointer"> بازیابی رمز عبور</span>
      </div>
    </form>
  </HeadlessDialogDescription>
</template>

<script setup lang="ts">
const emit = defineEmits(["change-page"]);

const handleChange = () => {
  emit("change-page", 2);
};
</script>

<style scoped></style>
