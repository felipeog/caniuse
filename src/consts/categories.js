import data from "../../data.json";

// @ts-ignore
const formattedCategories = Object.entries(data.cats).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: value.join(","),
    };
  },
  {}
);

const CATEGORIES = {
  All: "",
  ...formattedCategories,
};

export { CATEGORIES };
