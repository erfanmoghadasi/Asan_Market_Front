<template>
  <div class="max-w-[1558px] m-xl:mx-20 mx-auto m-xl:pb-0 pb-28">
    <div class="relative w-full flex flex-col">
      <h4 class="font-bold text-3xl m-xl:text-2xl text-primary-b3">رسانه و مطالب</h4>
      <p class="text-xl m-xl:text-lg leading-[44px] text-[#8C8C8C] mt-1">
        برای مشاهده ی آخرین مطالب رسانه و مطالب
        <span class="text-primary-orginal font-bold">اینجا کلیک کنید</span>
      </p>
      <div class="mt-12 mb-20 w-full gap-6 flex items-center justify-between">
        <div
          class="w-[292px] h-[388px] p-6 m-xl:p-3 rounded-2xl shadow-[0px_1px_22px_0px_#004B8226]"
          v-for="card in news"
          :key="card.id"
        >
          <nuxt-img class="rounded-lg mb-10" :src="card.image" />
          <p class="text-gray-b4">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const news = ref([
  {
    id: 1,
    image: "images/main/media.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....",
  },
  {
    id: 2,
    image: "images/main/media.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....",
  },
  {
    id: 3,
    image: "images/main/media.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....",
  },
  {
    id: 4,
    image: "images/main/media.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....",
  },
  {
    id: 5,
    image: "images/main/media.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....",
  },
]);
</script>

<style scoped></style>
