<script>
	import { resultsStore } from '../stores/results';

	let labels = {
		singular: 'feature',
		plural: 'features'
	};

	$: count = $resultsStore.length;
	$: label = count === 1 ? labels.singular : labels.plural;
</script>

<section class:no-border={count === 0}>
	<p>{count} {label} found</p>
</section>

<style>
	section {
		padding: var(--spacing_400);
		border-bottom: var(--layout_border);
	}

	section.no-border {
		border-bottom: none;
	}
</style>
