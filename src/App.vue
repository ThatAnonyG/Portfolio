<template>
  <v-app style="background: #e5eafa; top: 0; left: 0">
    <div>
      <Nav style="z-index: 500; position: fixed; width: 100%" />
      <router-view />
      <Footer fluid style="bottom: 0; left: 0; height: 15vh" />
    </div>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&display=swap");

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: #e5eafa;
}
::-webkit-scrollbar-thumb {
  background: #2c2f33;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html {
  scroll-behavior: smooth;
}
</style>
