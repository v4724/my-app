<template>
  <v-app>

    <v-navigation-drawer app v-model="drawer" clipped
        :mini-variant.sync='mini'
        permanent >
      <!-- -->
      <v-list>
        <v-list-item v-for="item in items" :key="item.name" :to="item.path">
          <v-list-item-content>{{ item.value }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    items: [
      {
        name: "home",
        path: "/",
        value: "HOME",
      },
      {
        name: "daySale",
        path: "/daySale",
        value: "今日銷售",
      },
      {
        name: "meals",
        path: "/meals",
        value: "餐點管理",
      },
    ],
  }),
};
</script>
