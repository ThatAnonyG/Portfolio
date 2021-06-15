<template>
	<Page>
		<v-container fluid class="text-center" style="margin: 5rem 0">
			<v-container fluid id="bio">
				<h1 class="title-name" style="font-size: 2.5rem; font-weight: 300">
					About Me
				</h1>
				<v-layout wrap justify-center align-center>
					<v-avatar size="15%"
						><v-img
							src="https://cdn.discordapp.com/attachments/854287173884968989/854407559557021716/self.webp"
						></v-img
					></v-avatar>
					<v-card
						dark
						max-width="500"
						style="margin: 1rem; background: #2c2f33"
					>
						<div class="text-left" style="margin: 0.5rem 1rem">
							<span class="overline">Hello, I'm</span>
							<br />
							<span style="font-size: 1.8rem; font-weight: 300; color: #48b8d0"
								>Ratul Saha</span
							>
							<br />
							<div style="font-size: 1.3rem; font-weight: 300; margin: 1rem 0">
								I am a full-stack self-taught web developer from India. I am 17
								years old and till date I have worked on various projects to
								build my knowledge and experience. Currently, I am looking for
								internships to further develop my skill-set and experience!
							</div>
						</div>
						<v-card-actions>
							<v-spacer />
							<v-btn href="#contact" text color="#48b8d0"> Contact Me </v-btn>
							<v-btn
								href="https://cdn.discordapp.com/attachments/854287173884968989/854405803767103518/Ratuls_Resume.pdf"
								text
								color="#48b8d0"
							>
								Download Resume
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-layout>
			</v-container>
			<v-container fluid id="skill">
				<h1
					class="title-name"
					style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300"
				>
					Skill Set
				</h1>
				<v-layout wrap justify-center>
					<v-card dark max-width="500" style="margin: 5px; background: #2c2f33">
						<v-card-title class="justify-center">Languages</v-card-title>
						<v-card-text>
							<v-chip
								light
								color="#48b8d0"
								style="margin: 5px"
								v-for="x in skills"
								:key="x.name"
							>
								<v-avatar>
									<v-icon size="160%">{{ x.icon }}</v-icon>
								</v-avatar>
								<span>{{ x.name }}</span>
							</v-chip>
						</v-card-text>
					</v-card>
				</v-layout>
			</v-container>
			<v-container style="margin-top: 3rem" id="contact">
				<v-list-item-title
					style="margin: 1rem 0; font-size: 2.5rem; font-weight: 300"
					>Contact Me</v-list-item-title
				>
				<span style="font-weight: 400; font-size: 1.2rem"
					>Liked my work? Reach out to me through mail or discord. Lets work
					together!</span
				>
				<br />
				<v-btn
					class="text-lowercase contact_button"
					href="mailto:ratulsaha90.rs@gmail.com"
					target="_blank"
					text
					:ripple="false"
				>
					<v-icon style="margin-right: 4px; color: #48b8d0">mdi-mail</v-icon>
					ratulsaha90.rs@gmail.com
				</v-btn>

				<v-btn
					class="text-capitalize contact_button"
					target="_blank"
					text
					:ripple="false"
				>
					<v-icon style="margin-right: 4px; color: #48b8d0">mdi-discord</v-icon>
					ThatAnonyG#8444
				</v-btn>
			</v-container>
		</v-container>
	</Page>
</template>

<script>
export default {
	name: "About",
	components: {
		Page: () => import("@/components/Page.vue"),
	},
	data: () => ({
		skills: [
			{
				name: "JavaScript",
				icon: "mdi-language-javascript",
			},
			{
				name: "Python",
				icon: "mdi-language-python",
			},
			{
				name: "Java",
				icon: "mdi-language-java",
			},
			{
				name: "HTML5 | CSS3",
				icon: "mdi-web",
			},
			{
				name: "TypeScript",
				icon: "mdi-language-typescript",
			},
			{
				name: "NodeJS",
				icon: "mdi-nodejs",
			},
			{
				name: "Go",
				icon: "mdi-language-go",
			},
		],
	}),
};
</script>

<style scoped>
.contact_button {
	margin: 1rem;
	font-size: 1rem;
	transition: all 0.5s ease;
	background-size: 201% !important;
	background: linear-gradient(to right, var(--dark) 50%, transparent 50%) right;
}

.contact_button:hover {
	background-position: left;
	color: var(--bg);
}

.contact_button::before {
	background: transparent;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
