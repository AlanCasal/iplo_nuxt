<template>
	<div></div>
</template>

<script>
    export default {
        name: "Scroll_c",
	    methods: {
		    handleScroll() {
			    if (window.scrollY > 0)
                    this.$emit("scrollPosition", window.scrollY);

			    else
			        this.$emit("scrollPosition", 0);
		    }
	    },

        mounted() {
	        window.addEventListener("scroll", this.handleScroll)
        },

        destroyed() {
	        window.addEventListener("scroll", this.handleScroll)
        },
    }
</script>

<style scoped>

</style>
