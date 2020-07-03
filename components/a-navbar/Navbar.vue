<template>
	<nav class="z-depth-0">
		<div class="nav-wrapper">
			<ul id="nav-mobile" class="right">
				
				<li v-for="(l, key) of nav_links" :key="key">
					<a @click="scroll_to(l.target)" class="nav-link">
						<i class="material-icons left">{{l.icon}}</i>
						<span v-text="l.text"></span>
					</a>
				</li>
				
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		methods: {
			scroll_to(section) {
				const offset = 20;
				const delay = section => {
					switch (section) {
						case "leer-section"    : return 500;
						case "autor-section"   : return 700;
						case "contacto-section": return 1000;
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
			nav_links() {
				return [
					{target: 'leer-section', icon: 'format_align_center', text: 'Leer'},
					{target: 'autor-section', icon: 'person_pin', text: 'Acerca del autor'},
					{target: 'contacto-section', icon: 'mail', text: 'Contacto'},
				]
			}
		}
	};
</script>

<style scoped>
	nav {
		background-color: transparent;
		background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)); /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
		background-image:    -moz-linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)); /* For Firefox (3.6 to 15) */
		background-image:      -o-linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)); /* For old Opera (11.1 to 12.0) */ 
		background-image:         linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)); /* Standar */
		position: absolute;
		top: 0;
		position: fixed;
		z-index: 3;
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

	#nav-mobile li a {
		text-shadow: 2px 2px 4px black, -2px -2px 4px black, 1px 1px 1px black,
			6px 6px 9px black, -6px -6px 9px black;
		-webkit-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-moz-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-ms-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		-o-transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
		transition: color 0.9s ease 0s, text-shadow 0.9s ease 0s;
	}

	#nav-mobile li a:hover {
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

	@media (max-width: 600px) {
		#nav-mobile {
			padding: 0;
		}

		.material-icons {
			padding: 0 !important;
			margin: 0 !important;
		}

		.nav-link span {
			display: none;
		}
	}
</style>