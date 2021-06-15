<template>
	<Page>
		<v-container fluid class="text-center" style="height: 100vh">
			<h1
				class="title-name"
				style="font-size: 3.2rem; font-weight: 300; margin-top: 23vh"
			>
				Hi, I am Ratul Saha
			</h1>
			<h2 style="letter-spacing: 0.16em; font-weight: 300">
				A FULL STACK WEB DEVELOPER AND FREELANCER
			</h2>
			<h3 style="font-size: 2rem; font-weight: 300; margin-top: 2.2rem">
				I make minimal, interactive and functional websites. <br />
				And among other things, I also enjoy
				<span id="interests"></span>.
			</h3>
			<v-btn
				href="/works"
				depressed
				style="margin: 6.5rem 6px 0 6px; background: transparent"
			>
				Gallery
				<v-icon style="margin-left: 4px"
					>mdi-chevron-right-circle-outline</v-icon
				>
			</v-btn>
			<v-btn
				href="/about"
				depressed
				style="
					margin: 6.5rem 6px 0 6px;
					color: var(--bg);
					background: var(--dark);
				"
			>
				About Me
				<v-icon style="margin-left: 4px">mdi-mail</v-icon>
			</v-btn>
		</v-container>
	</Page>
</template>

<script>
import Page from "@/components/Page.vue";

export default {
	name: "Home",
	components: { Page },
	async mounted() {
		const element = document.getElementById("interests");
		const interests = [
			"deploying apps",
			"managing servers",
			"working with CI/CD",
			"automating things",
			"gaming",
		];

		const func = async () => {
			for (const x of interests) {
				for (const letter of x.split("")) {
					if (/\s/.test(letter)) element.textContent += "\u00a0";
					else element.textContent += letter;
					await new Promise((res) => setTimeout(res, 100));
				}
				await new Promise((res) => setTimeout(res, 1000));
				element.textContent = "";
			}
			await func();
		};

		await func();
	},
};
</script>
