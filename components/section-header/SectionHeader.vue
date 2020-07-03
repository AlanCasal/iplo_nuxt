<template>
	<header class="section-header">
		<h3 v-text="title"
			:style="{ color: text_color }"></h3>

		<div class="line"></div>
	</header>
</template>

<script>
	export default {
		props: {
			title: String,
			text_color: {
				type: String,
				default: 'black'
			},
		}
	}
</script>

<style scoped>
	h3 {
		font-family: 'Voltaire', sans-serif;
		padding-top: 70px;
		font-size  : 36px;
		font-weight: bold;
		text-transform: uppercase;
		text-align    : center;
		position      : relative;
		margin        : 0 0 15px 0;
	}

	.line {
		width           : 150px;
		height          : 1px;
		background-color: darkgray;
		margin          : 0 auto;
		margin-bottom   : 30px;
		position        : relative;
		z-index         : 1;
	}

	.line::after {
		content   : '';
		position  : relative;
		display   : block;
		width     : 40px;
		height    : 3px;
		background: var(--iplo-medred);
		bottom    : 1px;
		left      : calc(50% - 20px);
	}
</style>