<template>
	<nav class="z-depth-0">
		<div class="nav-wrapper">
			<a @click="show_sidenav = true"
				data-target="sidenav-menu"
				href="#"
				class="menu-btn sidenav-trigger show-on-large">
				<i class="material-icons left">menu</i>
			</a>

			<ul id="nav-mobile" class="right">
				<li>
					<a @click="scroll_to('leer-section')">
						<i class="material-icons left">format_align_center</i>Leer
					</a>
				</li>
				<li>
					<a @click="scroll_to('autor-section')">
						<i class="material-icons left">person_pin</i>Acerca del autor
					</a>
				</li>
				<li>
					<a @click="scroll_to('contacto-section')">
						<i class="material-icons left">mail</i>Contacto
					</a>
				</li>
			</ul>
		</div>

		<ul id="sidenav-menu" class="sidenav">
			<a class="btn-flat btn-close-sidenav sidenav-close">
				<i class="material-icons">close</i>
			</a>

			<li id="iplo-li">
				<p id="lagrimas-sidenav">Lágrimas bajo tierra I</p>
				<p id="iluminados-sidenav">Iluminados por la oscuridad</p>
			</li>

			<li class="sidenav-link">
				<a class="waves-effect" @click="scroll_to('leer-section')">
					<i class="material-icons left">format_align_center</i>Leer
				</a>
			</li>
			<li class="sidenav-link">
				<a class="waves-effect" @click="scroll_to('autor-section')">
					<i class="material-icons left">person_pin</i>Acerca del autor
				</a>
			</li>
			<li class="sidenav-link">
				<a class="waves-effect" @click="scroll_to('contacto-section')">
					<i class="material-icons left">mail</i>Contacto
				</a>
			</li>

			<div class="row social-wrapper">
				<a v-for="(red, key) of redes"
					:href="red.href"
					:key="`red${key}`"
					:class="key === 0 ? 'offset-s2' : ''"
					class="col s2">
					<img :src="red.src" :id="red.id" :alt="red.alt" />
				</a>
			</div>
		</ul>
	</nav>
</template>

<script>
	export default {
		components: {
			sidenav: () => import("@/components/a-navbar/Sidenav.vue")
		},

		data: () => ({
			show_sidenav: false
		}),

		mounted() {
			this.materialize_components();
		},

		methods: {
			materialize_components() {
				const sidenav = document.querySelectorAll(".sidenav");
				const opts = {
					edge: "left",
					onCloseEnd: (this.show_sidenav = false)
				};

				const instances = M.Sidenav.init(sidenav, opts);
			},

			scroll_to(section) {
				const offset = 20;
				const delay = section => {
					switch (section) {
						case "leer-section":
							return 500;
						case "autor-section":
							return 700;
						case "contacto-section":
							return 1000;
					}
				};

				$("html, body").animate(
					{
						scrollTop: $("#" + section).offset().top + offset
					},
					delay(section)
				);

				this.close_sidenav();
			},

			close_sidenav() {
				$(".sidenav").sidenav("close");
			}
		},

		computed: {
			redes() {
				return [
					{
						href: "https://twitter.com/Lionar_St",
						id: "tw",
						src: require("@/assets/img/social/twitter.svg"),
						alt: "twitter"
					},
					{
						href: "https://www.facebook.com/LagrimasBajoTierra/",
						id: "fb",
						src: require("@/assets/img/social/facebook.svg"),
						alt: "facebook"
					},
					{
						href:
							"https://www.instagram.com/lionar_stormrage/?hl=es-la",
						id: "ig",
						src: require("@/assets/img/social/instagram.svg"),
						alt: "ig"
					},
					{
						href: "https://www.wattpad.com/user/LionarStormrage",
						id: "wp",
						src: require("@/assets/img/social/wattpad.svg"),
						alt: "wattpad"
					}
				];
			}
		}
	};
</script>

<style scoped>
	nav {
		background-color: transparent;
		background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0));
		position: absolute;
		top: 0;
	}

	#logo-img {
		width: 40px;
		margin-top: 10px;
	}

	.material-icons.left {
		padding-left: 30px;
	}

	li a {
		text-transform: uppercase;
	}

	#nav-mobile {
		padding-right: 30px;
	}

	#nav-mobile li a,
	.sidenav-trigger {
		text-shadow: 2px 2px 4px black, -2px -2px 4px black, 1px 1px 1px black,
			6px 6px 9px black, -6px -6px 9px black;
		-webkit-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-moz-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-ms-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-o-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
	}

	#nav-mobile li a:hover,
	.sidenav-trigger:hover {
		color: var(--iplo-red);
		-webkit-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		-moz-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		-ms-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		-o-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		text-shadow: 2px 2px 4px rgb(80, 0, 0), -2px -2px 4px rgb(80, 0, 0),
			1px 1px 1px rgb(80, 0, 0), 6px 6px 9px rgb(80, 0, 0),
			-6px -6px 9px rgb(80, 0, 0);
	}

	#iplo-li {
		background-image: url('~assets/img/iplo-avatar.jpg');
		background-position: top;
		background-size: cover;
		height: 200px;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
		margin: 4px;
		border: none;
	}

	#iplo-li div {
		position: relative;
		bottom: 0;
	}

	#iplo-li p {
		text-align: center;
		margin: 0;
		color: white;
		position: relative;
		font-size: 18px;
		text-transform: uppercase;
		font-family: Forum, sans-serif;
		text-shadow: 2px 2px 4px black, 9px 9px 4px black, -2px -2px 4px black, -9px -9px 4px black;
	}

	#lagrimas-sidenav {
		top: 120px;
	}

	#iluminados-sidenav {
		top: 100px;
	}

	.menu-btn {
		margin: 0;
	}

	.sidenav-link {
		-webkit-transition: background-color 0.9s ease 0s;
		-moz-transition: background-color 0.9s ease 0s;
		-ms-transition: background-color 0.9s ease 0s;
		-o-transition: background-color 0.9s ease 0s;
		transition: background-color 0.9s ease 0s;
	}

	.sidenav-link:hover {
		/* background-color: rgba(0, 0, 0, 0.1); */
		color: white;
		-webkit-transition: background-color 0.6s ease 0s;
		-moz-transition: background-color 0.6s ease 0s;
		-ms-transition: background-color 0.6s ease 0s;
		-o-transition: background-color 0.6s ease 0s;
		transition: background-color 0.6s ease 0s;
	}

	.sidenav-link a:hover,
	.sidenav-link a:hover i {
		color: var(--iplo-medred) !important;
	}

	.btn-close-sidenav {
		position: absolute;
		margin: 0;
		padding: 0;
		right: 6px;
		top: 0;
		color: white;
		text-shadow: 2px 2px 4px black, -2px -2px 4px black, 1px 1px 1px black,
			6px 6px 9px black, -6px -6px 9px black;
		-webkit-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-moz-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-ms-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-o-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
	}

	.btn-close-sidenav:hover {
		color: var(--iplo-red);
		-webkit-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		-moz-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		-ms-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		-o-transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		transition: color 0.6s ease 0s, text-shadow 0.6s ease 0s;
		text-shadow: 2px 2px 4px rgb(80, 0, 0), -2px -2px 4px rgb(80, 0, 0),
			1px 1px 1px rgb(80, 0, 0), 6px 6px 9px rgb(80, 0, 0),
			-6px -6px 9px rgb(80, 0, 0);
	}

	.social-wrapper img {
		width: 20px;
		margin-top: 30px;
	}

	@media (max-width: 699px) {
		#nav-mobile {
			display: none;
		}

		#logo-a {
			float: right;
			padding-right: 30px;
		}
	}
</style>