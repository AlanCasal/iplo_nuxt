<template>
	<section id="leer-section">

		<div class="wow animate__fadeInUp">
			<div id="libro-div">
				<img id="libro-img" src="@/assets/img/coverart-book.jpg" alt="libro">
			</div>
	
			<div id="texto-div">
				<p class="texto">
					<img id="quote-sign-left" class="quotes" src="@/assets/img/quote-sign-left.png" alt="">
					Tristeza, dolor y sufrimiento, malignos tumores de nuestra existencia difíciles de extirpar; nos afligen, nos carcomen, y nos creemos invictos cuando logramos vencerlos luego de una ardua lucha... que ingenuos... Imagina escarmentar sus latigazos en todo el cuerpo y a toda hora, desde que despiertas hasta que vuelves a despertar, una, y otra, y otra vez, hasta que el tiempo deje de ser 
					<span>
						tiempo
						<img id="quote-sign-right" class="quotes" src="@/assets/img/quote-sign-right.png" alt="">
					</span>
				</p>
			</div>
		</div>

	</section>
</template>

<style scoped>
	.texto {
		font-style: italic;
		text-align: justify;
		color: #666666;
		font-family: "Open Sans", sans-serif;
		margin-top: 30px;
	}

	.quotes {
		display: inline-block;
		width: 37px;
	}
	
	#quote-sign-left {
		margin-bottom: 5px;
		padding-right: 10px;
	}
	
	#quote-sign-right {
		margin-bottom: -5px;
		padding-left: 10px;
	}

	#libro-div {
		text-align: center;
	}

	#libro-img {
		border-radius: 4px;
		box-shadow   : 5px 5px 4px rgba(0, 0, 0, .5);
	}

	@media (max-width: 767px) {
		img {
			width: 95%;
		}

		section {
			padding: 50px 0;
		}

		.texto {
			font-size: 16px;
			padding: 0 15px;
		}
	}

	@media (min-width: 768px) {
		section {
			padding: 100px 0;
		}

		.texto {
			font-size: 18px;
			width: 700px;
		}

		#texto-div {
			width: 700px;
			position: relative;
			left: 50%;
			margin-left: -350px;
		}
	}
</style>