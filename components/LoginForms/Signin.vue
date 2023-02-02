<template>
  <div class="w-full flex flex-col ">

    <h3 class="font-semibold text-2xl mb-10 text-[#CCCCCC">ورود و ثبت نام</h3>

    <form class="w-[434px] ">
        <div class="input-wrapper" dir="ltr">
            <label class="input-label" for="username">نام کاربری</label>
            <input 
            type="text" 
            name="username"
            id="username"
            class="input-field"
            />
        </div>
        <div class="input-wrapper" dir="ltr">
            <label class="input-label" for="password">رمز عبور</label>
            <input 
            type="password" 
            name="password"
            id="password"
            class="input-field"
            />
        </div>

        <div class="mt-14 flex justify-between items-center">
            <div class="flex gap-2 items-center">
                <input 
                type="checkbox"
                 name="rememberMe" 
                 id="rememberMe"
                 class="rounded-[4px] w-[18px] h-[18px] "
                 />
                 <label 
                 for="rememberMe"
                 class="font-medium text-sm text-gray-b5">
                    مرا به خاطر بسپار
                 </label>
            </div>

            <div class="flex items-center gap-2 font-bold text-sm">
                <span class="text-gray-b5">رمز خود را فراموش کرده اید؟ </span>
                <span class="text-[#288BFF] cursor-pointer ">بازیابی کنید</span>
            </div>
        </div>

<!-- ------------------- BUTTONS -------------------- -->
        <div class="mt-14 flex items-center w-full gap-4">
            <button class=" w-full c-btn bg-primary-orginal text-white">ورود</button>
            <button class=" w-full c-btn text-primary-orginal">ثبت نام</button>
        </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
