<template>
  <v-container
    fluid
    class="text-center"
    style="background: #2c2f33; color: #fac748"
  >
    <h4 style="margin-top: 1.2rem; font-size: 1.15rem; font-weight: 300">
      © {{ new Date().getFullYear() }} Ratul Saha, all rights to content
      reserved.
    </h4>
    <v-btn
      class="text-capitalize"
      href="https://github.com/ThatAnonymousG"
      text
      color="#48b8d0"
      style="font-size: 1rem; margin-top: 5px"
      >Find Me On GitHub!</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>
