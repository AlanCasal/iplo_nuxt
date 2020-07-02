const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/AlanCasal.github.io/'
  }
} : {};

/** // FIXME: ALAN
 * arreglar ese paddin(?)
 * molesto en mobile
 */

export default {
	...routerBase,

	mode: "universal",
	/*
	 ** Headers of the page
	 */

	head: {
		title: "Lágrimas bajo tierra - Iluminados por la oscuridad",
		meta: [
			{charset: "utf-8"},
			{name: "viewport", content: "width=device-width, initial-scale=1"},
			{hid: "description", name: "description", content: process.env.npm_package_description || ""},
			{name: "author", content: "Alan Casal"},
			{name: "copyright", content: "Alan Casal"},
			{name: "keywords", content: "lagrimas bajo tierra,iluminados por la oscuridad,lionar,stormrage,carlos orellano,libro"},
			{property: "og:title", content: "Lágrimas Bajo Tierra I - Iluminados por la Oscuridad"},
			{property: "og:url", content: "https://alancasal.github.io/"},
			{property: "og:description", content: "Tristeza, dolor y sufrimiento, malignos tumores de nuestra existencia difíciles de extirpar; nos afligen, nos carcomen, y nos creemos invictos cuando logramos vencerlos luego de una ardua lucha... que ingenuos... Imagina escarmentar sus latigazos en todo el cuerpo y a toda hora, desde que despiertas hasta que vuelves a despertar, una, y otra, y otra vez, hasta que el tiempo deje de ser tiempo"},
			{property: "og:type", content: "book"},
			{property: "og:type", content: "book"},
			{property: "og:image", content: "https://alancasal.github.io/header.jpg"},
			{name: "twitter:card", content: "summary"},
			{name: "twitter:site", content: "@Lionar_St"},
			{name: "twitter:creator", content: "@Lionar_St"},
		],
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
				src: "/wow.min.js",
				body: true,
			},
			{
				src: "https://smtpjs.com/v3/smtp.js",
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

	serverMiddleware: ["~/api"],
};
