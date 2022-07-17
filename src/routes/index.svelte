<script>
	import Header from '../components/Header.svelte';
	import ResultsCount from '../components/ResultsCount.svelte';
	import Filters from '../components/Filters.svelte';
	import Results from '../components/Results.svelte';
</script>

<svelte:head>
	<title>Caniuse</title>
</svelte:head>

<main>
	<Header />
	<Filters />
	<ResultsCount />
	<Results />
</main>

<style>
	main {
		max-width: 960px;
		margin: var(--spacing_400) auto;
		border: var(--layout_border);
	}
</style>
