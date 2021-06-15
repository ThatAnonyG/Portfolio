<template>
	<v-app-bar class="text-center" flat style="background: #212121">
		<v-btn
			text
			:ripple="false"
			href="/"
			style="
				font-family: Bebas Neue;
				font-size: 1.8rem;
				letter-spacing: 1px;
				margin: 0;
			"
		>
			{ Ratul Saha }
		</v-btn>
		<v-spacer />
		<div>
			<v-app-bar
				flat
				:collapse="!nav"
				clipped-left
				elevation="0"
				style="background: transparent"
			>
				<v-toolbar-title>
					<v-tooltip bottom v-for="{ id, icon, link, name } in links" :key="id">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								:id="id"
								:href="link"
								:ripple="false"
								icon
								v-bind="attrs"
								v-on="on"
								style="margin: 0 0.5rem"
							>
								<v-icon class="nav-icon">{{ icon }}</v-icon>
							</v-btn>
						</template>
						<span>{{ name }}</span>
					</v-tooltip>
				</v-toolbar-title>
				<v-app-bar-nav-icon @click="handleNavOpen()" style="color: var(--blue)">
					<v-icon id="nav-button">mdi-chevron-right</v-icon>
				</v-app-bar-nav-icon>
			</v-app-bar>
		</div>
	</v-app-bar>
</template>

<script>
export default {
	name: "Nav",
	data: () => ({
		nav: false,
		links: [
			{
				id: "nav-home",
				icon: "mdi-home",
				link: "/",
				name: "Home",
			},
			{
				id: "nav-about",
				icon: "mdi-badge-account",
				link: "/about",
				name: "About",
			},
			{
				id: "nav-work",
				icon: "mdi-code-json",
				link: "/works",
				name: "Works",
			},
		],
	}),
	mounted() {
		const pageName =
			window.location.pathname === "/"
				? "/"
				: "/" + window.location.pathname.split("/")[1];
		this.links.forEach((x) => {
			if (pageName === x.link)
				return document.getElementById(x.id).classList.add("active");
			document.getElementById(x.id).classList.remove("active");
		});
	},
	methods: {
		handleNavOpen() {
			this.nav = !this.nav;
			const navButton = document.getElementById("nav-button");
			if (this.nav) navButton.classList.add("rotate");
			else if (!this.nav && navButton.classList.contains("rotate"))
				navButton.classList.remove("rotate");
		},
	},
};
</script>

<style scoped>
.v-btn {
	margin: 10px 0;
	color: var(--bg);
}
.v-btn::before {
	background: transparent;
}

#nav-button {
	transition: all 0.5s ease;
	font-size: 1.6rem;
}
.rotate {
	transform: rotate(-180deg);
}

.nav-icon {
	margin: 0 1rem;
	color: var(--bg) !important;
	font-size: 1.8rem;
}

.active:after {
	content: "";
	position: absolute;
	bottom: -10%;
	background: var(--blue);
	width: 9px;
	height: 9px;
	border-radius: 100%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, 0);
}
</style>
