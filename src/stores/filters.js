import { writable } from 'svelte/store';
import { browser } from '$app/env';
import qs from 'qs';

const windowMock = {
	location: {
		origin: '',
		search: ''
	},
	history: {
		// @ts-ignore
		pushState: (state, unused, url) => {
			console.log({ state, unused, url });
		}
	}
};

// TODO: check if there is a better way to do this
// @ts-ignore
const filtersWindow = browser ? window : windowMock;

const initialFilters = filtersWindow.location.search.length
	? qs.parse(filtersWindow.location.search.slice(1))
	: {};

const { subscribe, set, update } = writable(initialFilters);

subscribe((store) => {
	const newFilters = qs.stringify(store);
	const search = newFilters.length ? `?${newFilters}` : '';

	filtersWindow.history.pushState({}, '', `${filtersWindow.location.origin}${search}`);
});

// @ts-ignore
function setFilter({ name, value }) {
	update((prevStore) => {
		if (!value.length) {
			delete prevStore[name];

			return prevStore;
		}

		return {
			...prevStore,
			[name]: value
		};
	});
}

const filtersStore = {
	subscribe,
	set,
	update,
	setFilter
};

export { filtersStore };
