<template>
  <div
    class="bg-white cursor-pointer select-none w-[292px] min-w-[292px] m-xl:w-[280px] m-xl:min-w-[280px]  h-[406px] p-6 pb-8 rounded-[10px] flex flex-col justify-between card-shadow"
  >
    <nuxt-img :src="image" class="h-[160px] w-fit mx-auto select-none" />
    <div
      class="flex flex-col justify-between h-[100px] max-h-[100px] select-none"
    >
      <p class="truncate font-medium text-sm text-gray-b4 select-none">
        {{ category }}
      </p>
      <h6 class="font-bold text-gray-b2 select-none">{{ description }}</h6>
      <div v-if="rate" class="flex items-center gap-1 select-none">
        <NuxtIcon
          name="card/star"
          :class="rate > 4 ? 'text-yellow-400' : 'text-primary-w4'"
        />
        <NuxtIcon
          name="card/star"
          :class="rate > 3 ? 'text-yellow-400' : 'text-primary-w4'"
        />
        <NuxtIcon
          name="card/star"
          :class="rate > 2 ? 'text-yellow-400' : 'text-primary-w4'"
        />
        <NuxtIcon
          name="card/star"
          :class="rate > 1 ? 'text-yellow-400' : 'text-primary-w4'"
        />
        <NuxtIcon
          name="card/star"
          :class="rate > 0 ? 'text-yellow-400' : 'text-primary-w4'"
        />
      </div>
    </div>
    <div
      class="h-7 text-gray-b2 w-full flex items-center justify-between select-none"
    >
      <span class="font-bold text-lg select-none"
        >{{ price }} تومان</span
      >
      <NuxtIcon
        @click="likeHandler"
        name="card/heart"
        class="text-2xl cursor-pointer transform transition-all active:scale-90"
        :class="liked ? 'text-red-700' : 'text-white'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    require: false,
  },
  price: {
    type: String,
    require: true,
  },
  liked: {
    type: Boolean,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  rate: {
    type: Number,
    require: true,
  },
});


const emit = defineEmits(["likeHandler"]);

const likeHandler = () => {
  emit("likeHandler");
};
</script>

<style scoped>
.card-shadow {
  box-shadow: 0px 2px 20px #e5eef5;
}
</style>
