let date = new Date();
let min = date.getDate() + 4;
let max = 30;

const products = [
  {
    id: 1,
    imgSrc:
      "https://m.media-amazon.com/images/I/51zhN0q4x4L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Crush It On LinkedIn",
    author: "Ishan Sharma",
    original_price: 499,
    current_price: Math.ceil(499 - (499 * 45) / 100),
    discount_percentage: 45,
    reviews: {
      count: 1234,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 2,
    imgSrc:
      "https://m.media-amazon.com/images/I/81juPhKSZJL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Smartphone",
    author: "Samsung",
    original_price: 14999,
    current_price: Math.ceil(14999 - (14999 * 50) / 100),
    discount_percentage: 50,
    reviews: {
      count: 3456,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 3,
    imgSrc:
      "https://m.media-amazon.com/images/I/71TcPkUibVL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Laptop",
    author: "Dell",
    original_price: 49999,
    current_price: Math.ceil(49999 - (49999 * 25) / 100),
    discount_percentage: 25,
    reviews: {
      count: 789,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 4,
    imgSrc:
      "https://m.media-amazon.com/images/I/41JACWT-wWL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Wireless Headphones",
    author: "Sony",
    original_price: 2999,
    current_price: Math.ceil(2999 - (2999 * 30) / 100),
    discount_percentage: 30,
    reviews: {
      count: 2345,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 5,
    imgSrc:
      "https://m.media-amazon.com/images/I/51dxAt33J6L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Men's T-Shirt",
    author: "Redtape",
    original_price: 499,
    current_price: Math.ceil(499 - (499 * 35) / 100),
    discount_percentage: 35,
    reviews: {
      count: 123,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 6,
    imgSrc:
      "https://m.media-amazon.com/images/I/515RkD2D5+L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Running Shoes",
    author: "Nike",
    original_price: 2999,
    current_price: Math.ceil(2999 - (2999 * 40) / 100),
    discount_percentage: 40,
    reviews: {
      count: 567,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 7,
    imgSrc:
      "https://m.media-amazon.com/images/I/61HlyhqHqrL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Smart Watch",
    author: "Samsung",
    original_price: 9999,
    current_price: Math.ceil(9999 - (9999 * 50) / 100),
    discount_percentage: 50,
    reviews: {
      count: 891,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 8,
    imgSrc:
      "https://m.media-amazon.com/images/I/61eI4on7DhL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Blender",
    author: "Philips",
    original_price: 2499,
    current_price: Math.ceil(2499 - (2499 * 80) / 100),
    discount_percentage: 80,
    reviews: {
      count: 1234,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 9,
    imgSrc:
      "https://m.media-amazon.com/images/I/61-yhe06tyL._AC_UL480_FMwebp_QL65_.jpg",
    title: "DSLR Camera",
    author: "Sony",
    original_price: 39999,
    current_price: Math.ceil(39999 - (39999 * 70) / 100),
    discount_percentage: 70,
    reviews: {
      count: 345,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 10,
    imgSrc:
      "https://m.media-amazon.com/images/I/81Ahql+fd5L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Microwave Oven",
    author: "LG",
    original_price: 7999,
    current_price: Math.ceil(7999 - (7999 * 60) / 100),
    discount_percentage: 60,
    reviews: {
      count: 789,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 11,
    imgSrc:
      "https://m.media-amazon.com/images/I/71bguGWvhZL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Laptop Backpack",
    author: "Skybags",
    original_price: 1499,
    current_price: Math.ceil(1499 - (1499 * 15) / 100),
    discount_percentage: 15,
    reviews: {
      count: 567,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 12,
    imgSrc:
      "https://m.media-amazon.com/images/I/41c9btM-x+L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Sunglasses",
    author: "Lenskart",
    original_price: 1999,
    current_price: Math.ceil(1999 - (1999 * 30) / 100),
    discount_percentage: 30,
    reviews: {
      count: 234,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 13,
    imgSrc:
      "https://m.media-amazon.com/images/I/71zDU8JBLZL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Smart Speaker",
    author: "Jbl",
    original_price: 4999,
    current_price: Math.ceil(4999 - (4999 * 45) / 100),
    discount_percentage: 45,
    reviews: {
      count: 1234,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 14,
    imgSrc:
      "https://m.media-amazon.com/images/I/61J1NUF2sKL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Tablet",
    author: "Samsung",
    original_price: 19999,
    current_price: Math.ceil(19999 - (19999 * 35) / 100),
    discount_percentage: 35,
    reviews: {
      count: 456,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 15,
    imgSrc:
      "https://m.media-amazon.com/images/I/61qx5TEKFdL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Vacuum Cleaner",
    author: "Philips",
    original_price: 8999,
    current_price: Math.ceil(8999 - (8999 * 40) / 100),
    discount_percentage: 40,
    reviews: {
      count: 789,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 16,
    imgSrc:
      "https://m.media-amazon.com/images/I/51G96nyJlOL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Air Conditioner",
    author: "Voltas",
    original_price: 29999,
    current_price: Math.ceil(29999 - (29999 * 50) / 100),
    discount_percentage: 50,
    reviews: {
      count: 345,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 17,
    imgSrc:
      "https://m.media-amazon.com/images/I/71clXIljOfL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Refrigerator",
    author: "Samsung",
    original_price: 19999,
    current_price: Math.ceil(19999 - (19999 * 30) / 100),
    discount_percentage: 30,
    reviews: {
      count: 678,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 18,
    imgSrc:
      "https://m.media-amazon.com/images/I/713YzKrhSXL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Washing Machine",
    author: "Hyundai",
    original_price: 14999,
    current_price: Math.ceil(14999 - (14999 * 25) / 100),
    discount_percentage: 25,
    reviews: {
      count: 234,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 19,
    imgSrc:
      "https://m.media-amazon.com/images/I/61C53PLh9qL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Gaming Console",
    author: "Ps5",
    original_price: 29999,
    current_price: Math.ceil(29999 - (29999 * 35) / 100),
    discount_percentage: 35,
    reviews: {
      count: 1234,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
  {
    id: 20,
    imgSrc:
      "https://m.media-amazon.com/images/I/61sSwX2mo+L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Fitness Tracker",
    author: "Samsung",
    original_price: 3999,
    current_price: Math.ceil(3999 - (3999 * 35) / 100),
    discount_percentage: 35,
    reviews: {
      count: 345,
      stars: 4.5,
    },
    delivery_date: `${
      Math.floor(Math.random() * (max - min + 1)) + min
    } June ${new Date().getFullYear()}`,
  },
];

export default products;
