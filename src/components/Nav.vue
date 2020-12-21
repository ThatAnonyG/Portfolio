<template>
  <div>
    <v-app-bar
      class="text-center"
      flat
      style="background: transparent; color: black"
    >
      <router-link to="/" class="text-decoration-none black--text">
        <v-toolbar-title style="font-family: Orbitron; font-size: 1.5rem">
          { <span style="font-size: 1.3rem">RATUL SAHA</span> }
        </v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="nav = !nav" />
      <v-navigation-drawer
        v-model="nav"
        height="auto"
        absolute
        bottom
        right
        temporary
        hide-overlay
        dark
        style="margin: 1rem"
      >
        <v-toolbar-title
          style="
            font-family: Raleway;
            font-size: 1.5rem;
            color: #fac748;
            margin: 10px 0;
          "
        >
          Welcome
        </v-toolbar-title>
        <v-divider style="margin: 10px" />
        <v-list-item>
          <v-btn depressed text block to="/">Home</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn depressed text block to="/about">About</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn depressed text block to="/blog">Blog</v-btn>
        </v-list-item>
      </v-navigation-drawer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => ({
    nav: false,
  }),
};
</script>

<style scoped>
.v-list-item .v-btn {
  margin: 10px 0;
  color: #48b8d0;
}
</style>
