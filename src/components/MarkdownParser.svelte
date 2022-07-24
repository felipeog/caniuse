<script>
	import { browser } from '$app/env';
	import DOMPurify from 'dompurify';
	import { marked } from 'marked';

	export let markdown;
</script>

<div class={$$props.class}>
	{#if browser}
		{@html DOMPurify.sanitize(marked.parse(markdown))}
	{:else}
		<p class="placeholder-glow" aria-hidden="true">
			<span class="placeholder col-3" />
			<span class="placeholder col-2" />
			<span class="placeholder col-3" />

			<span class="placeholder col-4" />
			<span class="placeholder col-2" />
			<span class="placeholder col-3" />
		</p>
	{/if}
</div>
