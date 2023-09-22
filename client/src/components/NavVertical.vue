<template>
  <v-navigation-drawer expand-on-hover>
   <div>
     <v-list>
      <v-list-item>
        <v-img :src="logo" />
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-folder"
        title="Generate"
        value="myfiles"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Gallery"
        value="shared"
      ></v-list-item>
    </v-list>
   </div>

    <v-menu location="top">
      <template v-slot:activator="{ props }">
        <v-btn class="py-4" dark v-bind="props">
          <v-list class="pa-0">
            <v-list-item
              class="pa-0"
              :prepend-avatar="user"
              title="Ben Aldrich"
              subtitle="cain&abelDDB"
            ></v-list-item>
          </v-list>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-navigation-drawer>
</template>

<script>
import user from "../assets/user.jpeg";
import logo from "../assets/logo.svg";
export default {
  name: "NavVertical",
  data() {
    return {
      user,
      logo,
    };
  },
};
</script>

<style>
</style>