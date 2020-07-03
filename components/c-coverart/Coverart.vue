<template>
	<section id="libro-section">

		<div class="wow animate__fadeInUp">
			<div id="libro-div">
				<img id="libro-img" src="@/assets/img/coverart-book.webp" alt="libro">
			</div>
	
			<div id="texto-div">
				<p class="texto">
					<img id="quote-sign-left" class="quotes" src="@/assets/img/quote-sign-left.png" alt="">
					Tristeza, dolor y sufrimiento, malignos tumores de nuestra existencia difíciles de extirpar; nos afligen, nos carcomen, y nos creemos invictos cuando logramos vencerlos luego de una ardua lucha... qué ingenuos... Imagina escarmentar sus latigazos en todo el cuerpo y a toda hora, desde que despiertas hasta que vuelves a despertar, una, y otra, y otra vez, hasta que el tiempo deje de ser.
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
	section {
		padding: 70px 0;
	}

	.texto {
		font-style: italic;
		text-align: justify;
		color: #666666;
		font-family: "Open Sans", sans-serif;
		margin-top: 50px;
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
		-webkit-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		-moz-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		-ms-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		-o-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
	}

	#libro-img:hover {
		z-index: 2;
		box-shadow: 5px 10px 30px rgba(0, 0, 0, .4);
		transform: scale(1.04);
		-webkit-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		-moz-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		-ms-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		-o-transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
		transition: transform .2s ease-in-out 0s, background-color .2s ease-in-out 0s, box-shadow .2s ease-in-out 0s;
	}

	@media (max-width: 767px) {
		img {
			width: 90%;
		}

		.texto {
			font-size: 16px;
			padding: 0 15px;
		}
	}

	@media (min-width: 768px) {
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