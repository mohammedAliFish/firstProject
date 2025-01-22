<template>
  <Header />

  <div class="innerFrame">
    <div class="d-flex align-center justify-space-between  margin-buttom: 100px;">
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
    <div>
      <v-table>
        <thead>
          <tr>

            <th class="text-right">الاجراءات</th>
            <th class="text-right">الدوله</th>
            <th class="text-right">العنوان</th>
            <th class="text-right">اسم الشركه</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-right">
            <td>gg</td>
            <td>gg</td>
            <td>gg</td>
            <td>gg</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>

  <v-dialog v-model="inputForm">
    <InputForm />
  </v-dialog>
</template>

<script setup>
import Header from "../../components/common/Header.vue";
import InputForm from "../../components/common/company/InputForm.vue";
import { ref } from "vue";

const inputForm = ref(false);

const openDialog = () => {
  inputForm.value = true;
};
</script>
