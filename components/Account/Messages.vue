<template>
    <div class="w-full flex flex-col">
        <div 
        v-for="s in 2"
        class="w-full flex justify-between pb-8 mb-8 border-b border-gray-b7">
            <div class="grow">
                <h5 class="text-gray-b2 font-bold mb-2">تایید حساب</h5>
                <p class="text-gray-b3 m-xl:text-sm leading-8">اطلاعات حساب شما توسط کارشناسان ما در حال بررسی است.پس از تایید و احراز هویت حساب شما فعال میشود</p>
            </div>
            <div class="flex items-center justify-center gap-3 text-gray-b4 text-sm self-end">
                <span>17:41</span>
                <span class="w-2 h-2 rounded-full bg-gray-b7"/>
                <span>5 آذر 1401</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>