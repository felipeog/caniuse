<script>
	import ResultsCount from '../components/ResultsCount.svelte';
	import Filters from '../components/Filters.svelte';
	import Results from '../components/Results.svelte';
</script>

<svelte:head>
	<title>Caniuse</title>
</svelte:head>

<main>
	<Filters />
	<ResultsCount />
	<Results />
</main>
