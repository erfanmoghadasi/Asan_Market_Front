<template>
  <div class="max-w-[1556px] m-xl:max-w-[1180px] pt-36 mx-auto">
    <AccountLogoutModal
      :isLogoutModal="isLogoutModal"
      @close-modal="() => (isLogoutModal = false)"
    />
    <div
      class="flex justify-between items-center px-6 mb-14 h-[91px] w-full bg-gray-b9 border-2 border-gray-b7 rounded-[10px]"
    >
      <ul class="flex items-center gap-14 m-xl:gap-8">
        <li
          v-for="item in navList"
          :key="item.id"
          @click="() => (selectedNum = item.id)"
          :class="
            selectedNum === item.id
              ? 'text-primary-b4  border-primary-orginal '
              : 'text-gray-b4 border-transparent'
          "
          class="cursor-pointer border-b-4 py-8 h-full font-medium text-lg m-xl:text-sm flex gap-3 transition-all"
        >
          <NuxtIcon :name="item.icon" filled class="text-2xl m-xl:text-lg" />
          <span>{{ item.title }}</span>
        </li>
      </ul>
      <button
        class="flex items-center gap-4 px-5 py-4 bg-gray-b8 text-error-b2 rounded-md font-medium tex-lg  m-xl:text-sm  box-content hover:border border border-transparent hover:border-error-b2 hover:bg-white transition-all"
        @click="() => (isLogoutModal = true)"
      >
        <NuxtIcon name="account/power" filled class="text-2xl m-xl:text-lg" />
        <span>خروج از حساب</span>
      </button>
    </div>
    <div class="min-h-screen">
      <Transition
        appear
        mode="out-in"
        enter-from-class="opacity-0 translate-y-5"
        enter-active-class="transition duration-[200ms]"
        leave-to-class="opacity-0 "
        leav-active-class="transition duration-[200ms]"
      >
        <component :is="currentComponent" />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import Profile from "/components/Account/Profile.vue";
import Favourites from "/components/Account/Favourites.vue";
import Messages from "/components/Account/Messages.vue";

const isLogoutModal = ref(false);
const selectedNum = ref(1);
const currentComponent = computed(() => {
  switch (selectedNum.value) {
    case 1:
      return Profile;

    case 2:
      return Favourites;

    case 6:
      return Messages;
  }
});
const navList = ref([
  {
    id: 1,
    title: "پروفایل کاربری",
    icon: "account/user-square",
  },
  {
    id: 2,
    title: "علاقه مندی ها",
    icon: "account/heart",
  },
  {
    id: 3,
    title: "نظرات من",
    icon: "account/message-text",
  },
  {
    id: 4,
    title: "فاکتورها",
    icon: "account/receipt",
  },
  {
    id: 5,
    title: "فاکتور معین",
    icon: "account/archive-book",
  },
  {
    id: 6,
    title: "اعلان ها",
    icon: "account/notification",
  },
  {
    id: 7,
    title: "سفارشات",
    icon: "account/shopping-cart",
  },
]);
</script>

<style scoped></style>
