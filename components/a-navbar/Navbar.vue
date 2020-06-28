<template>
	<nav class="z-depth-0">

		
		<div class="nav-wrapper">
			<a @click="show_sidenav = true"
				data-target="sidenav-menu"
				href="#"
				class="menu-y-logo sidenav-trigger show-on-large">
				<i class="material-icons left">menu</i>
			</a>
			
			<a href="#" id="logo-a">
				<img id="logo-img" src="/skull_icon.png" alt="LOGO" />
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

			<li id="logo-li">
				<div>
					<a href="#" id="logo-sidenav">
						<img src="/skull_i.png" style="width: 100px;" />
					</a>
				</div>
			</li>
			<li>
				<div class="divider"></div>
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
					onCloseEnd: this.show_sidenav = false
				};

				const instances = M.Sidenav.init(sidenav, opts);
			},

			scroll_to(section) {
				const offset = 20;
				const delay = section => {
					switch(section) {
						case 'leer-section'    : return 500;
						case 'autor-section'   : return 700;
						case 'contacto-section': return 1000;
					}
				}

				$('html, body').animate({
					scrollTop: $("#" + section).offset().top + offset
				}, delay(section));

				this.close_sidenav();
			},

			close_sidenav() {
				$('.sidenav').sidenav('close');
            },
		}
	};
</script>

<style scoped>
	nav {
		/* background-color: rgba(0, 0, 0, 0.8); */
		background-color: transparent;
		background-image: linear-gradient(rgba(0,0,0,.8), rgba(255,0,0,0));
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
		text-shadow: 2px 2px 4px black, -2px -2px 4px black, 1px 1px 1px black, 6px 6px 9px black, -6px -6px 9px black;
		-webkit-transition: color .9s ease 0s, text-shadow .9s ease 0s;
		-moz-transition   : color .9s ease 0s, text-shadow .9s ease 0s;
		-ms-transition    : color .9s ease 0s, text-shadow .9s ease 0s;
		-o-transition     : color .9s ease 0s, text-shadow .9s ease 0s;
		transition        : color .9s ease 0s, text-shadow .9s ease 0s;
	}

	#nav-mobile li a:hover,
	.sidenav-trigger:hover {
		color: var(--iplo-red);
		-webkit-transition: color .6s ease 0s,         text-shadow .6s ease 0s;
		-moz-transition   : color .6s ease 0s,         text-shadow .6s ease 0s;
		-ms-transition    : color .6s ease 0s,         text-shadow .6s ease 0s;
		-o-transition     : color .6s ease 0s,         text-shadow .6s ease 0s;
		transition        : color .6s ease 0s,         text-shadow .6s ease 0s;
		text-shadow       : 2px 2px 4px rgb(80, 0, 0), -2px -2px 4px rgb(80, 0, 0), 1px 1px 1px rgb(80, 0, 0), 6px 6px 9px rgb(80, 0, 0), -6px -6px 9px rgb(80, 0, 0);
	}

	#logo-sidenav {
		text-align: center;
		margin    : 0 100px;
		padding   : 0;
	}

	#logo-li {
		padding-top: 25px;
	}

	.sidenav-link {
		-webkit-transition: background-color .9s ease 0s;
		-moz-transition   : background-color .9s ease 0s;
		-ms-transition    : background-color .9s ease 0s;
		-o-transition     : background-color .9s ease 0s;
		transition        : background-color .9s ease 0s;
	}
	
	.sidenav-link:hover {
		/* background-color: rgba(0, 0, 0, 0.1); */
		color: white;
		-webkit-transition: background-color .6s ease 0s;
		-moz-transition   : background-color .6s ease 0s;
		-ms-transition    : background-color .6s ease 0s;
		-o-transition     : background-color .6s ease 0s;
		transition        : background-color .6s ease 0s;
	}

	.sidenav-link a:hover,
	.sidenav-link a:hover i {
		color: var(--iplo-medred) !important;
	}

	.btn-close-sidenav {
		position: absolute;
		margin : 0;
		padding: 0;
		right  : 6px;
		top    : 0;
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