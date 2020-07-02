<template>
	<div>
		<img src="/header.jpg" style="display:none" alt="header" @load="show_header = true" />
		<template v-if="show_header">
			<header-c />

			<navbar-c />

			<coverart-c />

			<leer-c />

			<autor-c />

			<contacto-c />

			<footer-c />

			<scroll-top />

			<floating-btns />
		</template>
	</div>
</template>

<script>
	export default {
		components: {
			"navbar-c"     : () => import("@/components/a-navbar/Navbar"),
			"header-c"     : () => import("@/components/b-header/Header"),
			"coverart-c"   : () => import("@/components/c-coverart/Coverart"),
			"leer-c"       : () => import("@/components/d-leer/Leer"),
			"autor-c"      : () => import("@/components/e-autor/Autor"),
			"contacto-c"   : () => import("@/components/f-contacto/Contacto"),
			"footer-c"     : () => import("@/components/g-footer/Footer"),
			"scroll-top"   : () => import("@/components/Scroll_top_c"),
			"floating-btns": () => import("@/components/Floating_act_c")
		},

		data: () => ({
			show_header: false
		}),
	};
</script>

<style scoped>
</style>
