<template>
  <div class="w-full flex flex-col justify-center h-full">
    <h3 class="font-semibold text-2xl mb-10 text-[#CCCCCC]">
      یک کلمه عبور مطمئن انتخاب کنید
    </h3>

    <form class="w-[434px]">
      <div class="input-wrapper" dir="ltr">
        <label class="input-label" for="username">کلمه عبور</label>
        <input
          type="password"
          name="username"
          id="username"
          class="input-field"
        />
      </div>
      <div class="input-wrapper" dir="ltr">
        <label class="input-label" for="username2">تکرار کلمه عبور</label>
        <input
          type="password"
          name="username2"
          id="username2"
          class="input-field"
        />
      </div>

      <!-- ------------------- BUTTONS -------------------- -->
      <div class="mt-14 flex items-center w-full gap-4">
        <button
          @click.prevent="handleChange"
          class="w-full c-btn-primary bg-primary-orginal text-white"
        >
          بعدی
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["change-page"]);

const handleChange = () => {
  emit("change-page", 4);
};
</script>

<style scoped></style>
