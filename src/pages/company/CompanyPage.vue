<template>
  <Header />
  <div class="innerFrame">
    <div class="d-flex align-center justify-space-between" style="margin-bottom: 100px;" >
      <div class="text-center">
        <v-btn color="#4f545c" prepend-icon="mdi-plus-circle" @click="openDialog">
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>
          اضافة
        </v-btn>
      </div>
      <h2>اداره الشركات</h2>
    </div>

    <v-data-table
      :items="companies"
      item-value="companyGuid"
      :loading="loading"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn color="blue">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>

      <template v-slot:top>
        <v-text-field
          v-model="searchQuery"
          label="ابحث عن الشركات"
          class="mx-4"
          clearable
          dir="rtl"
          style="text-align: right"
        ></v-text-field>
      </template>

      <thead>
        <tr>
          <th class="text-right">الاجراءات</th>
          <th class="text-right">الدوله</th>
          <th class="text-right">العنوان</th>
          <th class="text-right">اسم الشركه</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-right" v-for="company in companies" :key="company.companyGuid">
          <td>
            <div class="d-flex">
              <v-btn color="blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn color="red"><v-icon>mdi-delete</v-icon></v-btn>
            </div>
          </td>
          <td>{{ splitAddress(company.fullAddress).country }}</td>
          <td>{{ splitAddress(company.fullAddress).address }}</td>
          <td>{{ company.companyName }}</td>
        </tr>
      </tbody>
    </v-data-table>
  </div>

  <v-dialog v-model="inputForm">
    <InputForm @close="inputForm=false" />
  </v-dialog>
</template>

<script setup>
import Header from "../../components/common/Header.vue";
import InputForm from "../../components/common/company/InputForm.vue";
import { onMounted, ref } from "vue";
import apiClient from "@/service/api";

const searchQuery = ref('');
const companies = ref([]);
const loading = ref(false);
const inputForm = ref(false)
const openDialog=()=>{
  inputForm.value=true
}
const fetchCompanies = async () => {
  loading.value = true;
  try {
    const response = await apiClient.get("/api/companies", {
      params: {
        search: searchQuery.value,
      },
    });
    companies.value = response.data;
    console.log(response)
    fetchCompanies();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  } finally {
    loading.value = false;
  }
};
onMounted(()=>{
  fetchCompanies();
})


const splitAddress = (fullAddress) => {
  const parts = fullAddress.split(" ");
  const lastPart = parts.pop().trim();
  const address = parts.join(", ").trim();
  return {
    address,
    country: lastPart,
  };
};
</script>
