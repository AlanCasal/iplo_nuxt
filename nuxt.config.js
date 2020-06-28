export default {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		// title: process.env.npm_package_name || "",
		title: "Lágrimas bajo tierra - Iluminados por la oscuridad",
		meta: [{charset: "utf-8"}, {name: "viewport", content: "width=device-width, initial-scale=1"}, {hid: "description", name: "description", content: process.env.npm_package_description || ""}],
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/skull_icon.png",
			},
			{
				href: "/Forum.woff2",
				as: "font",
				rel: "preload",
				crossorigin: true,
				crossOrigin: true,
			},
			{
				href: "/MaterialIcons-Regular.woff",
				as: "font",
				rel: "preload",
				crossorigin: true,
				crossOrigin: true,
			},
			{
				href: "/MaterialIcons-Regular.woff2",
				as: "font",
				rel: "preload",
				crossorigin: true,
				crossOrigin: true,
			},
			{
				href: "/MaterialIcons-Regular.ttf",
				as: "font",
				rel: "preload",
				crossorigin: true,
				crossOrigin: true,
			},
		],

		script: [
			{
				src : "/wow.min.js",
				body: true,
			},
			{
				src: "https://code.jquery.com/jquery-3.5.1.min.js",
				integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
				crossorigin: "anonymous",
				crossOrigin: "anonymous",
				body: true,
			},
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {color: "#1d68a7", failedColor: "#e3342f", height: "5px"},

	/*
	 ** Global CSS
	 */
	css: ["~/assets/materialize-src/sass/materialize.min.css", "~/assets/css/fonts.css", "~/assets/css/styles.css"],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{
			src: "~/plugins/materialize.min.js",
			ssr: false,
		},
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		"@nuxtjs/axios",
	],

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
	},
};
