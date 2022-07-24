import { DATA } from './';

const FEATURES = Object.entries(DATA.data).reduce((acc, [key, value]) => {
	return {
		...acc,
		[key]: {
			id: key,
			...value
		}
	};
}, {});

export { FEATURES };
