<template>
	<v-layout justify-center align-center style="background: var(--dark)">
		<div class="text-center" style="margin-top: 1rem">
			<v-row justify="center">
				<v-btn
					v-for="{ icon, link } in links"
					:key="icon"
					:href="link"
					:ripple="false"
					icon
					><v-icon style="font-size: 1.8rem">{{ icon }}</v-icon></v-btn
				>
			</v-row>
			<h4
				class="footer-text"
				style="
					font-weight: 300;
					font-size: 1rem;
					color: rgb(255, 255, 255, 50%);
				"
			>
				© {{ new Date().getFullYear() }} Ratul Saha, all rights to content
				reserved.
			</h4>
		</div>
	</v-layout>
</template>

<script>
export default {
	name: "Footer",
	data: () => ({
		links: [
			{
				icon: "mdi-github",
				link: "https://github.com/ThatAnonyG",
			},
			{
				icon: "mdi-twitter",
				link: "https://twitter.com/ThatAnonyG",
			},
			{
				icon: "mdi-linkedin",
				link: "https://www.linkedin.com/in/ratuls/",
			},
			{
				icon: "mdi-twitch",
				link: "https://twitch.tv/thatanonyg",
			},
		],
	}),
};
</script>

<style scoped>
.v-btn {
	color: rgb(255, 255, 255, 50%) !important;
	margin: 0 0.6rem 2rem 0.6rem;
	transform: color 0.5s ease;
}
.v-btn:hover {
	color: var(--blue) !important;
}
.v-btn::before {
	background: transparent;
}
</style>
