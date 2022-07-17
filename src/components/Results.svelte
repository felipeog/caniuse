<script>
	import { resultsStore } from '../stores/results';

	$: rowsCount = Math.ceil($resultsStore.length / 3);
	$: lastRowFirstItemIndex = rowsCount * 3 - 3;
</script>

<section>
	{#each $resultsStore as result, index}
		{@const isInLastRow = index >= lastRowFirstItemIndex}

		<article class:no-border={isInLastRow}>
			<h1>
				<a href={`/feature/${result.id}`}>{result.title}</a>
			</h1>

			<p>{result.description}</p>
		</article>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	article {
		padding: var(--spacing_400);
		border: var(--layout_border);
		border-top: none;
		border-left: none;
		word-break: break-word;
	}

	article:nth-child(3n) {
		border-right: none;
	}

	article.no-border {
		border-bottom: none;
	}

	h1 {
		font-size: 1.2rem;
	}

	p {
		margin-top: 1rem;
	}
</style>
