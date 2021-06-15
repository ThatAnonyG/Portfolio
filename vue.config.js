module.exports = {
	transpileDependencies: ["vuetify"],
	pages: {
		index: {
			entry: "src/pages/home/home.js",
			template: "public/index.html",
			chunks: ["chunk-vendors", "chunk-common", "index"],
		},
		about: {
			entry: "src/pages/about/about.js",
			template: "public/index.html",
			chunks: ["chunk-vendors", "chunk-common", "about"],
		},
		blog: {
			entry: "src/pages/blog/blog.js",
			template: "public/index.html",
			chunks: ["chunk-vendors", "chunk-common", "blog"],
		},
		works: {
			entry: "src/pages/works/works.js",
			template: "public/index.html",
			chunks: ["chunk-vendors", "chunk-common", "works"],
		},
	},
};
