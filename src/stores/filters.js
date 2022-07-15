import { writable } from "svelte/store";
import qs from "qs";

const initialFilters = window.location.search.length
  ? qs.parse(window.location.search.slice(1))
  : {};

const { subscribe, set, update } = writable(initialFilters);

subscribe((store) => {
  const newFilters = qs.stringify(store);
  const search = newFilters.length ? `?${newFilters}` : "";

  window.history.pushState({}, "", `${window.location.origin}${search}`);
});

function setFilter({ name, value }) {
  update((prevStore) => {
    if (!value.length) {
      delete prevStore[name];

      return prevStore;
    }

    return {
      ...prevStore,
      [name]: value,
    };
  });
}

const filtersStore = {
  subscribe,
  set,
  update,
  setFilter,
};

export { filtersStore };
