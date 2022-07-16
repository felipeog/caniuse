import { writable } from "svelte/store";
import { filtersStore } from "./";
import data from "../../data.json";

// @ts-ignore
const initialResults = Object.values(data.data);

const { subscribe, set, update } = writable(initialResults);

filtersStore.subscribe((store) => {
  let filteredResults = initialResults;

  if (store.category?.length) {
    // @ts-ignore
    const categories = store.category.split(",");

    filteredResults = filteredResults.filter((feature) => {
      return feature.categories.some((category) => {
        return categories.includes(category);
      });
    });
  }

  if (store.status?.length) {
    const status = store.status;

    filteredResults = filteredResults.filter((feature) => {
      return feature.status === status;
    });
  }

  if (store.search?.length) {
    const search = store.search;

    filteredResults = filteredResults.filter((feature) => {
      // @ts-ignore
      const formattedSearch = search.toLowerCase().normalize("NFC");
      const formattedTitle = feature.title.toLowerCase().normalize("NFC");

      return formattedTitle.includes(formattedSearch);
    });
  }

  set(filteredResults);
});

const resultsStore = {
  subscribe,
  set,
  update,
};

export { resultsStore };
