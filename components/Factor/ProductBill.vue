<template>
    <div class="p-12 w-full h-[400px] flex justify-between border-b-2 border-gray-b7 ">


<!-- ------------------------------ RIGHT SECTION ----------------------------- --> 
<div class="flex">
    <div class="h-full w-56 grid items-center">
    <nuxt-img :src="props.image" />
</div>
    <div class="h-full flex flex-col justify-between gap-4 ">
            <h5 class="font-bold text-xl text-[#333333] mb-8">فلش مموری سامسونگ M20k11gh 16GB</h5>
            <p class="text-gray-b2 flex items-center justify-start gap-4 text-lg">
                <NuxtIcon name="factor/shop" filled />
                <span class=" ">فروشنده فروشگاه اسپیس</span>
            </p>
            <p class="text-gray-b2 flex items-center justify-start gap-4 text-lg">
                <NuxtIcon name="factor/3d-square" filled />
                <span class=" ">خرید کارتنی | حداقل 20 کارتن | تعداد در کارتن: 100 عدد</span>
            </p>
            <p class="text-gray-b2 flex items-center justify-start gap-4 text-lg">
                <NuxtIcon name="factor/shield-tick" filled />
                <span class=" ">گارانتی اصالت و سلامت فیزیکی کالا</span>
            </p>
            <p class="text-gray-b2 flex items-center justify-start gap-4 text-lg">
                <NuxtIcon name="factor/box-tick" filled />
                <span class=" ">موجود در انبار فروشنده</span>
            </p>
            <p class="relative text-gray-b2 flex items-center justify-start gap-4 text-lg">
                <NuxtIcon name="factor/dot-line" class="text-[75px] absolute -right-7" filled />
                <div class="pr-10 flex flex-col gap-5 text-gray-b4">
                    <p class=" flex items-center justify-start gap-4 text-lg ">
                        <NuxtIcon filled name="factor/truck" />
                        <span>ارسال از آسان مارکت پس از دریافت از فروشنده</span>
                    </p>
                    <p class=" flex items-center justify-start gap-4 text-lg ">
                        <NuxtIcon filled name="factor/profile-circle" />
                        <span>ارسال از فروشنده پس از تایید نهایی 1-2 روز دیگر</span>
                    </p>
                </div>
            </p>
        </div>
</div>



 <!-- ------------------------------ LEFT SECTION ----------------------------- -->
        <div class="flex flex-col justify-between gap-4 w-48 ">
            <p class="font-bold text-xl text-gray-b2 text-left">5,000,000 تومان</p>
            <div class=" ">
                <div class="w-full mb-4 h-10 bg-gray-b8 rounded-lg text-gray-b3 grid place-items-center">2 کارتن = 200 عدد</div>
                <div class="w-full flex gap-4 h-12 max-w-full">
                    <div class="w-full text-primary-orginal text-2xl flex items-center justify-between px-4 border-2 border-gray-b7 rounded-lg">
                        <button>+</button>
                        <span>2</span>
                        <button>-</button>
                    </div>
                    <div class="w-12 h-12 p-3 grid place-items-center border-2 border-gray-b7 rounded-lg cursor-pointer">
                        <NuxtIcon name="factor/trash" filled />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        image: {
            type: String,
            require: true
        }
    })
</script>

<style scoped>

</style>