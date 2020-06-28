<template>
	<section id="contacto-section">
		<div class="wow animate__fadeInUp">
			<section-header :title="title" />
	
			<div id="palabras">
				<p v-for="(t, key) of texto" v-text="t" :key="key"></p>
			</div>
	
			<contact-form/>
		</div>

	</section>
</template>

<script>
	export default {
		components: {
			"section-header": () => import("@/components/section-header/SectionHeader.vue"),
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
					"Podés llenar el siguiente formulario y dejarme un mensaje, te responderé a la mayor brevedad posible."
				];
			}
		}
	};
</script>

<style scoped>
	section {
		padding-bottom: 50px;
	}

	p {
		color: #666666;
		font-family: "Open Sans", sans-serif;
		font-style: italic;
		margin: 20px 0;
	}

	@media (min-width: 1200px) {
		#palabras {
			width: 1000px;
			text-align: center;
			position: relative;
			left: 50%;
			margin-left: -500px;
		}
	}
</style>