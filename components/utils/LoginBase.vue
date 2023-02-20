<template>
  <div
    class="relative my-10 w-[1200px] min-h-[540px] rounded-2xl shadow-[0_8px_22px_0px_#004B821A]"
  >
    <div
      class="w-full h-full min-h-[540px] flex justify-center items-center p-16"
    >
      <!-- ---------------------RIGHT SIDE-------------------- -->
      <div
        class="relative w-1/2 h-full min-h-[540px] flex items-center justify-between"
      >
        <!-- -----------------STEPPER---------------------- -->
        <div
          v-if="pageNumber > 0"
          class="absolute font-medium w-[90%] h-5 top-24 right-0 flex flex-col justify-between"
        >
          <div class="text-primary-orginal">4 / {{ pageNumber }}</div>

          <div :class="stepperBgHandler">
            <div
              :class="pageNumber >= 1 ? 'current-step-dot' : 'disable-step-dot'"
            ></div>
            <div
              :class="pageNumber >= 2 ? 'current-step-dot' : 'disable-step-dot'"
            ></div>
            <div
              :class="pageNumber >= 3 ? 'current-step-dot' : 'disable-step-dot'"
            ></div>
            <div
              :class="pageNumber >= 4 ? 'current-step-dot' : 'disable-step-dot'"
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
      <div
        @click="handleChange"
        class="pb-4 flex min-w-fit gap-2 text-[#8C8C8C] absolute -bottom-16 cursor-pointer"
      >
        <span class="drop-shadow-sm">بازگشت به خانه</span>
        <span><Icon name="material-symbols:line-start-arrow" /></span>
      </div>
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

const handleChange = () => {
  emit("change-page", 0);
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
  background: linear-gradient(90deg#B2CCE0, 0%, #015699 0%);
  @apply w-full  bg-primary-w4 h-[2px] flex justify-between items-center drop-shadow-sm;
}
.step-two {
  background: linear-gradient(90deg, #b2cce0 66%, #015699 66%);
  @apply w-full  bg-primary-w4 h-[2px] flex justify-between items-center drop-shadow-sm;
}
.step-three {
  background: linear-gradient(90deg, #b2cce0 33%, #015699 33%);
  @apply w-full  bg-primary-w4 h-[2px] flex justify-between items-center drop-shadow-sm;
}
.step-four {
  background: linear-gradient(90deg, #b2cce0 0%, #015699 0%);
  @apply w-full  bg-primary-w4 h-[2px] flex justify-between items-center drop-shadow-sm;
}

.disable-step-dot {
  @apply w-2 h-2 bg-primary-w4 rounded-full;
}

.current-step-dot {
  @apply w-2 h-2 bg-primary-orginal rounded-full;
}
</style>
