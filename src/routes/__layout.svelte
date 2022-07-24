<script>
	import '../css/reset.css';
	import '../css/variables.css';
	import '../css/base.css';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="wrapper">
	<Header />
	<slot />
</div>

<style>
	.wrapper {
		max-width: 960px;
		margin: var(--spacing_400) auto;
		border: var(--layout_border);
	}
</style>
