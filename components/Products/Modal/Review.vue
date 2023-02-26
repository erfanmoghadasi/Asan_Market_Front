<template>
  <ClientOnly>
    <HeadlessTransitionRoot appear :show="isReviewModalOpen" as="template">
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
                <h2 class="font-bold text-xl text-gray-b2 mb-2">دیدگاه شما</h2>
                <p class="text-lg text-gray-b4">
                  در مورد فلش مموری سامسونگ M20k11gh 16GB
                </p>
              </div>
              <NuxtIcon
                @click="closeHandle"
                name="single-product/modal/close"
                class="absolute left-9 top-9 cursor-pointer"
              />
            </HeadlessDialogTitle>
            <HeadlessDialogDescription class="p-10 pt-0 overflow-y-auto px-24">
              <ul class="my-12 flex flex-col gap-8">
                <li class="">
                  <div class="input-wrapper w-full" dir="ltr">
                    <label class="input-label" for="username8">عنوان نظر</label>
                    <input
                      type="text"
                      name="username8"
                      id="username8"
                      placeholder="لورم ایپسوم"
                      class="input-field w-full text-right"
                    />
                  </div>
                </li>
                <li class="">
                  <div class="input-wrapper w-full relative" dir="ltr">
                    <label class="input-label" for="username8">نکات مثبت</label>
                    <input
                      type="text"
                      name="username8"
                      id="username8"
                      placeholder="لورم ایپسوم"
                      class="input-field w-full text-right"
                    />
                    <button
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-b4"
                    >
                      +
                    </button>
                  </div>
                </li>
                <li class="">
                  <div class="input-wrapper w-full relative" dir="ltr">
                    <label class="input-label" for="username8">نکات منفی</label>
                    <input
                      type="text"
                      name="username8"
                      id="username8"
                      placeholder="لورم ایپسوم"
                      class="input-field w-full text-right"
                    />
                    <button
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-b4"
                    >
                      +
                    </button>
                  </div>
                </li>
              </ul>

              <div class="my-6">
                <p class="font-medium text-gray-b4 text-xl mb-4">توضیحات</p>
                <textarea
                  rows="5"
                  cols="100"
                  placeholder="متن توضیحات خود را بنویسید"
                  class="w-full resize-none border rounded-[10px] border-gray-b7 p-4"
                ></textarea>
              </div>

              <button class="c-btn-primary w-full font-bold text-xl">
                ارسال
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
  isReviewModalOpen: {
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
