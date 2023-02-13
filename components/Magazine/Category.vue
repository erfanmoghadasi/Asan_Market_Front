<template>
  <div
  v-for="item in categoryList"
  @click="handleCategory"
    class="cursor-pointer w-full bg-[#F8F8F8] h-14 rounded-[10px] flex items-center justify-between px-4 hover:shadow transition-all"
  >
    <p class="font-medium text-xl text-[#8C8C8C]">{{ item.title }}</p>
    <span
      class="w-3 h-3 rounded-full"
      :class="item.isClicked ? 'bg-primary-w2' : 'bg-[#D9D9D9]'"
    ></span>
  </div>
</template>

<script setup lang="ts">
const categoryList = ref([
  {
    id: 1,
    title: "موبایل",
    isClicked: false,
  },
  {
    id: 2,
    title: "لوازم جانبی کامپیوتر",
    isClicked: true,
  },
  {
    id: 3,
    title: "نرم افزار",
    isClicked: false,
  },
  {
    id: 4,
    title: "تکنولوژی",
    isClicked: false,
  },
  {
    id: 5,
    title: "متفرقه",
    isClicked: false,
  },
  {
    id: 6,
    title: "اینترنت",
    isClicked: false,
  },
]);

const handleCategory = (e : any) => [
    categoryList.value.forEach((item) => {
        item.isClicked = false;
        item.title === e.target.innerText ? item.isClicked = true : item.isClicked = false
    })
]

</script>

<style scoped></style>
