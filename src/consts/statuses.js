import { DATA } from './';

// @ts-ignore
const formattedStatuses = Object.entries(DATA.statuses).reduce((acc, [key, value]) => {
	return {
		...acc,
		[value]: key
	};
}, {});

const STATUSES = {
	All: '',
	...formattedStatuses
};

export { STATUSES };
