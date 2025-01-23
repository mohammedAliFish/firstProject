<template>
  <!-- نافذة منبثقة تحتوي على نموذج إضافة الشركة -->
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">إضافة شركة جديدة</span>
      </v-card-title>
      <v-card-text>

        <v-form v-model="valid" ref="form">
          <v-text-field
            v-model="companyName"
            label="اسم الشركة"
            :rules="[v => !!v || 'هذا الحقل مطلوب']"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="companyAddress"
            label="عنوان الشركة"
            :rules="[v => !!v || 'هذا الحقل مطلوب']"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="country"
            label="البلد"
            :rules="[v => !!v || 'هذا الحقل مطلوب']"
            outlined
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>

        <v-btn text @click="dialog = false">إغلاق</v-btn>
        <v-btn color="success" @click="createCompany">إضافة شركة</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import apiClient from "@/service/api";


const dialog = ref(true);


const companyName = ref('');
const companyAddress = ref('');
const country = ref('');
const valid = ref(false);


const createCompany = async () => {
  if (valid.value) {
    const companyData = {
      companyName: companyName.value,
      companyAddress: companyAddress.value,
      country: country.value,
    };

    try {
      const response = await apiClient.post(`/api/companies/${}/employees`, companyData);
      console.log('تم إضافة الشركة بنجاح', response.data);
    } catch (error) {
      console.error('حدث خطأ عند إضافة الشركة:', error);
    } finally {
      dialog.value = false;
    }
  }
};
</script>
