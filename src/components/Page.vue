<template>
	<v-app style="background: var(--bg); top: 0; left: 0">
		<Nav id="navbar" style="z-index: 500; position: fixed; width: 100%" />
		<slot />
		<Footer fluid style="bottom: 0; left: 0; height: 30vh" />
	</v-app>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";

export default {
	name: "Page",
	components: {
		Nav,
		Footer,
	},
};
</script>

<style>
:root {
	--blue: #48b8d0;
	--dark: #121212;
	--bg: #e5eafa;
}

::-webkit-scrollbar {
	width: 11px;
}
::-webkit-scrollbar-track {
	background: #2c2f33;
}
::-webkit-scrollbar-thumb {
	background: #121212;
}

html {
	scroll-behavior: smooth;
}
</style>
