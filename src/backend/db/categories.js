import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k9u8zgw0/perfume/u/f/p/50-edge-perfume-eau-de-parfum-wild-stone-men-original-imafrjh8pzpqzyhg.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "women",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kk5rgy80/perfume/g/e/4/scent-beautiful-secret-eau-de-parfum-fogg-women-original-imafzk92ugzy5drh.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "men & women",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kzegk280/perfume/b/p/r/60-fire-long-lasting-perfume-eau-de-parfum-the-man-company-men-original-imagbffzzsvhs4hu.jpeg",
  },
];
