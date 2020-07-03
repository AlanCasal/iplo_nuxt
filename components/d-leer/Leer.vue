<template>
	<section id="leer-section">
		<div class="wow animate__fadeInUp">
			<section-header :title="title" :text_color="'white'" />

			<h4>Contenido gratuido</h4>

			<div id="contenido-wrapper" class="row">
				<div v-for="(c, key) of caps"
					:key="key"
					class="capitulo-wrapper">
					<p v-text="c.cap_circle" class="inicial"></p>
					<p v-text="c.cap_text" class="cap-titulo"></p>
					<p v-text="c.time + ' min. de lectura'" class="time"></p>
					<p v-text="c.estado" class="estado"></p>
					<div v-if="key > 0" class="vr"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		components: {
			"section-header": () =>
				import("@/components/section-header/SectionHeader")
		},

		data: () => ({
			title: "Leer"
		}),

		computed: {
			caps() {
				return [
					{id: 'cap1', cap_circle: 'I', preludio: 'Preludio', cap_text: 'Capítulo I', time: '57', estado: 'En proceso de reedición final'},
					{id: 'cap2', cap_circle: 'II', cap_text: 'Capítulo II', time: '37', estado: 'En proceso de reedición final'},
					{id: 'cap3', cap_circle: 'III', cap_text: 'Capítulo III', time: '12', estado: 'En proceso de reedición final'},
					// {id: 'trad', cap_circle: 'T', cap_text: 'Traducciones', time: '12', estado: 'En proceso de reedición final'},
				]
			}
		}
	};
</script>

<style scoped>
	#leer-section {
		padding-bottom: 70px;
		background-image: url('~assets/img/leer-t.jpg');
		background-attachment: fixed;
		background-size: cover;
	}

	.capitulo-wrapper,
	h4 {
		text-align: center !important;
		color: white;
	}

	.inicial {
		font-family: 'Times New Roman', Times, serif;
		font-size: 36px;
	}

	.cap-titulo,
	.estado,
	.time {
		font-family: Voltaire, sans-serif;
	}

	.inicial,
	.cap-titulo,
	.estado,
	.time {
		color: gray;
	}
	
	.cap-titulo,
	.estado {
		text-transform: uppercase;
	}

	.estado {
		font-style: italic;
	}

	p {
		margin: 0;
	}
	
	.time {
		margin: 5px 0;
		font-size: 14px;
	}

	@media (max-width: 767px) {
		h4 {
			margin-bottom: 20px;
		}

		.cap-titulo,
		.estado {
			font-size: 18px;
		}

		.vr {
			width      : 112px;
			height     : 1px;
			position   : relative;
			left       : 50%;
			bottom     : 151px;
			margin-left: -56px;
			background-color: var(--iplo-red);
		}

		.capitulo-wrapper:not(:last-child) {
			margin-bottom: 30px;
		}

	}

	@media (min-width: 768px) {
		#contenido-wrapper {
			width: 700px;
			margin-top: 40px;
		}

		.capitulo-wrapper {
			width: 33.33%;
			margin-left: auto;
			left: auto;
			right: auto;
			float: left;
			box-sizing: border-box;
			padding: 0 0.75rem;
			min-height: 1px;
			max-height: 160px;
		}

		.vr {
			width   : 1px;
			height  : 167px;
			position: relative;
			right   : 12px;
			bottom  : 149px;
			background-color: var(--iplo-red);
		}

		.cap-titulo,
		.estado {
			font-size: 18px;
		}

		
	}
</style>