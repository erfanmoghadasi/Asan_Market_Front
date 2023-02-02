<template>
  <div class="w-full h-[100vh]  flex justify-center items-center">
    <UtilsLoginBase 
    :iconName="headersInfo[0].iconName"
    :header="headersInfo[0].header"
    :title="headersInfo[0].title"
    :description="headersInfo[0].description"
    >
      <component :is="componentsContent()" />
    </UtilsLoginBase>
  </div>
</template>

<script setup lang="ts">
import Signin from '/components/LoginForms/Signin.vue'
import SignupOne from '/components/LoginForms/SignupOne.vue'
import SignupTwo from '/components/LoginForms/SignupTwo.vue'
import SignupThree from '/components/LoginForms/SignupThree.vue'
import SignupFour from '/components/LoginForms/SignupFour.vue'

    definePageMeta({
        layout: 'login-layout'
    })

    const componentsContent = (componentName = Signin)  => {
      return SignupFour
    } 

    console.log(componentsContent())

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
