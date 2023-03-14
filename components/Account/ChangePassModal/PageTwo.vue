<template>
  <div class="py-12 px-36 max-w-[766px] flex flex-col justify-center">
    <HeadlessDialogTitle class="text-center mb-4">
      <div class="flex items-center justify-center gap-4 mb-2">
        <NuxtIcon
          class="text-3xl"
          name="account/profile/modal/shield-search"
          filled
        />
        <h3 class="font-bold text-xl text-gray-b2">بازیابی کلمه عبور</h3>
      </div>
      <p class="text-medium text-gray-b6">
        کلمه عبور خود را با ایمیل و یا پیامک به شماره همراه بازیابی کنید. لطفا
        یک روش را انتخاب کنید
      </p>
    </HeadlessDialogTitle>

    <HeadlessDialogDescription>
      <TabGroup as="div" class="mb-6">
        <TabList
          class="w-full h-[55px] border border-gray-b7 rounded-lg p-1 flex items-center justify-between mb-10"
        >
          <Tab class="ui-selected:bg-gray-b7 rounded-lg w-1/2 h-full"
            >ایمیل</Tab
          >
          <Tab class="ui-selected:bg-gray-b7 rounded-lg w-1/2 h-full"
            >پیامک</Tab
          >
        </TabList>
        <TabPanels>
          <TabPanel>
            <div class="input-wrapper" dir="ltr">
              <label class="input-label" for="email"
                >ایمیل خود را وارد کنید</label
              >
              <input type="text" name="email" id="email" class="input-field" />
            </div>
          </TabPanel>
          <TabPanel>
            <div class="input-wrapper" dir="ltr">
              <label class="input-label" for="phone"
                >شماره همراه خود را وارد کنید</label
              >
              <input type="text" name="phone" id="phone" class="input-field" />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <button
      @click.prevent="handleChange"
       class="c-btn-primary w-full">بازیابی کلمه عبور</button>
    </HeadlessDialogDescription>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const emit = defineEmits(["change-page"]);

const handleChange = () => {
  emit("change-page", 3);
};
</script>

<style scoped></style>
