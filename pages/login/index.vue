<template>
  <div class="w-full h-[100vh]  flex justify-center items-center">
    <UtilsLoginBase 
    :iconName="headersInfo[0].iconName"
    :header="headersInfo[0].header"
    :title="headersInfo[0].title"
    :description="headersInfo[0].description"
    >
      <LoginFormsSignin />
    </UtilsLoginBase>
  </div>
</template>

<script setup lang="ts">

    definePageMeta({
        layout: 'login-layout'
    })

    const headersInfo = ref([
      {
        iconName : 'login/Group 275',
        header: 'Welcome',
        title: 'خـــــوش آمــــدید',
        description: 'آسان مارکت متن خلاصه ساختگی با تولید سادگی نامفهوم از صنعت گرافیک با استفاده از طراحان است'
      }
    ])
</script>

<style scoped>
</style>
