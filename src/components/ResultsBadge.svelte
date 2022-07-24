<script>
	import { resultsStore } from '../stores/results';

	let labels = {
		singular: 'feature',
		plural: 'features'
	};

	$: count = $resultsStore.length;
	$: label = count === 1 ? labels.singular : labels.plural;
</script>

<span class="badge text-bg-info">{count} {label} found</span>
