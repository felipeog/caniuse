<script>
	import { page } from '$app/stores';
	import { FEATURES } from '../../consts';
	import MarkdownParser from '../../components/MarkdownParser.svelte';

	let slug = $page.params.slug;
	let feature = FEATURES[slug];

	delete feature.stats;
</script>

<svelte:head>
	<title>Caniuse | {feature.title}</title>
</svelte:head>

<main class="card mt-4">
	<header class="card-header d-flex align-items-center">
		<h1 class="m-0 me-4">{feature.title}</h1>

		{#each feature.categories as category}
			<span class="badge text-bg-primary me-2">{category}</span>
		{/each}
	</header>

	<section class="card-body">
		<article>
			<h1 class="fs-3">Usage</h1>

			<table class="table">
				<thead>
					<tr>
						<th scope="col">Status</th>
						<th scope="col">Supported</th>
						<th scope="col">Partially supported</th>
						<th scope="col">Total</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<!-- TODO: get status label -->
						<td>{feature.status}</td>
						<td>{feature.usage_perc_y}%</td>
						<td>{feature.usage_perc_a}%</td>
						<td>{feature.usage_perc_y + feature.usage_perc_a}%</td>
					</tr>
				</tbody>
			</table>
		</article>

		<article class="mt-4">
			<h1 class="fs-3">Description</h1>

			<p>
				<a href={feature.spec} target="_blank" rel="noopener noreferrer">
					{feature.title} spec
				</a>
			</p>

			<MarkdownParser markdown={feature.description} />
		</article>

		<article class="mt-4">
			<h1 class="fs-3">Notes</h1>

			{#if !feature.notes}
				<p>No notes.</p>
			{:else}
				<MarkdownParser markdown={feature.notes} />
			{/if}
		</article>

		<article class="mt-4">
			<h1 class="fs-3">Links</h1>

			{#if !feature.links.length}
				<p>No links.</p>
			{:else}
				<ol class="list-group list-group-numbered">
					{#each feature.links as link}
						<li class="list-group-item">
							<a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
						</li>
					{/each}
				</ol>
			{/if}
		</article>

		<article class="mt-4">
			<h1 class="fs-3">Keywords</h1>

			{#if !feature.keywords}
				<p>No keywords.</p>
			{:else}
				<ul class="p-0 m-0">
					{#each feature.keywords.split(',') as keyword}
						<li class="badge text-bg-primary me-2">{keyword}</li>
					{/each}
				</ul>
			{/if}
		</article>

		<!-- <pre>{JSON.stringify(feature, null, 2)}</pre> -->
	</section>
</main>
