<template>
	<div class="fixed-action-btn">
		<a @mouseenter="pulse = true"
			@mouseout="pulse = false"
			:class="pulse ? 'pulse' : ''"
			id="action-btn" class="btn-floating">
			<i class="large material-icons">thumb_up</i>
		</a>
		<ul>
			<li v-for="(red, key) of redes" :key="`red${key}`">
				<a :href="red.href"
					class="red-btn btn-floating">
					<img :src="red.src" :id="red.id" :alt="red.alt">
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted() {
			$(".fixed-action-btn").floatingActionButton({
				direction   : 'right',
				hoverEnabled: false,
			});
		},

		data: () => ({
			pulse: false
		}),

		computed: {
			redes() {
				return [
					{href: 'https://twitter.com/Lionar_St', id: 'tw', src: require('@/assets/img/social/tw.png'), alt: 'twitter'},
					{href: 'https://www.facebook.com/LagrimasBajoTierra/', id: 'fb', src: require('@/assets/img/social/fb2.png'), alt: 'facebook'},
					{href: 'https://www.instagram.com/lionar_stormrage/?hl=es-la', id: 'ig', src: require('@/assets/img/social/ig.png'), alt: 'ig'},
					{href: 'https://www.wattpad.com/user/LionarStormrage', id: 'wp', src: require('@/assets/img/social/wp.png'), alt: 'wattpad'},
				]
			}
		}
	};
</script>

<style scoped>
	.fixed-action-btn {
		width  : 50px;
		bottom : 20px;
		left   : 20px;
		z-index: 2;
	}

	#action-btn {
		width : 50px;
		height: 50px;
	}

	#action-btn,
	.red-btn {
		background-color: rgba(0, 0, 0, .5);
	}
	
	#action-btn:hover,
	.red-btn:hover {
		background-color: rgba(150, 0, 0, 1);
	}

	#action-btn i {
		margin  : 0;
		position: relative;
	}
	
	.red-btn {
		-webkit-transition: background-color 1.6s;
		-moz-transition   : background-color 1.6s;
		-ms-transition    : background-color 1.6s;
		-o-transition     : background-color 1.6s;
		transition        : background-color 1.6s;
	}

	#action-btn:hover,
	.red-btn:hover {
		-webkit-transition: background .5s;
		-moz-transition   : background .5s;
		-ms-transition    : background .5s;
		-o-transition     : background .5s;
		transition        : background .5s;
	}

	.red-btn img {
		filter: invert(97%) sepia(92%) saturate(1%) hue-rotate(297deg) brightness(105%) contrast(96%);
	}

	li {
		-webkit-transition: transform .5s;
		-moz-transition   : transform .5s;
		-ms-transition    : transform .5s;
		-o-transition     : transform .5s;
		transition        : transform .5s;
	}

	li:hover {
		z-index           : 2;
		transform         : scale(1.1);
		-webkit-transition: transform .2s;
		-moz-transition   : transform .2s;
		-ms-transition    : transform .2s;
		-o-transition     : transform .2s;
		transition        : transform .2s;
	}

	@media (max-width: 599px) {
		#action-btn {
			width: 40px;
			height: 40px;
		}

		#action-btn i {
			font-size: 20px;
		}

		.red-btn {
			width: 25px;
			height: 25px;
		}
		
		.red-btn img {
			width: 15px;
			margin-bottom: 4px;
			margin-left: 5px;
		}

		ul {
			left: 39px !important;
		}
	}

	@media (min-width: 600px) {
		#action-btn {
			width: 50px;
			height: 50px;
		}

		#action-btn i {
			font-size: 25px;
			top: 5px;
		}

		.red-btn {
			width: 35px;
			height: 35px;
		}

		.red-btn img {
			width: 20px;
			margin-top: 8px;
			margin-left: 8px;
		}

		ul {
			left: 53px !important;
		}
	}
</style>