<template>
    <div class="fav-box w-full h-[122px] rounded-lg flex justify-between items-center px-16 my-20">
        <div class="flex items-center justify-center gap-6">
            <h3 class="font-bold text-3xl text-white">محبوب ترین های هوشمند این هفته</h3>
            <button class="bg-white w-32 h-10 rounded flex items-center justify-center gap-3">
                <span>مشاهده</span>
                <NuxtIcon name="main/arrow-left" />
            </button>
        </div>
        <div class="flex items-center justify-between gap-10">
            <NuxtIcon filled class="text-[122px] opacity-60" name="main/sony" />
            <NuxtIcon filled class="text-[132px] opacity-60" name="main/nintendo" />
            <NuxtIcon filled class="text-[150px] opacity-60" name="main/microsoft" />
            <NuxtIcon filled class="text-[36px] opacity-60" name="main/apple" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .fav-box {
        background: linear-gradient(269.68deg, #6EA89A -3.33%, #597C74 105.44%);
    }
</style>