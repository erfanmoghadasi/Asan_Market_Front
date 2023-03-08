<template>
  <footer
    class="bg-[#F5F5F5] h-[700px] px-[184px] m-xl:px-20 flex items-center justify-between"
  >
    <!-- ---------------------RIGHT FOOETR---------------------------------- -->
    <div
      class="w-[523px] m-xl:w-[400px] h-[500px] text-gray-b2 bg-gray-b8 border-gray-b7 border rounded-2xl flex flex-col p-8 leading-[30px]"
    >
      <div
        class="flex gap-3 h-10 items-center text-primary-orginal cursor-pointer"
      >
        <span class="flex items-center max-h-10">
          <NuxtIcon name="layout/nav-logo" class="text-5xl m-xl:text-2xl"
        /></span>
        <span class="max-h-10 flex items-center">
          <NuxtIcon
            name="layout/asan-market"
            class="text-[188px] m-xl:text-[140px] translate-y-2"
        /></span>
      </div>
      <p class="mt-6 text-lg m-xl:text-base font-medium">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده
      </p>
      <div class="mt-10 flex flex-col gap-4  m-xl:text-sm">
        <div class="flex gap-[14px] items-center">
          <span>
            <NuxtIcon name="layout/call" filled class="text-5" />
          </span>
          <p>تلفن: 67341</p>
        </div>
        <div class="flex gap-[14px] items-center">
          <span>
            <NuxtIcon name="layout/sms" filled class="text-5" />
          </span>
          <p>کدپستی: 1136834843</p>
        </div>
        <div class="flex gap-[14px] items-center">
          <span>
            <NuxtIcon name="layout/location" filled class="text-5" />
          </span>
          <p>
            تهران، میدان امام خمینی، خیابان فردوسی، خیابان سرهنگ سخائی نبش کوچه
            بهنیا، پلاک40، طبقه چهارم، واحد12
          </p>
        </div>
      </div>
    </div>

    <!-- ---------------------LEFT FOOTRE---------------------------------- -->
    <div class="w-[923px] m-xl:w-[700px] h-[422px] flex flex-col justify-between">
      <div class="flex flex-col gap-6">
        <div
          class="h-[72px] border border-gray-b7 bg-gray-b8 rounded-xl px-6 flex justify-between items-center"
        >
          <p class="text-lg m-xl:text-sm font-medium">
            با ثبت ایمیل از آخرین تخفیف ها با خبر شوید
          </p>
          <div class="flex gap-2 items-center">
            <input
              type="text"
              placeholder="آدرس ایمیل"
              class="w-[344px] m-xl:w-[200px] h-12 rounded-lg bg-gray-b7 placeholder:absolute placeholder:right-6 placeholder:top-3 placeholder:text-gray-b3 focus:pl-6"
              dir="ltr"
            />
            <button
              class="c-btn-primary hover:bg-transparent w-[72px] h-12 bg-primary-orginal text-white"
            >
              ثبت
            </button>
          </div>
        </div>
        <div
          class="h-[72px] border border-gray-b7 bg-gray-b8 rounded-xl px-6 flex justify-between items-center"
        >
          <p class="text-lg m-xl:text-sm font-medium">
            ما را در شبکه های اجتماعی دنبال کنید
          </p>
          <div class="flex gap-2 items-center flex-row-reverse">
            <span>
              <NuxtIcon name="layout/_instagram" class="text-[40px]" filled />
            </span>
            <span>
              <NuxtIcon name="layout/_WhatsApp" class="text-[40px]" filled />
            </span>
            <span>
              <NuxtIcon name="layout/_Telegram" class="text-[40px]" filled />
            </span>
            <span>
              <NuxtIcon name="layout/_Linkedin" class="text-[40px]" filled />
            </span>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex flex-col justify-between gap-2">
          <h6 class="text-gray-b2 mb-4 text-xl font-extrabold">
            خدمات مشتریان
          </h6>
          <span class="text-[#646464]">تماس با ما</span>
          <span class="text-[#646464]">درباره ما</span>
          <span class="text-[#646464]">فروشگاه</span>
          <span class="text-[#646464]">رسانه ها</span>
        </div>

        <div class="flex flex-col justify-between gap-2">
          <h6 class="text-gray-b2 mb-4 text-xl font-extrabold">
            راهنمای خرید از آسان مارکت
          </h6>
          <span class="text-[#646464]">نحوه ثبت سفارش</span>
          <span class="text-[#646464]">رویه ارسال سفارش</span>
          <span class="text-[#646464]">شیوه‌های پرداخت</span>
        </div>

        <div class="flex flex-col justify-between gap-2">
          <h6 class="text-gray-b2 mb-4 text-xl font-extrabold">
            نماد اعتماد آسان مارکت
          </h6>
          <div class="flex gap-4">
            <nuxt-img
              src="images/footer/kasbokar.png"
              class="w-[96px] h-[128px] rounded-lg border border-[#D2D2D2] bg-white p-3"
            />
            <nuxt-img
              src="images/footer/rezi.png"
              class="w-[96px] h-[128px] rounded-lg border border-[#D2D2D2] bg-white p-3"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
