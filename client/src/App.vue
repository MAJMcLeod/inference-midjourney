<template>
  <v-app class="fill-height">
    <!-- <NavVertical/> -->
    <router-view class="fill-height"/>
  </v-app>
</template>

<script>
// import NavVertical from "./components/NavVertical.vue";

// export default{
//   components:{
//     NavVertical
//   }
// }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
