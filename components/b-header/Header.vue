<template>
	<section>
		<header id="header-parallax" class="animated fadeIn fast">
			<div id="header-text-wrapper">
				<div class="wow animated slow animate__fadeIn">
					<h1 class="lagrimas">
						Lágrimas bajo tierra <span>I</span>
					</h1>
					<h2 class="iluminados">Iluminados por la oscuridad</h2>
				</div>

				<a	v-show="show_btn"
					@click.prevent="scroll_to(target)"
					:class="pulse ? 'pulse' : ''"
					class="wow animated slow animate__fadeInUp waves-effect waves-light btn z-depth-2">Ver más</a>
			</div>
		</header>


		
	</section>
</template>

<script>
	export default {
		data: () => ({
			show_btn: false,
			pulse: true,
			target: 'libro-section'
		}),

		mounted() {
			setTimeout(() => this.show_btn = true, 1000);
		},

		methods: {
			scroll_to(section) {
				const offset = 20;
				this.pulse = false;

				$("html, body").animate({
					scrollTop: $("#" + section).offset().top + offset
				}, 700);
			},
		}
	};
</script>

<style scoped>
	header {
		background-position  : center;
		background-image     : url('/header.webp');
		background-attachment: fixed;
		background-size      : cover;
	}

	#header-text-wrapper {
		position: absolute;
		text-align: center;
	}
	
	.lagrimas, 
	.iluminados {
		text-transform: uppercase;
		text-shadow: 2px 2px 4px black, -2px -2px 4px black, 1px 1px 1px black, 6px 6px 9px black, -6px -6px 9px black;
		margin: 0;
		color: white;
		display: inline-block;
	}

	.lagrimas span {
		font-family: 'Times New Roman', Times, serif;
	}

	a {
		border-radius: 30px;
		margin-top: 30px;
		letter-spacing: 2px;
		width: 120px;
		font-family: Voltaire, sans-serif;
	}

	@media (max-width: 329px) {
		header {
			height: 500px;
		}

		#header-text-wrapper {
			width: 100%;
			top: 130px;
		}

		.lagrimas, 
		.iluminados {
			font-size: 35px;
		}

		.iluminados {
			margin-top: 20px;
		}
	}

	@media (min-width: 330px) and (max-width: 499px) {
		header {
			height: 600px;
		}

		#header-text-wrapper {
			width: 100%;
			top: 200px;
		}

		.lagrimas, 
		.iluminados {
			font-size: 35px;
		}

		.iluminados {
			margin-top: 20px;
		}
	}



	@media (max-width: 499px) {
		header {
			-moz-box-shadow:    inset 0 0 150px black;
			-webkit-box-shadow: inset 0 0 150px black;
			box-shadow:         inset 0 0 150px black;
		}
	}
	
	@media (min-width: 500px) {
		header {
			-moz-box-shadow:    inset 0 0 300px black;
			-webkit-box-shadow: inset 0 0 300px black;
			box-shadow:         inset 0 0 300px black;
		}
	}



	@media (min-width: 500px) and (max-width: 767px) {
		header {
			height: 600px;
		}

		#header-text-wrapper {
			width: 100%;
			top: 200px;
		}

		.lagrimas, 
		.iluminados {
			font-size: 40px;
		}
	}

	@media (min-width: 768px) {
		header {
			height: 800px;
		}

		#header-text-wrapper {
			width: 700px;
			top: 300px;
			margin-left: -350px;
			left: 50%;
		}

		.lagrimas, 
		.iluminados {
			font-size: 50px;
		}
	}

	@media (min-width: 1201px) {
		#header-text-wrapper {
			width: 800px;
			top: 300px;
			margin-left: -400px;
		}

		.lagrimas, 
		.iluminados {
			font-size: 55px;
		}
	}
</style>