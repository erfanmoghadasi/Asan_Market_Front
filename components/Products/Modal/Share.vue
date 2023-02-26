<template>
  <ClientOnly>
    <HeadlessTransitionRoot appear :show="isShareModalOpen" as="template">
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
            class="fixed top-[0px] left-1/2 -translate-x-1/2 w-[642px] bg-white rounded-[10px] mx-auto mt-32 z-50"
          >
            <HeadlessDialogTitle class="w-full pb-6 border-b-2 border-gray-b7">
              <div class="pt-8 px-10">
                <h2 class="font-bold text-xl text-gray-b2 mb-2">
                  اشتراک گذاری
                </h2>
                <p class="text-lg text-gray-b4">
                  این کالا را با دوستان خود به اشتراک بگذارید!
                </p>
              </div>
              <NuxtIcon
                @click="closeHandle"
                name="single-product/modal/close"
                class="absolute left-9 top-9 cursor-pointer"
              />
            </HeadlessDialogTitle>
            <HeadlessDialogDescription class="w-full p-10">
              <button
                class="c-btn-white mb-6 flex items-center justify-center gap-2 w-full border-gray-b6 text-gray-b2 hover:bg-white hover:text-primary-orginal hover:border-primary-orginal"
              >
                <NuxtIcon
                  name="single-product/modal/document"
                  filled
                  class="text-2xl"
                />
                <span class="font-medium text-xl">کپی کردن لینک</span>
              </button>
              <div class="flex items-center gap-3">
                <button
                  class="c-btn-white flex items-center justify-center gap-2 w-full bg-primary-w2 border-primary-w2 text-white hover:bg-white hover:text-primary-orginal hover:border-primary-orginal"
                >
                  <NuxtIcon
                    name="single-product/modal/telegram"
                    filled
                    class="text-2xl"
                  />
                  <span class="font-medium text-xl">تلگرام</span>
                </button>
                <button
                  class="c-btn-white flex items-center justify-center gap-2 w-full bg-success-b2 border-success-b2 text-white hover:bg-white hover:text-success-b2 hover:border-success-b2"
                >
                  <NuxtIcon
                    name="single-product/modal/whatsapp"
                    filled
                    class="text-2xl"
                  />
                  <span class="font-medium text-xl">واتساپ</span>
                </button>
              </div>
            </HeadlessDialogDescription>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
  isShareModalOpen: {
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
