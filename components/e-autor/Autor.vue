<template>
	<section id="autor-section">
		
		<div class="wow animate__fadeInUp">
			<section-header :title="title"/>
	
			<img id="lionar-img" src="@/assets/img/lionar.jpg" alt="">
	
			<div id="lionar-data">
				<h3>Lionar Stormrage</h3>
				<h4>Autor</h4>
	
				<div class="row social-wrapper">
					<a v-for="(red, key) of redes" 
						:href="red.href"
						:key="`red${key}`"
						:class="key > 0 ? 'ml' : ''">
						
						<img :src="red.src" :id="red.id" :alt="red.alt">
					</a>
				</div>
	
				<div id="palabras">
					<p v-for="(p, key) of palabras"
						:key="`p${key}`">
						
					<img v-if="key === 0" id="quote-sign-left" src="@/assets/img/quote-sign-left.png" alt="">
					{{p}}
					<img v-if="key === palabras.length - 1" id="quote-sign-right" src="@/assets/img/quote-sign-right.png" alt="">
	
					</p>
				</div>
	
				
			</div>
		</div>

	</section>
</template>

<script>
	export default {
		components: {
			'section-header': () => import('@/components/section-header/SectionHeader.vue'),
		},

		computed: {
			title() {
				return 'Acerca del autor';
			},

			palabras() {
				return [
					"Es difícil resumir una historia en pocas palabras, aunque más difícil resulta hablar de uno mismo.",
					"Simplemente te diré que la escritura es mi pasión, una carrera que vengo siguiendo con esta historia por poco más de nueve años.",
					"Al principio no era más que un adolescente descubriendo su camino, con baldozas conformadas por mis propias palabras componiendo textos incomprensibles, verbos mal conjugados e incluso algún que otro término inventado que atentaba contra toda integridad intelectual.",
					"De aquellos valientes quienes se sometieron a semejante tortura, sólo una ex novia fue capaz de abrirme los ojos con tan sólo tres palabras: \"no lo entiendo\". Por su puesto que nadie había sido capaz de entenderlo, si lo que escribía no reflejaba más que una fuerte necesidad de desahogar una tristeza que llevaba acumulada dentro mío, la cual sólo yo comprendía.",
					"Desde ese entonces que no dejo de reinventar, de escribir y reescribir (es un arma de doble filo, lo sé), de prestar atención al más mínimo detalle y desarrollar constantemente esa hermosa sensación de descubrir, en el momento exacto en que mis dedos se deslizan por las teclas de mi notebook, los sucesos y acontecimientos como todo lector a la hora de embarcarse en una gran historia.",
					"No te voy a mentir, en dos o tres ocasiones me he replanteado mi propia ética y moral ante escenas tan sangrientas que me han revuelto el estómago, con un detallismo tan perverso que por poco cometo el error de someterlas al tan detestable proceso de censura. Afortunadamente junté el coraje suficiente para no hacerlo, dejando a un lado la preocupación de lo que pudieran llegar a pensar los más cercanos a mi.",
					"Quiénes me conocen, sabrán que la perversidad que influencia mis escritos son un hecho aislado a mi personalidad, aunque debo admitir que me sentiría halagado si creyeran lo contrario, como el mérito que recibe todo actor ante una gran puesta en escena.",
					"Así que, mi querido/a lector/a, el agradecimiento que siento para contigo supera las barreras de esta vida. Gracias eternas por tu valioso tiempo invertido en mis líneas, de corazón.",
					// "Lionar Stormrage."
				];
			},

			redes() {
				return [
					{href: 'https://twitter.com/Lionar_St', id: 'tw', src: require('@/assets/img/social/twitter.svg'), alt: 'twitter'},
					{href: 'https://www.facebook.com/LagrimasBajoTierra/', id: 'fb', src: require('@/assets/img/social/facebook.svg'), alt: 'facebook'},
					{href: 'https://www.instagram.com/lionar_stormrage/?hl=es-la', id: 'ig', src: require('@/assets/img/social/instagram.svg'), alt: 'ig'},
					{href: 'https://www.wattpad.com/user/LionarStormrage', id: 'wp', src: require('@/assets/img/social/wattpad.svg'), alt: 'wattpad'},
				]
			}
		}
		
	};
</script>

<style scoped>
	#autor-section {
		background: #f7f7f7;
		padding-bottom: 30px;
	}

	#lionar-img {
		width        : 200px;
		border-radius: 100px;
		position     : relative;
		left         : 50%;
		margin-left  : -100px;
		border       : 4px solid white;
		box-shadow   : 1px 1px 10px rgba(0, 0, 0, .3);
	}

	#lionar-data {
		margin-top: 20px;
		text-align : center;
	}

	#lionar-data h3 {
		color         : black;
		font-size     : 21px;
		font-weight   : bold;
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	h4 {
		color         : #999;
		font-size     : 21px;
		margin: 0;
	}

	.social-wrapper img {
		width: 30px;
		margin-top: 30px;
	}

	.ml {
		margin-left: 15px;
	}

	#quote-sign-left,
	#quote-sign-right {
		display: inline-block;
		width: 37px;
	}
	
	#quote-sign-left {
		margin-bottom: 5px;
		padding-right: 10px;
	}
	
	#quote-sign-right {
		margin-bottom: 5px;
		padding-left: 10px;
	}

	#palabras p {
		color: #666666;
		font-family: "Open Sans", sans-serif;
		font-style: italic;
		text-align: justify;
	}

	@media (max-width: 767px) {
		#palabras {
			font-size: 16px;
			padding: 0 15px;
		}
	}

	@media (min-width: 768px) {
		#palabras {
			width: 700px;
			position: relative;
			left: 50%;
			margin-left: -350px;
			font-size: 18px;
		}
	}
</style>