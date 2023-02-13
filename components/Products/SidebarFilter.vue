<template>
  <div class="w-[292px] mx-6 py-8 border-2 border-[#EBEBEB] rounded-[10px]">
    <h3 class="text-[22px] px-6 text-[#666666] flex items-center gap-2 mb-8">
      <NuxtIcon filled name="filter/filter" />
      <span>فیلترها</span>
    </h3>

    <!-- -------------------- CATEGORY ---------------------------- -->
    <div class="list-section">
      <h6
        class="font-bold text-lg text-[#333333] flex items-center justify-between my-8"
      >
        <span>دسته بندی ها</span>
        <NuxtIcon filled name="filter/arrow" />
      </h6>
      <div class="w-full max-h-[340px] overflow-y-hidden">
        <ul class="w-full">
          <li class="list-item border-b border-[#EBEBEB]">
            <NuxtIcon filled name="filter/arrow-down" />
            <span>همه کالا ها</span>
          </li>
          <div class="">
            <li class="list-item border-b border-[#EBEBEB]">
              <NuxtIcon filled name="filter/arrow-down" />
              <span>کامپیوتر</span>
            </li>
            <ul class="mr-4">
              <div>
                <li @click="isMenuOpen = !isMenuOpen" class="list-item border-b border-[#EBEBEB]">
                  <NuxtIcon filled name="filter/arrow-down" />
                  <span>سخت افزار و قطعات</span>
                </li>
                <ul v-show="isMenuOpen" class="mr-4 text-center">
                  <li
                    class="list-item text-center w-full border-b border-[#EBEBEB]"
                  >
                    رم-ram
                  </li>
                  <li
                    class="list-item text-center w-full border-b border-[#EBEBEB]"
                  >
                    رم-ram
                  </li>
                  <li class="list-item text-center w-full">رم-ram</li>
                </ul>
              </div>
            </ul>
          </div>
        </ul>
      </div>
    </div>

    <!-- ----------------------- BRAND ----------------------- -->
    <div class="list-section">
      <h6
        class="font-bold text-lg text-[#333333] flex items-center justify-between mb-8"
      >
        <span>برند</span>
        <NuxtIcon filled name="filter/arrow" />
      </h6>
      <ul>
        <li class="list-item">
          <input class="" type="checkbox" name="samsung" id="samsung" />
          <span>سامسونگ</span>
        </li>
        <li class="list-item">
          <input class="" type="checkbox" name="sony" id="sony" />
          <span>سونی</span>
        </li>
      </ul>
    </div>

    <!-- ----------------------- IS IN STORE ----------------------- -->
    <div class="list-section">
      <div class="list-item justify-between">
        <span>موجود در انبار</span>
        <label class="switch" for="store">
          <input class="" type="checkbox" name="store" id="store" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <!-- ----------------------- PRICE RANGE ----------------------- -->
    <div class="list-section">
    <div class="list-item justify-between">
        <span>محدوده قیمت</span>
        <NuxtIcon filled name="filter/arrow-down" />
    </div>
    <div class="list-item">
        <span>از</span>
        <input type="text" class="outline-none text-center border-b-2 border-[#EBEBEB] w-40">
        <span>تومان</span>
    </div>
    <div class="list-item">
        <span>تا</span>
        <input type="text" class="outline-none text-center border-b-2 border-[#EBEBEB] w-40">
        <span>تومان</span>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    const isMenuOpen = ref(false)
    
</script>

<style scoped>
.list-section {
  @apply py-4 px-6 w-full border-b-2 border-[#EBEBEB];
}
.list-item {
  @apply flex items-center gap-3 font-bold text-lg text-[#666666] py-4;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
