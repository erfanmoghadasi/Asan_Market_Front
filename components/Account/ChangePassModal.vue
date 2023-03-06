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
          <HeadlessDialogPanel as="div">
            <HeadlessDialogTitle class=""> </HeadlessDialogTitle>
            <HeadlessDialogDescription class=""> </HeadlessDialogDescription>
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
