import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "FOGG Scent Expressio 50ml Eau de Parfum - 50 ml  (For Men)",
    brand: "FOGG",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kpcy5jk0/perfume/h/b/p/scent-expressio-50ml-eau-de-parfum-fogg-men-original-imag3mfxhsgdubyx.jpeg",
    price: "399",
    discount: "45",
    category: "men",
    rating: 4.3,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "ENVY Combo Perfume For Men 60ML + 60ML Eau de Parfum - 120 ml  (For Men)",
    brand: "ENVY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k2tc1ow0/perfume/h/m/z/120-combo-perfume-for-men-60ml-60ml-eau-de-parfum-envy-men-women-original-imafm2rjfpucs4py.jpeg",
    price: "498",
    discount: "32",
    category: "men",
    rating: 3.8,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Wild Stone Edge Perfume Eau de Parfum - 50 ml (For Men)",
    brand: "WILD STONE",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k9u8zgw0/perfume/u/f/p/50-edge-perfume-eau-de-parfum-wild-stone-men-original-imafrjh8pzpqzyhg.jpeg",
    price: "399",
    discount: "33",
    category: "men",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "THE MAN COMPANY EDP For Men - Night - 60 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kz7bcsw0/perfume/y/o/k/60-edp-for-men-night-premium-fragrance-long-lasting-perfume-for-original-imagb9jgbrqjvx2g.jpeg",
    price: "749",
    discount: "21",
    category: "men & women",
    rating: 5,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "FOGG Scent Beautiful Secret Eau de Parfum - 100 ml (For Women)",
    brand: "FOGG",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kk5rgy80/perfume/g/e/4/scent-beautiful-secret-eau-de-parfum-fogg-women-original-imafzk92ugzy5drh.jpeg",
    price: "599",
    discount: "29",
    category: "women",
    rating: 4.1,
    inStock: true,
    fastDelivery: false,
  },

  {
    _id: uuid(),
    title: "ENVY Natural Spray Eau de Parfum - 60 ml (For Women)",
    brand: "ENVY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kkyc9zk0/perfume/8/e/u/white-eau-de-toilette-envy-men-original-imagy6h6cz8aqxw6.jpeg",
    price: "449",
    discount: "17",
    category: "women",
    rating: 3.9,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "FOGG Scent Gardenia 50ml Eau de Parfum - 50 ml (For Women)",
    brand: "FOGG",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kqo3onk0/perfume/b/p/q/scent-gardenia-50ml-eau-de-parfum-fogg-women-original-imag4mqszkf5fupz.jpeg",
    price: "699",
    discount: "25",
    category: "women",
    rating: 1.2,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "SKINN by TITAN Tales Ibiza Perfume Eau de Parfum - 100 ml (For Women)",
    brand: "SKINN",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kpodocw0/perfume/d/p/h/tales-ibiza-perfume-eau-de-parfum-skinn-by-titan-women-original-imag3urac4egkyuw.jpeg",
    price: "1595",
    discount: "25",
    category: "women",
    rating: 4.8,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Ajmal DIZA EDP 100 ml Eau de Parfum - 100 ml (For Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jnyxd3k0/perfume/a/h/y/100-diza-edp-100-ml-eau-de-parfum-ajmal-women-original-imafajbhcgzsbhpk.jpeg",
    price: "1250",
    discount: "40",
    category: "women",
    rating: 2.5,
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "THE MAN COMPANY Fire | Long Lasting Perfume| Eau de Parfum - 60 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kzegk280/perfume/b/p/r/60-fire-long-lasting-perfume-eau-de-parfum-the-man-company-men-original-imagbffzzsvhs4hu.jpeg",
    price: "749",
    discount: "34",
    category: "men & women",
    rating: 5,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "DENVER Dignity Eau de Parfum - 100 ml  (For Men & Women)",
    brand: "DENVER",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kx3l0nk0/perfume/r/b/a/100-dignity-eau-de-parfum-denver-men-women-original-imag9mmpttrn2qmu.jpeg",
    price: "499",
    discount: "18",
    category: "men & women",
    rating: 2.8,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "ENVY Combo Perfume For Men and Women 60ML + 60ML Eau de Parfum - 120 ml (For Men & Women)",
    brand: "ENVY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kkyc9zk0/perfume/k/f/d/combo-perfume-for-men-and-women-60ml-60ml-eau-de-parfum-envy-men-original-imagy6h6wyknzczt.jpeg",
    price: "599",
    discount: "32",
    category: "men & women",
    rating: 4,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Ajmal Prose EDP & Primitive Forest EDT + 4 Parfum Testers Eau de Parfum - 350 ml (For Men & Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kf5pzm80/perfume/t/6/w/350-prose-edp-primitive-forest-edt-4-parfum-testers-eau-de-original-imafvzkhrgktqrfb.jpeg?q=70",
    price: "2250",
    discount: "56",
    category: "men & women",
    rating: 5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "FOGG Scent Impressio Eau de Parfum - 100 ml (For Men)",
    brand: "FOGG",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kctf0cw0pkrrdj/personal-care/s/t/p/100-scent-impressio-fogg-original-imafty3b5fnh5fkg.jpeg?q=70",
    price: "500",
    discount: "36",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Ajmal Ascend & Neea EDP each 100ML & Neea EDP 20ML Pack of 3 (Total 220ML) for Men & Women + 2 Parfum Testers Perfume - 220 ml (For Men & Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/klscivk0/combo-kit/z/f/2/ascend-neea-edp-each-100ml-neea-edp-20ml-pack-of-3-total-220ml-original-imagyu5e7r3zdacp.jpeg?q=70",
    price: "3600",
    discount: "65",
    category: "men & women",
    rating: 4.6,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Wild Stone Edge and Ultra Sensual Perfume Combo for Men Eau de Parfum - 60 ml (For Men)",
    brand: "WILD STONE",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kbb49zk0/perfume/c/g/n/60-edge-and-ultra-sensual-perfume-combo-for-men-eau-de-parfum-original-imafszqjqythg3gh.jpeg?q=70",
    price: "498",
    discount: "40",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "SKINN by TITAN celeste Eau de Parfum - 50 ml (For Women)",
    brand: "SKINN",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kosxzm80/perfume/m/u/5/celeste-eau-de-parfum-skinn-by-titan-women-original-imag36mjwz9ex6yk.jpeg?q=70",
    price: "1895",
    discount: "32",
    category: "women",
    rating: 4.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "THE MAN COMPANY Ever Green Perfume Gift Set for Men Premium Body Spray Eau de Parfum - 100 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kz7bcsw0/perfume/l/l/v/100-ever-green-perfume-gift-set-for-men-premium-body-spray-eau-original-imagb9gbwzur6sk7.jpeg?q=70",
    price: "1848",
    discount: "35",
    category: "men & women",
    rating: 4.8,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Ajmal SENORA Eau de Parfum - 75 ml (For Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k0vbgy80/perfume/7/z/f/100-senora-perfume-maryaj-goldie-perfume-maryaj-m-for-her-original-imaeq64whug2enhm.jpeg?q=70",
    price: "2000",
    discount: "30",
    category: "women",
    rating: 4.4,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "DENVER Black Code Perfume Eau de Parfum - 60 ml  (For Men)",
    brand: "DENVER",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jyeq64w0/perfume/u/k/f/60-black-code-perfume-eau-de-parfum-denver-men-original-imafgnqkrf3ypryv.jpeg?q=70",
    price: "249",
    discount: "22",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
  },
];
