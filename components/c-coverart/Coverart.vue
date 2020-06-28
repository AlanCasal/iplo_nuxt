<template>
	<section id="leer-section">

		<div class="wow animate__fadeInUp">
			<img src="@/assets/img/coverart-book.jpg" alt="libro">
		</div>

	</section>
</template>

<script>
	export default {
		
	};
</script>

<style scoped>
	/* section {
		min-height: 100vh;
		background-size: cover;
		background-position: center;
		background-image: url('~assets/img/texture.jpg');
	}*/

	div {
		text-align: center;
	}

	img {
		border-radius: 4px;
		box-shadow   : 5px 5px 4px rgba(0, 0, 0, .5);
	}

	@media (max-width: 460px) {
		img {
			width: 95%;
		}

		section {
			padding: 50px 0;
		}
	}

	@media (min-width: 461px) {
		section {
			padding: 100px 0;
		}
	}
</style>