import data from "../../data.json";

// @ts-ignore
const formattedStatuses = Object.entries(data.statuses).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [value]: key,
    };
  },
  {}
);

const STATUSES = {
  All: "",
  ...formattedStatuses,
};

export { STATUSES };
