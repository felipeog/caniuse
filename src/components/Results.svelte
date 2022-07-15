<script>
  import { resultsStore } from "../stores/results";

  $: count = $resultsStore.length;
</script>

<section>
  <p>{count} feature(s)</p>

  {#each $resultsStore as result}
    <p>{result.title}</p>
  {/each}
</section>
