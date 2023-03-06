<template>
  <ClientOnly>
    <HeadlessTransitionRoot appear :show="isLogoutModal" as="template">
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
          <div class="fixed inset-0 bg-black bg-opacity-25" />
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
            class="flex flex-col items-center py-9 px-20 fixed top-[100px] left-1/2 -translate-x-1/2 w-[514px] h-[256px] bg-white rounded-[10px] mx-auto mt-52 m-xl:mt-28 z-50"
          >
            <HeadlessDialogTitle class="flex items-center gap-4 mb-3">
              <NuxtIcon name="account/logout" class="text-3xl" filled />
              <span class="font-bold text-xl text-gray-b2"
                >خروج از حساب کاربری</span
              >
            </HeadlessDialogTitle>
            <HeadlessDialogDescription
              class="font-medium w-full text-gray-b6 flex flex-col items-center justify-between h-full"
            >
              <span>می خواهید از حساب خود خارج شوید؟</span>
              <div class="flex w-full items-center gap-4 font-medium">
                <button
                  class="c-btn-white w-full bg-error-b2 border-error-b2 hover:bg-white hover:text-error-b2 text-white"
                >
                  خارج می شوم
                </button>
                <button
                @click="closeHandle"
                  class="c-btn-white w-full text-error-b2 border-error-b2 hover:border-primary-orginal"
                >
                  بازگشت به منو
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
  isLogoutModal: {
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
