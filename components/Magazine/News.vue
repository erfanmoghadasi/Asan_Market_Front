<template>
  <div class="grow-[2] flex flex-col gap-6 ">
    <div v-for="news in newsList" class="w-full flex gap-6 justify-between">
      <nuxt-img width="241" :src="news.image" />
      <div class="grow py-6 flex flex-col justify-between">
        <h3 class="font-bold text-2xl text-gray-b2">{{ news.title }}</h3>
        <p class="text-gray-b4">{{ news.description }}</p>
        <div
          class="text-primary-w2 flex items-center gap-2 cursor-pointer drop-shadow-sm"
        >
          <span>ادامه مطلب</span>
          <NuxtIcon filled name="magazine/arrow-left" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const newsList = ref([
  {
    image: "images/magazine/new1.png",
    title: "سامسونگ اولین لپ‌تاپ OLED یکپارچه را معرفی می‌کند",
    description:
      "لپ تاپ گلکسی بوک 3 سامسونگ دارای یک پنل OLED خواهد بود که در آن از فناوری سلولی استفاده می‌شود و حسگرها مستقیماً در نمایشگر قرار می‌گیرند تا صفحه لمسی نازک‌تر و سبک‌تری داشته باشد. ",
  },
  {
    image: "images/magazine/new2.png",
    title: "وزارت دادگستری آمریکا از گوگل در بازار تبلیغات شکایت کرد",
    description:
      "وزارت دادگستری آمریکا در شکایتی علیه این شرکت اعلام کرد: «رفتار ضدرقابتی گوگل موانع ورود به این بازار را به‌شکل مصنوعی به سطح بالایی رسانده، موجب خروج رقبا از بازار ابزارهای فناوری‌های تبلیغاتی شده",
  },
  {
    image: "images/magazine/new3.png",
    title: "قیمت سری گلکسی S23 برای بازار اروپا فاش شد",
    description:
      "طبق شایعات، سامسونگ قیمت گوشی‌های سری گلکسی اس 23 را در بازار ایالات متحده افزایش نمی‌دهد، اما ظاهراً در کشورهای اروپایی چنین خبری نخواهد بود و اروپایی‌ها با افزایش قیمت روبه‌رو خواهند ",
  },
  {
    image: "images/magazine/new4.png",
    title: "هوش مصنوعی Midjourney چیست؟",
    description:
      "ساخت آثار هنری با استفاده از هوش‌های مصنوعی و تبدیل متن به عکس با ابزارهای خودکار، یکی از داغ‌ترین جنبه‌های فناوری در ماه‌های اخیر بوده است.",
  },
  {
    image: "images/magazine/new5.png",
    title: "هوش مصنوعی ChatGPT",
    description:
      "ترویش می‌گوید نسخه فعلی ChatGPT نمی‌تواند به سؤالات پیشرفته‌تر و تحلیلی‌تر پاسخ دهد، اما به‌خوبی می‌تواند مسائلی را حل کند که این دانشگاه در آموزش و آزمایش دانشجویان خود از آن‌ها استفاده می‌کند.",
  },
]);
</script>

<style scoped></style>
