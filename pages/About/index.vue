<template>
  <div class="pt-40 m-xl:pt-32 relative max-w-[1700px] mx-auto">
    <!-- ----------------------------------- SOCIALS ---------------------------------- -->
    <div class="absolute m-xl:text-sm top-52 m-xl:top-44 flex flex-col gap-4 text-gray-b6 items-center">
      <p class="-rotate-90">ما را همراهی کنید</p>
      <span class="h-20 w-[1px] bg-gray-b7 mt-10" />
      <NuxtIcon name="about/insta" filled />
      <NuxtIcon name="about/whatsapp" filled />
      <NuxtIcon name="about/telegram" filled />
      <NuxtIcon name="about/linkedin" filled />
    </div>

    <div class="flex justify-center gap-36 m-xl:gap-20 mb-80">
      <!-- ------------------------------- RIGHT SECTION ------------------------------- -->
      <div class="relative w-[560px] m-xl:w-[400px]">
        <h1 class="relative font-black text-3xl m-xl:text-xl text-gray-b2 inline-block mb-8">
          ارتباط با ما
          <span
            class="absolute -bottom-5 right-0 w-2/3 h-1 bg-primary-orginal"
          />
        </h1>
        <p class="text-gray-b4 text-xl m-xl:text-base mb-11">
          اطلاعات تماس و متن پیام خود را وارد کنید
        </p>
        <form action="">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            class="w-full h-14 m-xl:h-11 m-xl:text-sm border-2 border-gray-b8 rounded-[10px] px-6 font-medium mb-6"
          />
          <input
            type="text"
            placeholder="ایمیل / شماره تلفن"
            class="w-full h-14 m-xl:h-11 m-xl:text-sm border-2 border-gray-b8 rounded-[10px] px-6 font-medium mb-6"
          />
          <textarea
            placeholder="متن پیام شما"
            class="resize-none w-full  m-xl:text-sm h-52 m-xl:h-32 border-2 border-gray-b8 rounded-[10px] py-4 px-6 font-medium mb-6"
          ></textarea>
          <button class="c-btn-primary w-full font-medium text-xl m-xl:text-base">
            ارسال پیام
          </button>
        </form>
        <!-- ----------------------------------------- FOOTER -------------------------------------- -->
        <div
          class="absolute -bottom-48 right-0 h-20 flex flex-col justify-between"
        >
          <div class="flex items-center gap-20">
            <div class="flex items-center gap-2">
              <NuxtIcon
                name="about/call"
                filled
                class="text-2xl text-gray-b4"
              />
              <span class="font-medium text-gray-b4">تلفن:</span>
              <span class="font-medium text-gray-b2">67341</span>
            </div>
            <div class="flex items-center gap-2">
              <NuxtIcon name="about/sms" filled class="text-2xl text-gray-b4" />
              <span class="font-medium text-gray-b4">کدپستی:</span>
              <span class="font-medium text-gray-b2">1136834843</span>
            </div>
          </div>
          <div class="flex gap-2">
            <NuxtIcon
              name="about/location"
              filled
              class="text-2xl text-gray-b4"
            />
            <span class="font-medium text-gray-b4 min-w-fit">دفتر مرکزی:</span>
            <span class="font-medium text-gray-b2 whitespace-nowrap"
              >تهران، میدان امام خمینی، خیابان فردوسی، خیابان سرهنگ سخائی نبش
              کوچه بهنیا، پلاک40، طبقه چهارم، واحد12
            </span>
          </div>
        </div>
      </div>
      <!-- ------------------------------- LEFT SECTION ------------------------------- -->
      <div class="w-[591px] m-xl:w-[500px] relative flex items-end">
        <span
          class="absolute left-0 top-0 w-[232px] m-xl:w-[170px] h-[464px] m-xl:h-3/4 rounded-2xl bg-primary-orginal"
        />
        <nuxt-img src="images/about/map.png" class="z-10 rounded-[10px] m-xl:scale-[0.85]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
