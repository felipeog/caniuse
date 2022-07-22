import { DATA } from './';

const formattedCategories = Object.entries(DATA.cats).reduce((acc, [key, value]) => {
	return {
		...acc,
		[key]: value.join(',')
	};
}, {});

const CATEGORIES = {
	All: '',
	...formattedCategories
};

export { CATEGORIES };
