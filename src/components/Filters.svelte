<script>
  import { filtersStore } from "../stores/filters";
  import { CATEGORIES, STATUSES } from "../consts";

  let value = $filtersStore.search ?? "";

  $: {
    filtersStore.setFilter({
      name: "search",
      value,
    });
  }

  function handleSelectChange(event) {
    filtersStore.setFilter({
      name: event.target.name,
      value: event.target.value,
    });
  }
</script>

<section>
  <article>
    <label for="search">Search</label>

    <input bind:value type="text" name="search" id="search" />
  </article>

  <article>
    <label for="category">Category</label>

    <select name="category" id="category" on:change={handleSelectChange}>
      {#each Object.entries(CATEGORIES) as [key, value]}
        <option {value} selected={$filtersStore.category === value}
          >{key}</option
        >
      {/each}
    </select>
  </article>

  <article>
    <label for="status">Status</label>

    <select name="status" id="status" on:change={handleSelectChange}>
      {#each Object.entries(STATUSES) as [key, value]}
        <option {value} selected={$filtersStore.status === value}>{key}</option>
      {/each}
    </select>
  </article>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(3, 33.333%);
    border-bottom: var(--layout_border);
  }

  article {
    display: flex;
    flex-direction: column;
    padding: var(--spacing_400);
  }

  article:not(:last-child) {
    border-right: var(--layout_border);
  }

  label {
    margin-bottom: 0.6rem;
  }
</style>
