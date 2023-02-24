<template>
  <div
    class="relative my-10 w-[1200px] min-h-[540px] rounded-2xl shadow-[0_8px_22px_0px_#004B821A]"
  >
    <div
      class="relative w-full h-full min-h-[540px] flex justify-center items-center p-16"
    >
      <NuxtIcon
        name="login/back"
        filled
        class="absolute cursor-pointer left-8 top-8 scale-150 rotate-180"
        v-if="pageNumber > 0"
        @click="backButtonHandler"
      />
      <!-- ---------------------RIGHT SIDE-------------------- -->
      <div
        class="relative w-1/2 h-full min-h-[540px] flex items-center justify-between"
      >
        <!-- -----------------STEPPER---------------------- -->
        <div
          v-if="pageNumber > 0"
          class="absolute font-medium w-[90%] h-5 top-24 right-0 flex flex-col justify-between"
        >
          <div class="w-full text-primary-orginal transition-all">
            4 / {{ pageNumber }}
          </div>

          <div
            class="relative w-full bg-primary-w4 h-1 flex justify-between items-center drop-shadow-sm"
          >
            <span
              :class="stepperBgHandler"
              class="absolute border w-full border-primary-orginal"
            />
            <div
              class="w-2 h-2 rounded-full z-10 translate-x-1"
              :class="pageNumber >= 1 ? 'bg-primary-orginal' : 'bg-primary-w4'"
            ></div>
            <div
              class="w-2 h-2 rounded-full z-10"
              :class="pageNumber >= 2 ? 'bg-primary-orginal' : 'bg-primary-w4'"
            ></div>
            <div
              class="w-2 h-2 rounded-full z-10"
              :class="pageNumber >= 3 ? 'bg-primary-orginal' : 'bg-primary-w4'"
            ></div>
            <div
              class="w-2 h-2 rounded-full z-10 -translate-x-1"
              :class="pageNumber >= 4 ? 'bg-primary-orginal' : 'bg-primary-w4'"
            ></div>
          </div>
        </div>

        <!-- -----------LOGO-------------- -->
        <div class="">
          <NuxtIcon
            :name="props.headerInfo.iconName"
            class="text-[141px]"
            filled
          />
        </div>
        <!-- -----------TEXT-------------- -->
        <div class="pr-6">
          <h6 class="text-gray-b5 text-6 font-black">
            {{ headerInfo.header }}
          </h6>
          <h5 class="text-4xl my-3">{{ headerInfo.title }}</h5>
          <p class="text-[#4F4F4F]">
            {{ headerInfo.description }}
          </p>
        </div>
      </div>
      <!-- ---------------------LEFT SIDE-------------------- -->

      <div class="w-1/2 h-full px-16">
        <slot />
      </div>
      <!-- ----------------------- BACK TO HOME -------------------------- -->
      <NuxtLink
        to="/"
        class="pb-4 flex min-w-fit gap-2 text-[#8C8C8C] absolute -bottom-16 cursor-pointer"
      >
        <span class="drop-shadow-sm border-">بازگشت به خانه</span>
        <NuxtIcon name="login/arrow-left" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  headerInfo: {
    type: Object,
    required: true,
  },
  pageNumber: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["change-page"]);

const backButtonHandler = () => {
  emit("change-page");
};

const stepperBgHandler = computed(() => {
  switch (props.pageNumber) {
    case 1:
      return "step-one";

    case 2:
      return "step-two";

    case 3:
      return "step-three";

    case 4:
      return "step-four";
  }
});
</script>

<style scoped>
.step-one {
  width: 0%;
}
.step-two {
  width: 33%;
}
.step-three {
  width: 66%;
}
.step-four {
  width: 100%;
}
</style>
