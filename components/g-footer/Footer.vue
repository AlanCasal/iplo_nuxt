<template>
	<footer class="wow animate__fadeInUp">
		<center>
			<p>
				Copyright &copy; {{year}}
				<span> | </span>
				Sitio desarrollado por 
				<a href="https://www.linkedin.com/in/alancasal/">Alan Casal</a>
				<span> | </span>
				Todos los derechos reservados
			</p>
		</center>
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
		padding: 10px 0;
		background-color: black;
	}

	span {
		color: var(--iplo-red);
	}

	p {
		font-family: Voltaire, sans-serif;
		color: white;
		margin: 0;
		font-size: 11px;
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