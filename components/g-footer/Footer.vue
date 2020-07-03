<template>
	<footer class="wow animate__fadeInUp">
		<section id="frase-section">
			<div id="contenido">
				<p id="frase">
					"Por mí se va a la ciudad doliente. Por mí
					se va a las eternas penas. Por mí se va entre la gente perdida. La justicia movió a mi autor
					supremo. Me hicieron el divino Poder, la suma Sabiduría y el Amor primero. Antes que yo
					no hubo cosa creada, sino lo eterno, y yo permaneceré eternamente.
					Dejad toda esperanza los que entráis."
				</p>
				<br/>
				<br/>
				<p id="fuente">Dante Alighieri, La Divina Comedia.</p>
			</div>
		</section>

		<p id="copyright">
			Copyright &copy; {{year}}
			<span> | </span>
			Sitio desarrollado por 
			<a href="https://www.linkedin.com/in/alancasal/">Alan Casal</a>
			<span> | </span>
			Todos los derechos reservados
		</p>
	</footer>
</template>

<script>
	export default {
		computed: {
			year() {
				return new Date().getFullYear();
			}
		}
		
	}
</script>

<style scoped>
	footer {
		background-image: url('~assets/img/leer-t.webp');
		background-attachment: fixed;
		background-size: cover;
		padding: 70px 0 10px 0;
	}

	#frase-section {
		padding-bottom: 60px;
	}

	#frase-section q, #frase-section p {
		color: white;
		font-family: 'Tangerine', cursive;
		font-size: 30px;
		line-height: 1;
		text-shadow: 2px 2px 4px var(--iplo-medred), -2px -2px 4px var(--iplo-darkred), 1px 1px 1px var(--iplo-darkred), 6px 6px 9px var(--iplo-darkred), -6px -6px 9px var(--iplo-darkred);
	}

	p {
		margin: 0;
	}

	#contenido {
		text-align: right;
		padding: 0 5%;
	}

	#copyright {
		font-family: Voltaire, sans-serif;
		color: white;
		font-size: 11px;
		text-align: center;
	}

	#copyright span {
		color: var(--iplo-red);
	}

	a {
		font-weight: bold;
		color      : white;
		-webkit-transition: color .9s ease 0s, text-shadow .9s ease 0s;
		-moz-transition   : color .9s ease 0s, text-shadow .9s ease 0s;
		-ms-transition    : color .9s ease 0s, text-shadow .9s ease 0s;
		-o-transition     : color .9s ease 0s, text-shadow .9s ease 0s;
		transition        : color .9s ease 0s, text-shadow .9s ease 0s;
	}

	a:hover {
		color      : var(--iplo-red);
		text-shadow: 2px 2px 4px var(--iplo-darkred), -2px -2px 4px var(--iplo-darkred), 1px 1px 1px var(--iplo-darkred), 6px 6px 9px var(--iplo-darkred), -6px -6px 9px rgb(80, 0, 0);
		-webkit-transition: color .6s ease 0s, text-shadow .6s ease 0s;
		-moz-transition   : color .6s ease 0s, text-shadow .6s ease 0s;
		-ms-transition    : color .6s ease 0s, text-shadow .6s ease 0s;
		-o-transition     : color .6s ease 0s, text-shadow .6s ease 0s;
		transition        : color .6s ease 0s, text-shadow .6s ease 0s;
	}
</style>