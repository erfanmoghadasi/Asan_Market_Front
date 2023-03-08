<template>
  <ClientOnly>
    <HeadlessTransitionRoot appear :show="isChangePassModalOpen" as="template">
      <HeadlessDialog @close="closeHandle" as="div" class="w-full">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25 z-40" />
        </HeadlessTransitionChild>
        <HeadlessTransitionChild
          as="template"
          enter="duration-150 ease-out"
          enter-from="opacity-0 -translate-y-14 scale-90"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0 translate-y-10 scale-75"
        >
          <HeadlessDialogPanel
            as="div"
            class="w-[986px] h-[590px] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-2xl p-4 bg-white z-50"
          >
            <!-- <HeadlessDialogTitle class=""></HeadlessDialogTitle> -->
            <NuxtIcon @click="closeHandle" name="account/profile/close-circle" class="absolute left-6 top-6 text-3xl z-50 cursor-pointer" filled />
            <HeadlessDialogDescription class="h-full w-full flex">
              <!-- ---------------------------- LEFT SECTION ------------------------ -->
              <div
                class="flex flex-col justify-between w-1/2 min-h-full pt-8 bg-gradient-to-r rounded-xl overflow-hidden from-[#2B519F] to-[#0E1853]"
              >
                <h1 class="font-bold text-xl text-white px-8">
                  تغییر کلمه عبور پنل کاربری
                </h1>
                <p class="text-gray-b7 leading-[27px] px-8">
                  کلمه عبور فعلی خود و کلمه عبور جدید را وارد نمایید کلمه عبور
                  شما باید ترکیبی از حروف و اعداد و نشانه ها باشد
                </p>
                <nuxt-img
                  src="images/account/profile/change.png"
                  class="w-full"
                />
              </div>
              <!-- ---------------------------- RIGHT SECTION ------------------------ -->
              <form class="w-1/2 flex flex-col justify-center px-16">
                <div class="input-wrapper" dir="ltr">
                  <label class="input-label" for="username2"
                    >کلمه عبور فعلی</label
                  >
                  <input
                    type="text"
                    name="username2"
                    id="username2"
                    class="input-field"
                  />
                </div>
                <div class="input-wrapper" dir="ltr">
                  <label class="input-label" for="username2"
                    >کلمه عبور جدید</label
                  >
                  <input
                    type="text"
                    name="username2"
                    id="username2"
                    class="input-field"
                  />
                </div>
                <div class="input-wrapper" dir="ltr">
                  <label class="input-label" for="username2"
                    >تکرار کلمه عبور جدید</label
                  >
                  <input
                    type="text"
                    name="username2"
                    id="username2"
                    class="input-field"
                  />
                </div>
                <button class="c-btn bg-gray-b7 text-white text-lg border-transparent mt-10">ذخیره</button>
                <div class="flex items-center justify-center mt-4 font-semibold gap-1">
                  <p class="text-[#8C8C8C]">رمز خود را فراموش کرده اید؟</p>
                  <span class="text-primary-orginal"> بازیابی رمز عبور</span>
                </div>
              </form>
            </HeadlessDialogDescription>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
  isChangePassModalOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close-modal"]);
const closeHandle = () => {
  emit("close-modal");
};
</script>

<style scoped></style>
