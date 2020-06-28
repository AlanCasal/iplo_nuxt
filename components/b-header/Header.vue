<template>
	<section>
		<img src="/header.jpg" alt="" style="display: none" @load="show_header = true">

		<header v-if="show_header" class="wow animate__fadeIn animated fast">

			<div id="header-text-wrapper" class="wow animated slow animate__fadeIn">
				<p class="lagrimas">Lágrimas bajo tierra <span>I</span></p>
				<p class="iluminados">Iluminados por la oscuridad</p>
				<p class="texto">Tristeza, dolor y sufrimiento, malignos tumores de nuestra existencia difíciles de extirpar; nos afligen, nos carcomen, y nos creemos invictos cuando logramos vencerlos luego de una ardua lucha... que ingenuos... Imagina escarmentar sus latigazos en todo el cuerpo y a toda hora, desde que despiertas hasta que vuelves a despertar, una, y otra, y otra vez, hasta que el tiempo deje de ser tiempo.</p>
			</div>
		</header>
		
	</section>
</template>

<script>
	export default {
		data: () => ({
			show_header: false
		})
	};
</script>

<style scoped>
	header {
		/* min-height: calc(100vh - 62px); */
		min-height: 100vh;
		background-size: cover;
		background-position: center;
		background-image: url('/header.jpg');
	}

	#header-text-wrapper {
		position: absolute;
		text-align: center;
		margin-top: 20vh;
	}

	p {
		color: white;
		display: inline-block;
		/* text-shadow: 2px 2px 4px black, -2px -2px 4px black; */
	}

	.lagrimas, 
	.iluminados {
		text-transform: uppercase;
		text-shadow: 2px 2px 4px black, -2px -2px 4px black, 1px 1px 1px black, 6px 6px 9px black, -6px -6px 9px black;
	}

	.texto {
		text-transform: uppercase;
		font-style: italic;
		text-shadow: 2px 2px 4px black, -2px -2px 4px black, 1px 1px 1px black, 6px 6px 9px black, -6px -6px 9px black;
	}

	.lagrimas span {
		font-family: 'Times New Roman', Times, serif;
	}

	@media (max-width: 599px) {
		/* #header-text-wrapper {
			margin-top: 170px;
		} */

		.lagrimas, 
		.iluminados {
			font-size: 26px;
			width: 100%;
		}

		.texto {
			width: 300px;
			margin-top: 20px;
			font-size: 14px;
		}
	}

	@media (min-width: 600px) and (max-width: 992px) {
		p {
			width: 500px;
		}

		.lagrimas, 
		.iluminados {
			font-size: 45px;
			width: 590px;
		}

		.texto {
			margin-top: 30px;
		}
	}

	@media (min-width: 993px) {
		p {
			width: 800px;
		}

		.lagrimas, 
		.iluminados {
			line-height: 1;
			font-size: 55px;
		}

		.texto {
			margin-top: 50px;
			font-size: 21px;
		}
	}

	@media (min-width: 1600px) {
		.lagrimas,
		.iluminados {
			width: 100%;
		}
	}
</style>