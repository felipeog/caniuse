<script>
	import { page } from '$app/stores';
	import { FEATURES } from '../../consts';

	let slug = $page.params.slug;
	let feature = FEATURES[slug];
</script>

<svelte:head>
	<title>Caniuse | {feature.title}</title>
</svelte:head>

<!-- TODO: crate layout -->
<h1>{feature.title}</h1>

<pre>{JSON.stringify(feature, null, 2)}</pre>
