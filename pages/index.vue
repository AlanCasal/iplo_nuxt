<template>
	<div>
		<img src="/header.webp" style="display:none" alt="header" @load="show_header = true" />
		<template v-if="show_header">
			
			
			
			<div id="modal1" class="modal">
				<div class="modal-content">
					<h4>Atención</h4>
					<p>Si ingresaste desde <b>Facebook</b> puede que la página no se vea correctamente.</p>
					<p>
						Para una mejor experiencia ingresá a <strong>https://lbtiluminadosporlaoscuridad.com.ar</strong> desde tu navegador preferido <strong>(Chrome, Safari, Firefox, etc)</strong>.
					</p>

					<p id="gracias">¡Gracias!</p>
				</div>
				<div class="modal-footer">
					<a href="#" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
				</div>
			</div>


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

		mounted() {
			$(document).ready(() => {
				const ua = navigator.userAgent || navigator.vendor || window.opera;

				const isFacebookApp = () => ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;

				if (isFacebookApp()) {
					$("#modal1").modal();
					$('#modal1').modal("open");

					// window.parent.location.assign(
					// 	"https://lbtiluminadosporlaoscuridad.com.ar/redirect_fb"
					// );
				}
				
			});
		}
	};
</script>

<style scoped>
	.modal {
		width: 100%;
	}

	.modal-content {
		text-align: center;
	}

	.modal h4,
	a {
		font-family: Voltaire, sans-serif;
		text-transform: uppercase;
		font-weight: bold;
		text-align: center;
		letter-spacing: 0.1em;
	}

	.modal p {
		font-size: 18px;
		font-family: 'Open Sans', sans-serif;
	}

	.modal b {
		color: #3b5998;
		text-decoration: underline;
	}

	.modal strong {
		font-weight: bold;
	}

	#gracias {
		text-align: center;
		margin-bottom: 0;
	}

	.modal-footer {
		border-top: 1px solid lightgray
	}
</style>
