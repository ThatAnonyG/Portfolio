<template>
	<Page>
		<v-container fluid class="text-center">
			<v-container style="height: 100vh">
				<h1
					class="title-name"
					style="font-size: 3.3rem; font-weight: 300; margin-top: 10rem"
				>
					Welcome to the gallery
				</h1>
				<h2 style="letter-spacing: 0.16em; font-weight: 300">
					WITNESS MY SKILLS IN ACTION
				</h2>
				<h3 style="font-size: 2rem; font-weight: 300; margin-top: 2.2rem">
					Here you can take a look at my skills and work experience. <br />
					The following are the projects I am most proud of. <br />
				</h3>
				<v-btn
					depressed
					@click="scroll()"
					style="
						margin: 6.5rem 6px 0 6px;
						background: var(--dark);
						color: var(--bg);
					"
				>
					Take a tour
					<v-icon style="margin-left: 4px"
						>mdi-chevron-down-circle-outline</v-icon
					>
				</v-btn>
			</v-container>

			<v-container
				fluid
				v-for="project in projects"
				:key="project.name"
				style="
					height: calc(100vh - 4rem);
					position: relative;
					color: var(--dark);
				"
			>
				<v-layout align-center justify-center style="height: 100%">
					<v-icon
						@click="scroll(true)"
						style="
							position: absolute;
							top: 0;
							margin-top: 5rem;
							color: var(--dark);
						"
						>mdi-chevron-up-circle-outline</v-icon
					>
					<div class="project-img">
						<img style="width: 100%; height: auto" :src="project.img" />
					</div>
					<v-icon
						@click="scroll()"
						style="
							position: absolute;
							bottom: 0;
							margin-bottom: 5rem;
							color: var(--dark);
						"
						>mdi-chevron-down-circle-outline</v-icon
					>
				</v-layout>
			</v-container>
		</v-container>
	</Page>
</template>

<script>
export default {
	name: "Works",
	components: {
		Page: () => import("@/components/Page.vue"),
	},
	data: () => ({
		projects: [],
	}),
	methods: {
		scroll(up = false) {
			if (!up)
				window.scrollBy(
					0,
					window.innerHeight - document.getElementById("navbar").clientHeight
				);
			else
				window.scrollBy(
					0,
					-(window.innerHeight - document.getElementById("navbar").clientHeight)
				);
		},
	},
};
</script>

<style scoped>
.project-img {
	width: 50%;
	position: relative;
	transition: all 200ms ease;
}
.project-img:hover {
	transform: translateX(-50%);
}
.project-img:hover:after {
	content: "";
	position: absolute;
	top: 0;
	right: -50%;
	height: 100%;
	width: 50%;
}
</style>
