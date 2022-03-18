import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
  },
  {
    _id: uuid(),
    categoryName: "women",
  },
  {
    _id: uuid(),
    categoryName: "kids",
  },
];
