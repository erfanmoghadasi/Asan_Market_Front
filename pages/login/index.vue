<template>
  <div class="w-full h-[99vh] flex justify-center items-center">
    <UtilsLoginBase
      :headerInfo="headersInfo[pageNumber]"
      :pageNumber="pageNumber"
      @change-page="backPage"
    >
      <Transition
        appear
        mode="out-in"
        enter-from-class="opacity-0 -translate-x-3"
        enter-active-class="transition duration-[200ms]"
        leave-to-class="opacity-0 "
        leav-active-class="transition duration-[200ms]"
      >
        <component :is="componentsContent" @change-page="changePage" />
      </Transition>
    </UtilsLoginBase>
  </div>
</template>

<script setup lang="ts">
import Signin from "/components/LoginForms/Signin.vue";
import SignupOne from "/components/LoginForms/SignupOne.vue";
import SignupTwo from "/components/LoginForms/SignupTwo.vue";
import SignupThree from "/components/LoginForms/SignupThree.vue";
import SignupFour from "/components/LoginForms/SignupFour.vue";

definePageMeta({
  layout: "login-layout",
});

const pageNumber = ref(0);

const changePage = (num: number) => {
  pageNumber.value = num;
};
const backPage = () => {
  --pageNumber.value;
};

const componentsContent = computed(() => {
  switch (pageNumber.value) {
    case 0:
      return Signin;

    case 1:
      return SignupOne;

    case 2:
      return SignupTwo;

    case 3:
      return SignupThree;

    case 4:
      return SignupFour;
  }
});

const headersInfo = [
  {
    iconName: "login/Group_275",
    header: "Welcome",
    title: "خـــــوش آمــــدید",
    description:
      "آسان مارکت متن خلاصه ساختگی با تولید سادگی نامفهوم از صنعت گرافیک با استفاده از طراحان است",
  },
  {
    iconName: "login/Group",
    header: "Enter your number",
    title: "وارد کردن شماره همراه",
    description:
      "برای دریافت کد فعالسازی و ادامه فرآیند ثبت نام شماره همراه خود را وارد نمایید",
  },
  {
    iconName: "login/messages",
    header: "Receive activation code",
    title: "دريافت كد فعالسازی",
    description: "کد فعالسازی به شماره همراه 09010901738 ارسال شد",
  },
  {
    iconName: "login/shield-security",
    header: "Choose a Password",
    title: "انتخاب کلمه عبور",
    description:
      "کلمه عبور شما باید ترکیبی از حروف کوچیک و بزرگ لاتین، اعداد، نشانه ها باشد",
  },
  {
    iconName: "login/message-edit",
    header: "Completion of information",
    title: "تکمیل اطلاعات",
    description: "برای ثبت نام اطلاعات خود را با صحت و درستی وارد نمایید",
  },
];
</script>

<style scoped></style>
