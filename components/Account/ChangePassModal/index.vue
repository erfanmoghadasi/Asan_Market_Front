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
            class="w-[986px]d h-[590px]d fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-2xl p-4 bg-white z-50"
          >
            <NuxtIcon
              @click="closeHandle"
              name="account/profile/close-circle"
              class="absolute left-6 top-6 text-3xl z-50 cursor-pointer"
              filled
            />
            <HeadlessDialogDescription as="template">
              <component :is="currentComponent" @change-page="changePage" />
            </HeadlessDialogDescription>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </ClientOnly>
</template>

<script setup lang="ts">
import PageOne from '/components/Account/ChangePassModal/PageOne.vue'
import PageTwo from '/components/Account/ChangePassModal/PageTwo.vue'
import PageThree from '/components/Account/ChangePassModal/PageThree.vue'
import PageFour from '/components/Account/ChangePassModal/PageFour.vue'

const props = defineProps({
  isChangePassModalOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close-modal"]);
const closeHandle = () => {
  emit("close-modal");
  setTimeout(() => {
    pageNumber.value = 1
  }, 500);
};

const pageNumber = ref(1)

const currentComponent = computed(() => {
  switch (pageNumber.value) {

    case 1:
      return PageOne;

    case 2:
      return PageTwo;

    case 3:
      return PageThree;

    case 4:
      return PageFour;
  }
})

const changePage = (num: number) => {
  pageNumber.value = num;
};
</script>

<style scoped></style>
