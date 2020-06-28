<template>
	<div>
		<scroll_c @scrollPosition="show_hide_scrollTop"/>

		<a href="" id="scrollTop" ref="scrollTop"
		   @click.prevent="go_to_top">
            <i class="material-icons">keyboard_arrow_up</i>
		</a>
	</div>
</template>

<script>
    import Scroll_c from "./Scroll_c";
    export default {
        components: {
            Scroll_c
        },

        name: "Scroll_top_c",

	    methods: {
            go_to_top() {
                $('body, html').animate({scrollTop: 0}, 500); // Scroll to top of body
            },

            show_hide_scrollTop(scrolled) {
                let $scrollTop = $('#scrollTop');
            	scrolled > 200
	                ? $scrollTop.fadeIn(200) // si bajó 50px +, show scrollTop
                    : $scrollTop.fadeOut(200); // si está en top ocultar flecha
            }
	    }
    }
</script>

<style scoped>
	#scrollTop {
		z-index: 3;
		position: fixed;
		bottom: 20px;
		right: 20px;
		background-color: rgba(0, 0, 0, .5);
		width: 50px;
		height: 50px;
		display: none;
		text-decoration: none;
		-webkit-border-radius: 35px;
		-moz-border-radius: 35px;
		border-radius: 35px;
		-webkit-transition: transform .3s ease-in-out 0s, color .3s ease-in-out 0s;
		-moz-transition: transform .3s ease-in-out 0s, color .3s ease-in-out 0s;
		-ms-transition: transform .3s ease-in-out 0s, color .3s ease-in-out 0s;
		-o-transition: transform .3s ease-in-out 0s, color .3s ease-in-out 0s;
		transition: transform .3s ease-in-out 0s, color .3s ease-in-out 0s, background-color .3s ease-in-out 0s;
	}
	#scrollTop i {
		color: #fff;
		margin: 0;
		position: relative;
		left: 6px;
		top: 5px;
		font-size: 2.7em;
		-webkit-transition: all 0.3s ease;
		-moz-transition: all 0.3s ease;
		-ms-transition: all 0.3s ease;
		-o-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}

	#scrollTop:hover {
		background: rgba(0, 0, 0, 0.9);
		-webkit-transition: transform .4s ease 0s;
		-moz-transition: transform .4s ease 0s;
		-ms-transition: transform .4s ease 0s;
		-o-transition: transform .4s ease 0s;
		transition: transform .4s ease 0s;
	}

	#scrollTop:hover i {
		color: var(--iplo-medred);
		top: 0;
	}

	@media (max-width: 599px) {
		#scrollTop {
			width: 40px;
			height: 40px;
		}

		#scrollTop i {
			font-size: 2em;
			left: 6px;
			top: 6px;
		}
	}

	@media (min-width: 600px) {
		#scrollTop {
			width: 50px;
			height: 50px;
		}

		#scrollTop i {
			font-size: 2.3em;
			left: 9px;
			top: 8px;
		}
	}

	@media (min-width: 1200px) {
		#scrollTop i {
			font-size: 2.3em;
			left: 7px;
			top: 8px;
		}
	}
</style>
