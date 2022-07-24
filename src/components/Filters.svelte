<script>
	import { filtersStore } from '../stores/filters';
	import { CATEGORIES, STATUSES } from '../consts';

	let value = $filtersStore.search ?? '';

	$: {
		filtersStore.setFilter({
			name: 'search',
			value
		});
	}

	function handleSelectChange(event) {
		filtersStore.setFilter({
			name: event.target.name,
			value: event.target.value
		});
	}
</script>

<section class="mt-4">
	<div class="card">
		<div class="card-header">Filters</div>

		<div class="card-body">
			<div class="row">
				<article class="col-lg">
					<label class="form-label" for="search">Search</label>

					<input class="form-control" bind:value type="text" name="search" id="search" />
				</article>

				<article class="col-lg">
					<label class="form-label" for="category">Category</label>

					<select class="form-select" name="category" id="category" on:change={handleSelectChange}>
						{#each Object.entries(CATEGORIES) as [key, value]}
							<option {value} selected={$filtersStore.category === value}>{key}</option>
						{/each}
					</select>
				</article>

				<article class="col-lg">
					<label class="form-label" for="status">Status</label>

					<select class="form-select" name="status" id="status" on:change={handleSelectChange}>
						{#each Object.entries(STATUSES) as [key, value]}
							<option {value} selected={$filtersStore.status === value}>{key}</option>
						{/each}
					</select>
				</article>
			</div>
		</div>
	</div>
</section>
