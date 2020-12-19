<template>
  <div>
    <v-app-bar
      class="text-center"
      flat
      dark
      style="background: transparent; color: black"
    >
      <v-toolbar-title style="font-family: Orbitron; font-size: 1.5rem">
        { <span style="font-size: 1.3rem">RATUL SAHA</span> }
      </v-toolbar-title>
      <v-spacer />
      <v-btn depressed text
        ><v-icon style="color: black">mdi-menu</v-icon></v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped></style>
