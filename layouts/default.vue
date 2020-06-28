<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
	mounted() {
		new WOW().init();
	}
}
</script>

<style>

</style>
