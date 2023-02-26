<template>
  <ClientOnly>
    <HeadlessTransitionRoot
      appear
      :show="isNotificationModalOpen"
      as="template"
    >
      <HeadlessDialog @close="closeHandle" as="div" class="w-full relative">
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
            class="flex flex-col items-start fixed top-[0px] left-1/2 -translate-x-1/2 w-[642px] max-h-[778px] overflow-y-auto bg-white rounded-[10px] mx-auto mt-32 z-50"
          >
            <HeadlessDialogTitle class="w-full pb-6 border-b-2 border-gray-b7">
              <div class="pt-10 px-10">
                <h2 class="font-bold text-xl text-gray-b2 mb-2">اطلاع رسانی</h2>
                <p class="text-lg text-gray-b4">
                  قیمت های شگفت انگیز را چگونه به شما اطلاع دهیم؟
                </p>
              </div>
              <NuxtIcon
                @click="closeHandle"
                name="single-product/modal/close"
                class="absolute left-9 top-9 cursor-pointer"
              />
            </HeadlessDialogTitle>
            <HeadlessDialogDescription class="p-10 pt-0 overflow-y-auto w-full">
              <ul class="my-6 flex flex-col gap-4">
                <li class="flex items-center gap-4">
                  <input
                    class="w-5 h-5 rounded text-gray-b4"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label for="" class="font-medium text-gray-b3 text-xl"
                    >ارسال پیامک به 09010901738</label
                  >
                </li>
                <li class="flex items-center gap-4">
                  <input
                    class="w-5 h-5 rounded text-gray-b4"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label for="" class="font-medium text-gray-b3 text-xl"
                    >سیستم پیام شخصی آسان مارکت</label
                  >
                </li>
                <li class="flex items-center gap-4">
                  <input
                    class="w-5 h-5 rounded text-gray-b4"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label for="" class="font-medium text-gray-b3 text-xl"
                    >ارسال ایمیل
                  </label>
                </li>
              </ul>

              <button class="c-btn-primary w-full font-bold text-xl">
                ثبت
              </button>
            </HeadlessDialogDescription>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
  isNotificationModalOpen: {
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
