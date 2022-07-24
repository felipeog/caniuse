<script>
	import { resultsStore } from '../stores/results';
	import ResultsBadge from './ResultsBadge.svelte';
</script>

<section class="mt-4">
	<div class="card">
		<div class="card-header">Results <ResultsBadge /></div>

		<ul class="list-group list-group-flush list-group-numbered">
			{#each $resultsStore as result, index}
				<li class="list-group-item d-flex">
					<div class="ms-2 text-break">
						<p class="fw-semibold m-0">
							<a href={`/feature/${result.id}`}>{result.title}</a>
						</p>

						<ul class="p-0 m-0 mt-2 d-flex gap-2">
							{#each result.categories as category}
								<li class="badge text-bg-primary">{category}</li>
							{/each}
						</ul>

						<p class="mt-2 mb-0">{result.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
