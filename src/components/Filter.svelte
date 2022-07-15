<script>
  import { filtersStore } from "../stores/filters";
  import { CATEGORIES, STATUSES } from "../consts";

  function handleSelectChange(event) {
    filtersStore.setFilter({
      name: event.target.name,
      value: event.target.value,
    });
  }
</script>

<section>
  <label for="category">Category</label>
  <select name="category" id="category" on:change={handleSelectChange}>
    {#each Object.entries(CATEGORIES) as [key, value]}
      <option {value} selected={$filtersStore.category === value}>{key}</option>
    {/each}
  </select>

  <br />
  <br />

  <label for="status">Status</label>
  <select name="status" id="status" on:change={handleSelectChange}>
    {#each Object.entries(STATUSES) as [key, value]}
      <option {value} selected={$filtersStore.status === value}>{key}</option>
    {/each}
  </select>
</section>
