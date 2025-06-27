export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Captain America Shield T-Shirt",
    price: 1299,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Marvel",
    description: "Premium quality t-shirt featuring Captain America's iconic shield design",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "White"]
  },
  {
    id: 2,
    name: "Spider-Man Web T-Shirt",
    price: 1199,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Marvel",
    description: "Amazing Spider-Man web pattern design on premium cotton t-shirt",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Black", "Blue"]
  },
  {
    id: 3,
    name: "Batman Dark Knight T-Shirt",
    price: 1399,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "DC",
    description: "Dark Knight rises with this epic Batman logo t-shirt",
    rating: 4.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Dark Blue"]
  },
  {
    id: 4,
    name: "Superman Logo T-Shirt",
    price: 1249,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "DC",
    description: "Classic Superman 'S' logo on high-quality cotton t-shirt",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Red", "Black"]
  },
  {
    id: 5,
    name: "Naruto Hokage T-Shirt",
    price: 1149,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Anime",
    description: "Believe it! Naruto Hokage symbol on premium anime t-shirt",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Orange", "Black", "White"]
  },
  {
    id: 6,
    name: "Goku Ultra Instinct T-Shirt",
    price: 1349,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Anime",
    description: "Dragon Ball Super Goku Ultra Instinct design t-shirt",
    rating: 4.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"]
  },
  {
    id: 7,
    name: "One Piece Luffy T-Shirt",
    price: 1199,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Anime",
    description: "Monkey D. Luffy Straw Hat Pirates captain t-shirt design",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Yellow", "Black"]
  },
  {
    id: 8,
    name: "Iron Man Arc Reactor T-Shirt",
    price: 1399,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Marvel",
    description: "Tony Stark's Arc Reactor glowing design on premium t-shirt",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Red", "Gold"]
  },
  {
    id: 9,
    name: "Thor Mjolnir T-Shirt",
    price: 1299,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Marvel",
    description: "Worthy of Mjolnir! Thor's hammer design t-shirt",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Blue", "Black"]
  },
  {
    id: 10,
    name: "Incredible Hulk Smash T-Shirt",
    price: 1249,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Marvel",
    description: "Hulk Smash! Green giant design on comfort fit t-shirt",
    rating: 4.7,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Black", "Gray"]
  },
  {
    id: 11,
    name: "Wonder Woman Symbol T-Shirt",
    price: 1199,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "DC",
    description: "Amazonian warrior Wonder Woman logo design t-shirt",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Gold", "Blue"]
  },
  {
    id: 12,
    name: "Attack on Titan Scout T-Shirt",
    price: 1349,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "Anime",
    description: "Survey Corps Wings of Freedom emblem t-shirt design",
    rating: 4.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Brown", "Black"]
  }
];

export const categories = [
  { name: "Marvel", count: 5 },
  { name: "DC", count: 3 },
  { name: "Anime", count: 4 }
];