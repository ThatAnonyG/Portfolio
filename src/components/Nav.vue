<template>
  <div>
    <v-app-bar
      class="nav"
      elevate-on-scroll
      flat
      id="nav"
      dark
      style="background: #2c2f33;"
    >
      <v-toolbar-title>
        <v-avatar>
          <v-img style="height: 50px; width: 50px;" src="../assets/PFP.jpg" />
        </v-avatar>
        Ratul Saha
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :class="{ active: !$route.hash || active(`#intro`) }"
        text
        depressed
        href="#intro"
        >Intro</v-btn
      >
      <v-btn
        :class="{ active: active(`#gallery`) }"
        text
        depressed
        href="#gallery"
        >Gallery</v-btn
      >
      <v-btn :class="{ active: active(`#skill`) }" text depressed href="#skill"
        >Skill Set</v-btn
      >
      <v-btn :class="{ active: active(`#bio`) }" text depressed href="#bio"
        >Bio</v-btn
      >
      <v-btn
        :class="{ active: active(`#contact`) }"
        text
        depressed
        href="#contact"
        >Contact</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    active(id) {
      return this.$route.hash && id === this.$route.hash.toLowerCase();
    },
  },
};
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  nav.style.opacity = `${1 - window.pageYOffset / 400}`;
});
</script>

<style scoped>
.v-btn {
  margin: 5px;
}
.active {
  color: #48b8d0 !important;
}
</style>
