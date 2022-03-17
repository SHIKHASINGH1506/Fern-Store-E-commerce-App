import { v4 as uuid } from "uuid";
import {
  ArecaPalm,
  Alovera,
  BetelLeaf,
  CalatheaFreddie,
  Leafy,
  MoneyPlant,
  RubberPlant,
  FiddleLeaf,
  SnakePlant,
  JadePlant,
  ChineseMoneyPlant,
  ZZ
} from '../../assets/index'; 

export const products = [
  {
    _id: uuid(),
    title: "Betel Leaf Plant",
    productType: "Indoor",
    rating: 4,
    price: 299,
    img: BetelLeaf,
    discountedPrice: 250,
    discountPercentage: '20%',
    categoryName: "Indoor",
  },
  {
    _id: uuid(),
    title: "Calathea Freddie",
    productType: "Indoor",
    rating: 5,
    price: 499,
    img: CalatheaFreddie,
    discountedPrice: 470,
    discountPercentage: '10%',
    categoryName: "Indoor",
  },
  {
    _id: uuid(),
    title: "Leafy Plant",
    productType: "Indoor",
    rating: 3,
    price: 399,
    img: Leafy,
    discountedPrice: 270,
    discountPercentage: '35%',
    categoryName: "Indoor",
  },
  {
    _id: uuid(),
    title: "ZZ Plant - Medium",
    productType: "Air Purifier",
    rating: 4,
    price: 599,
    img: ZZ,
    discountedPrice: 500,
    discountPercentage: '7%',
    categoryName: "Air Purifier",
  },
  {
    _id: uuid(),
    title: "Money Plant",
    productType: "Air Purifier",
    rating: 3,
    price: 299,
    img: MoneyPlant,
    discountedPrice: 270,
    discountPercentage: '10%',
    categoryName: "Air Purifier",
  },
  
  {
    _id: uuid(),
    title: "Rubber Plant",
    productType: "Air Purifier",
    rating: 4,
    price: 699,
    img: RubberPlant,
    discountedPrice: 680,
    discountPercentage: '4%',
    categoryName: "Air Purifier",
  },
  {
    _id: uuid(),
    title: "Fiddle Leaf Fig Plant",
    productType: "Low Maintenance",
    rating: 5,
    price: 1299,
    img: FiddleLeaf,
    discountedPrice: 1200,
    discountPercentage: '20%',
    categoryName: "Low Maintenance",
  },
  {
    _id: uuid(),
    title: "Aloe Blizzard Plant",
    productType:"Low Maintenance",
    rating: 3,
    price: 399,
    img: Alovera,
    discountedPrice: 380,
    discountPercentage: '12%',
    categoryName: "Low Maintenance",
  },
  {
    _id: uuid(),
    title: "Snake Plant",
    productType: "Low Maintenance",
    rating: 4,
    price: 599,
    img: SnakePlant,
    discountedPrice: 550,
    discountPercentage: '20%',
    categoryName: "Low Maintenance",
  },
  {
    _id: uuid(),
    title: "Jade Plant",
    productType: "Low Maintenance",
    rating: 4,
    price: 450,
    img: JadePlant,
    discountedPrice: 400,
    discountPercentage: '22%',
    categoryName: "Low Maintenance",
  },
  {
    _id: uuid(),
    title: "Chinese Money Plant",
    productType: "Indoor",
    rating: 3,
    price: 320,
    img: ChineseMoneyPlant,
    discountedPrice: 300,
    discountPercentage: '20%',
    categoryName: "Indoor",
  },
  {
    _id: uuid(),
    title: "Areca Palm Plant",
    productType: "Indoor",
    rating: 5,
    price: 690,
    img: ArecaPalm,
    discountedPrice: 670,
    discountPercentage: '18%',
    categoryName: "Indoor",
  },
  
];
