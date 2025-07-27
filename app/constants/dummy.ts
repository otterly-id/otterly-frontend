import type { KostCardProps } from "~/components/card/kost";

export const dummyHistory = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "2",
    title: "In varius ante nibh, id fringilla massa dignissim sit amet",
  },
  {
    id: "3",
    title:
      "Mauris euismod, purus quis rutrum pellentesque, justro augue sodales",
  },
  {
    id: "4",
    title: "Quisque id bibendum velit",
  },
];

export const allKosts = [
  {
    id: "1",
    imgSrc: "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg",
    name: "Kost Modern Cilandak",
    price: 1800000,
    location: "Jakarta",
    features: [
      "Wifi",
      "AC",
      "Private Bathroom",
      "Kitchen Access",
      "Security 24/7",
      "Laundry",
    ],
    gender: "Mixed",
  },
  {
    id: "2",
    imgSrc: "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg",
    name: "Kost Putri Serpong",
    price: 1200000,
    location: "Tangerang",
    features: ["Wifi", "AC", "Shared Bathroom", "Laundry"],
    gender: "Woman",
  },
  {
    id: "3",
    imgSrc: "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg",
    name: "Kost Putra Gubeng",
    price: 950000,
    location: "Surabaya",
    features: ["Wifi", "Shared Bathroom", "TV", "Parking"],
    gender: "Man",
  },
  {
    id: "4",
    imgSrc: "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg",
    name: "Kost Exclusive Kemang",
    price: 2500000,
    location: "Jakarta",
    features: [
      "Wifi",
      "AC",
      "Private Bathroom",
      "Kitchen Access",
      "Security 24/7",
      "Swimming Pool",
      "Gym",
    ],
    gender: "Mixed",
  },
  {
    id: "5",
    imgSrc: "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg",
    name: "Kost Nyaman BSD",
    price: 1400000,
    location: "Tangerang",
    features: ["Wifi", "AC", "Private Bathroom", "Laundry", "Parking"],
    gender: "Man",
  },
  {
    id: "6",
    imgSrc: "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg",
    name: "Kost Mahasiswi ITS",
    price: 1100000,
    location: "Surabaya",
    features: ["Wifi", "Shared Bathroom", "Kitchen Access", "Laundry"],
    gender: "Woman",
  },
] satisfies KostCardProps[];
