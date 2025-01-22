<template>
  <v-toolbar>
    <v-btn
      :prepend-icon="
        theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      slim
      @click="onClick"
    ></v-btn>

    <v-spacer />
    <v-toolbar-items>

      <v-btn @click="toEmployees">الموظفين</v-btn>
      <v-btn @click="toCompanies">الشركات</v-btn>
      <v-btn @click="toHome">الصفحه الرئيسيه</v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
import { useRouter } from "vue-router";
import {ref} from 'vue'

const theme = ref('light')

const router = useRouter();

const toHome = ()=>{
  router.push('/')
}
const toEmployees = () => {
  router.push("/employees");
};

const toCompanies = () => {
  router.push("/companies");
};

const onClick =()=>{
  theme.value = theme.value == "light" ? "dark":"light";
}
</script>
