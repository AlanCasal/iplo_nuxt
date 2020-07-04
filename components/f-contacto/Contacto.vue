<template>
	<section id="contacto-section">
		<div class="wow animate__fadeInUp">
			<section-header :title="title" />
	
			<div id="palabras">
				<p v-for="(t, key) of texto" v-text="t" :key="key"></p>

				<a href="mailto:lionarstormrage@gmail.com" class="btn waves-effect waves-light z-depth-1 pulse">
					Enviar mensaje
					<i class="material-icons right">mail</i>
				</a>
			</div>

			<!-- <contact-form/> -->

		</div>

	</section>
</template>

<script>
	export default {
		components: {
			// "section-header": () => import("@/components/section-header/SectionHeader.vue"),
			"contact-form"  : () => import("@/components/f-contacto/Form.vue"),
		},

		computed: {
			title() {
				return "¡Contactame!";
			},

			texto() {
				return [
					"¿Querés ponerte en contacto conmigo para que te envíe los demás capitulos, dejar un saludo o bien amenazarme de muerte?",
					// "Podés enviarme un mensaje privado a través de mi página en facebook, instragram, twitter",
					"Podés hacerlo presionando el botón a continuación, te responderé a la mayor brevedad posible."
				];
			}
		}
	};
</script>

<style scoped>
	section {
		padding-bottom: 70px;
	}

	p {
		color      : #666666;
		font-family: "Open Sans", sans-serif;
		font-style : italic;
		margin     : 20px 0;
		text-align : justify;
	}

	#palabras {
		text-align: center;
	}

	a {
		font-family: Voltaire, sans-serif;
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