<script>
  import { filtersStore } from "../stores/filters";

  let value = $filtersStore.search ?? "";

  function handleFormSubmit() {
    filtersStore.setFilter({
      name: "search",
      value,
    });
  }
</script>

<section>
  <form on:submit|preventDefault={handleFormSubmit}>
    <label for="search">Search</label>
    <input bind:value type="text" name="search" id="search" />
  </form>
</section>
