<template>
  <v-container>
    <v-row class="title">
      <v-col>
        <PageTitle :value="pageTitle"></PageTitle>
      </v-col>
    </v-row>
    <v-row class="d-flex align-item-stretch">
      <v-col class="d-flex flex-column">
        <v-simple-table>
          <thead>
            <tr>
              <th>{{ mealCols[0].displayName }}</th>
              <th>{{ mealCols[1].displayName }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(meal, index) in meals" :key="index">
              <td>{{ meal.name }}</td>
              <td>{{ meal.price }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <div class="mt-auto">
          <v-btn>新增</v-btn>
          <v-btn>刪除</v-btn>
        </div>
      </v-col>

      <v-col>
        <div class="">
          <v-form ref="form">
            <v-text-field
              v-model="name"
              :counter="max"
              label="名稱"
            ></v-text-field>
            <v-text-field
              v-model="unit"
              :counter="max"
              label="單位"
            ></v-text-field>
            <v-text-field
              v-model="price"
              :counter="max"
              label="售價"
            ></v-text-field>
            <v-text-field
              v-model="cost"
              :counter="max"
              label="成本"
            ></v-text-field>
            <v-text-field
              v-model="type"
              :counter="max"
              label="類型"
            ></v-text-field>
          </v-form>

          <div class="mt-auto">
            <v-btn v-if="!create && !edit">編輯</v-btn>
            <v-btn v-else-if="create || edit">儲存</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import {apiGetMeals} from '@/apis/meals.js'

export default {
  components: { PageTitle },
  data: () => ({
    create: false,
    edit: false,
    pageTitle: "餐點管理",
    currMeal: {},
    mealCols: [
      {
        colName: "name",
        displayName: "名稱",
        hidden: false,
      },
      {
        colName: "unit",
        displayName: "單位",
        hidden: true,
      },
      {
        colName: "price",
        displayName: "售價",
        hidden: false,
      },
      {
        colName: "cost",
        displayName: "成本",
        hidden: true,
      },
      {
        colName: "type",
        displayName: "類型",
        hidden: true,
      },
    ],
    meals: [],
  }),
  mounted() {
      this.getMealsData();
  },
  methods: {
      getMealsData() {
          apiGetMeals()
          .then((response) => {
              console.log(response);
              this.meals = response.data;
          });
      }
  }
};
</script>

<style scoped>
</style>