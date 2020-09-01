<template>
  <v-app style="background: #f5e5fc; top: 0; left: 0;">
    <div>
      <v-layout justify-center>
        <Nav
          style="z-index: 500; position: fixed; margin-top: 3rem; width: 90%;"
        />
      </v-layout>
      <router-view />
      <v-container
        class="text-center"
        fluid
        style="
          bottom: 0;
          left: 0;
          height: 15vh;
          background: #2c2f33;
          color: #fac748;
        "
      >
        <h4 style="margin-top: 1.2rem; font-size: 1.15rem; font-weight: 300;">
          © {{ new Date().getFullYear() }} Ratul Saha, all rights to content
          reserved.
        </h4>
        <v-btn
          class="text-capitalize"
          href="https://github.com/ThatAnonymousG"
          text
          color="#48b8d0"
          style="font-size: 1rem; margin-top: 5px;"
          >Find Me On GitHub!</v-btn
        >
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
