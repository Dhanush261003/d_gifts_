"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

const products = [
  {
    id: 1,
    name: "4x4",
    image: "/frames/4x4.png", 
    price: "Rs.200",
    packingCharges: "Rs.20",
    category: "Frames"
  },
  {
    id: 2,
    name: "4x6",
    image: "/frames/4x6.jpg",
    price: "Rs.270",
    packingCharges: "Rs.20",
    category: "Frames"
  },
  {
    id: 3,
    name: "6x8",
    image: "/frames/6x8.png",
    price: "Rs.300",
    packingCharges: "Rs.25",
    category: "Frames"
  },
  {
    id: 4,
    name: "8x12",
    image: "/frames/8x12.png",
    price: "Rs.450",
    packingCharges: "Rs.25",
    category: "Frames"
  },
  {
    id: 5,
    name: "10x12",
    image: "/frames/10x12.png",
    price: "Rs.500",
    packingCharges: "Rs.30",
    category: "Frames"
  },
  {
    id: 6,
    name: "12x12",
    image: "/frames/12x12.png",
    price: "Rs.550",
    packingCharges: "Rs.30",
    category: "Frames"
  },
  {
    id: 7,
    name: "10x15",
    image: "/frames/10x15.jpg",
    price: "Rs.600",
    packingCharges: "Rs.30",
    category: "Frames"
  },

  {
    id: 8,
    name: "12x15",
    image: "/frames/12x15.png",
    price: "Rs.650",
    packingCharges: "Rs.30",
    category: "Frames"
  },

  {
    id: 9,
    name: "12x18",
    image: "/frames/12x18.png",
    price: "Rs.750",
    packingCharges: "Rs.30",
    category: "Frames"
  },
  {
    id: 10,
    name: "12x24",
    image: "/frames/12x24.png",
    price: "Rs.1000",
    packingCharges: "Rs.35",
    category: "Frames"
  },
  {
    id: 11,
    name: "16x20",
    image: "/frames/16x20.png",
    price: "Rs.1400",
    packingCharges: "Rs.35",
    category: "Frames"
  },
  {
    id: 12,
    name: "16x24",
    image: "/frames/16x24.png",
    price: "Rs.1500",
    packingCharges: "Rs.40",
    category: "Frames"
  },
  {
    id: 13,
    name: "18x24",
    image: "/frames/18x24.png",
    price: "Rs.1800",
    packingCharges: "Rs.40",
    category: "Frames"
  },
  {
    id: 14,
    name: "20x24",
    image: "/frames/20x24.png",
    price: "Rs.2000",
    packingCharges: "Rs.40",
    category: "Frames"
  },
  {
    id: 15,
    name: "20x30",
    image: "/frames/20x30.png",
    price: "Rs.2100",
    packingCharges: "Rs.45",
    category: "Frames"
  },
  {
    id: 16,
    name: "20x40",
    image: "/frames/20x40.png",
    price: "Rs.2600",
    packingCharges: "Rs.55",
    category: "Frames"
  },
  {
    id: 17,
    name: "24x36",
    image: "/frames/24x36.png",
    price: "Rs.2600",
    packingCharges: "Rs.55",
    category: "Frames"
  },

  //Toys list items


  // {
  //     id: 5,
  //     name: "",
  //     image: "",
  //     price: "Rs.",
  //     deliveryCharges: "Rs.",
  //     category: "Toys"
  //   },
  {
    id: 52,
    name: "Mini Light Dudu",
    image: "/toys/Mini Light Dudu.jpg",
    price: "Rs.120",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 53,
    name: "Mini Light Dinosaurs",
    image: "/toys/Mini Light Dinosaurs.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 54,
    name: "Mini Leaf Light Panda",
    image: "/toys/Mini Leaf Light Panda.jpg",
    price: "Rs.120",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 55,
    name: "Mini Sleeping Light Bear",
    image: "/toys/Mini Sleeping Light Bear.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 56,
    name: "Mini Sleeping Light Rabbit",
    image: "/toys/Mini Sleeping Light Rabbit.jpg",
    price: "Rs.110",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 57,
    name: "Mini Sleeping Panda",
    image: "/toys/Mini Sleeping Panda.jpg",
    price: "Rs.120",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 58,
    name: "Mini Sleeping Light Dog",
    image: "/toys/Mini Sleeping Light Dog.jpg",
    price: "Rs.110",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 59,
    name: "Mini Shirochan Light",
    image: "/toys/Mini Shinchan Light.jpg",
    price: "Rs.110",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 60,
    name: "Mini Cute Light Unicorn",
    image: "/toys/Mini Cute Light Unicorn.jpg",
    price: "Rs.110",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 61,
    name: "Mini Light Labubu",
    image: "/toys/Mini Light Labubu.jpg",
    price: "Rs.190",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 62,
    name: "Mini Flower Duck Light",
    image: "/toys/Mini Flower Duck Light.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 63,
    name: "Mini Light Panda(Silicon)",
    image: "/toys/Mini Color Changing Light Panda.jpg",
    price: "Rs.249",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 64,
    name: "Mini Light Sitting Dog",
    image: "/toys/Mini Light Sitting Dog.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 65,
    name: "Mini Color Changing Light Stitch",
    image: "/toys/Mini Color Changing Light Stitch.jpg",
    price: "Rs.249",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 66,
    name: "Mini Light Chick(1)",
    image: "/toys/Mini Light Chick(1).jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 67,
    name: "Mini Light Chick(2)",
    image: "/toys/Mini Light Chick(2).jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 68,
    name: "Mini Light Duck",
    image: "/toys/Mini Light Duck.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 69,
    name: "Mini Light Pochacoo Dog",
    image: "/toys/Mini Light Pochacoo Dog.jpg",
    price: "Rs.110",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 70,
    name: "Mini Singing Rabbit",
    image: "/toys/Mini Singing Rabbit.jpg",
    price: "Rs.120",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 71,
    name: "Mini Sitting Panda",
    image: "/toys/Mini Sitting Panda.jpg",
    price: "Rs.120",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 72,
    name: "Mini Light Ostrich",
    image: "/toys/Mini Light Ostrich.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 73,
    name: "Mini Heart Holding Panda",
    image: "/toys/Mini Heart Holding Panda.jpg",
    price: "Rs.149",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 74,
    name: "Mini Light Kuromi",
    image: "/toys/Mini Light Kuromi.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 75,
    name: "Mini Light Fox",
    image: "/toys/Mini Light Fox.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 76,
    name: "Mini Light Bear",
    image: "/toys/Mini Light Bear.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },

  //77,78
  {
    id: 79,
    name: "Unicorn Light",
    image: "/toys/Unicorn Light.jpg",
    price: "Rs.370",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 80,
    name: "Sitting Rabbit",
    image: "/toys/Sitting Rabbit.jpg",
    price: "Rs.549",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 81,
    name: "Sleeping Panda",
    image: "/toys/Sleeping Panda.jpg",
    price: "Rs.450",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 82,
    name: "Sitting Chick",
    image: "/toys/Sitting Chick.jpg",
    price: "Rs.499",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 83,
    name: "Light Panda",
    image: "/toys/Light Panda.jpg",
    price: "Rs.399",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 84,
    name: "Dancing Light Octopus",
    image: "/toys/Dancing Light Octopus.jpg",
    price: "Rs.899",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 85,
    name: "Shinchan Light Lamp(1)",
    image: "/toys/Shinchan Light Lamp(1).jpg",
    price: "Rs.299",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 86,
    name: "Shinchan Light Lamp(2)",
    image: "/toys/Shinchan Light Lamp(2).jpg",
    price: "Rs.299",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 87,
    name: "Unicorn Desk Lamp",
    image: "/toys/Unicorn Desk Lamp.jpg",
    price: "Rs.299",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 88,
    name: "Desk Panda Lamp",
    image: "/toys/Desk Panda Lamp.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 89,
    name: "Naruto Miniature",
    image: "/toys/Naruto Miniature.jpg",
    price: "Rs.449",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 90,
    name: "Kakashi Hatake Miniature",
    image: "/toys/Kakashi Hatake Miniature.jpg",
    price: "Rs.449",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 91,
    name: "Shinchan Mobile Holder",
    image: "/toys/Shinchan Mobile Holder.jpg",
    price: "Rs.200",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 92,
    name: "Cycle Shinchan",
    image: "/toys/Cycle Shinchan.jpg",
    price: "Rs.349",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 93,
    name: "Dancing Shinchan",
    image: "/toys/Dancing Shinchan.jpg",
    price: "Rs.349",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 94,
    name: "Crying Shinchan",
    image: "/toys/Crying Shinchan.jpg",
    price: "Rs.299",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 95,
    name: "Crawling Kitty",
    image: "/toys/Crawling Kitty.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 96,
    name: "Crawling Kuromi",
    image: "/toys/Crawling Kuromi.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 97,
    name: "Crawling Bear",
    image: "/toys/Crawling Bear.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 98,
    name: "Crawling Shinchan",
    image: "/toys/Crawling Shinchan.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 99,
    name: "Crawling Pikachu",
    image: "/toys/Crawling Pikachu.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 100,
    name: "Cute Toys",
    image: "/toys/Cute Toys.jpg",
    price: "Rs.220",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 101,
    name: "Acralic Photo Keychain",
    image: "/toys/Acralic Photo Keychain.jpg",
    price: "Rs.179",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 102,
    name: "Open Heart Keychain",
    image: "/toys/Open Heart Keychain.jpg",
    price: "Rs.249",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 103,
    name: "Busket Dog Keychain",
    image: "/toys/Busket Dog Keychain.jpg",
    price: "Rs.49",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 104,
    name: "Spotify Keychain",
    image: "/toys/Spotify Keychain.jpg",
    price: "Rs.199",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 105,
    name: "Car Keychain",
    image: "/toys/Car Keychain.jpg",
    price: "Rs.39",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 106,
    name: "Leather Pouch Keychain",
    image: "/toys/Leather Pouch Keychain.jpg",
    price: "Rs.199",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 107,
    name: "Wool Pouch Keychain",
    image: "/toys/Wool Pouch Keychain.jpg",
    price: "Rs.199",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 108,
    name: "Book Keychain",
    image: "/toys/Book Keychain.jpg",
    price: "Rs.299",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 109,
    name: "Recorder Keychain",
    image: "/toys/Recorder Keychain.jpg",
    price: "Rs.249",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 110,
    name: "Projector Keychain",
    image: "/toys/Projector Keychain.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 111,
    name: "Labubu Keychain",
    image: "/toys/Labubu Keychain.jpg",
    price: "Rs.249",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 112,
    name: "Areoplane Keychain",
    image: "/toys/Areoplane Keychain.jpg",
    price: "Rs.249",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 113,
    name: "Face Changing Shinchan Keychain",
    image: "/toys/Face Changing Shinchan Keychain.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 114,
    name: "Face Changing Spiderman Keychain",
    image: "/toys/Face Changing Spiderman Keychain.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 115,
    name: "Face Changing Cute Girl Keychain",
    image: "/toys/Face Changing Cute Girl Keychain.jpg",
    price: "Rs.99",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 116,
    name: "Shinchan Keychain",
    image: "/toys/Shinchan Keychain.jpg",
    price: "Rs.220",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 117,
    name: "Cute Sleeping Cat",
    image: "/toys/Cute Sleeping Cat.jpg",
    price: "Rs.249",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
  {
    id: 118,
    name: "Breathing Teddy",
    image: "/toys/Breathing Teddy.jpg",
    price: "Rs.399",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Toys"
  },
///////////////////////////////////////////////////////////
  // {
  //   id: 119,
  //   name: "",
  //   image: "/toys/.jpg",
  //   price: "Rs.",
  //   packingCharges: "Rs.",
  //   deliveryCharges: "Rs.",
  //   category: "Toys"
  // },
  // {
  //   id: 120,
  //   name: "",
  //   image: "/toys/.jpg",
  //   price: "Rs.",
  //   packingCharges: "Rs.",
  //   deliveryCharges: "Rs.",
  //   category: "Toys"
  // },
  // {
  //   id: 121,
  //   name: "",
  //   image: "/toys/.jpg",
  //   price: "Rs.",
  //   packingCharges: "Rs.",
  //   deliveryCharges: "Rs.",
  //   category: "Toys"
  // },
  // {
  //   id: 122,
  //   name: "",
  //   image: "/toys/.jpg",
  //   price: "Rs.",
  //   packingCharges: "Rs.",
  //   deliveryCharges: "Rs.",
  //   category: "Toys"
  // },

///////////////////////////////////////////////

  {
    id: 200,
    name: "Magic Mirror (Small)",
    image: "/others/Magic Mirror (Small).jpg",
    price: "Rs.450",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 201,
    name: "Magic Mirror (Medium)",
    image: "/others/Magic Mirror (Medium).jpg",
    price: "Rs.550",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 202,
    name: "Magic Mirror (Large)",
    image: "/others/Magic Mirror (Large).jpg",
    price: "Rs.700",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 203,
    name: "Magic Mirror (E-Large)",
    image: "/others/Magic Mirror (E-Large).jpg",
    price: "Rs.1350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  
  {
    id: 204,
    name: "Crystal Moon Lamp",
    image: "/others/Crystal Moon Lamp.jpg",
    price: "Rs.900",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 205,
    name: "Gify LED Lamp",
    image: "/others/Gify LED Lamp.jpg",
    price: "Rs.900",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 206,
    name: "Kids Money Piggy Bank",
    image: "/others/Kids Money Piggy Bank.jpg",
    price: "Rs.380",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 207,
    name: "Money Bank",
    image: "/others/Money Bank.jpg",
    price: "Rs.550",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 208,
    name: "Heart Handle Magic Cup",
    image: "/others/Heart Handle Magic Cup.jpg",
    price: "Rs.430",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 209,
    name: "Metal LOVE Keychain",
    image: "/others/Metal LOVE Keychain.jpg",
    price: "Rs.230",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 210,
    name: "Mobile Stand Keychain",
    image: "/others/Mobile Stand Keychain.jpg",
    price: "Rs.200",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 211,
    name: "DUO Keychain",
    image: "/others/DUO Keychain.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 212,
    name: "Name Pendent With Design",
    image: "/others/Name Pendent With Design.jpg",
    price: "Rs.450",
    packingCharges:"Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 213,
    name: "Onyz Pendant",
    image: "/others/Onyz Pendant.jpg",
    price: "Rs.450",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 214,
    name: "Bar Pendant",
    image: "/others/Bar Pendant.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 215,
    name: "Eye Bracelet",
    image: "/others/Eye Bracelet.jpg",
    price: "Rs.450",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 216,
    name: "Wooden Bamboo Steel Water Bottle",
    image: "/others/Wooden Bamboo Steel Water Bottle.jpg",
    price: "Rs.700",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 217,
    name: "Sipper Bottle",
    image: "/others/Sipper Bottle.jpg",
    price: "Rs.600",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 218,
    name: "Cup Flask - Color Photo",
    image: "/others/Cup Flask - Color Photo.jpg",
    price: "Rs.700",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 219,
    name: "Dualis Cup Flask",
    image: "/others/Dualis Cup Flask.jpg",
    price: "Name & Photo - Rs.650 Name - Rs.600",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 220,
    name: "Photo Steel Mug",
    image: "/others/Photo Steel Mug.jpg",
    price: "Rs.430",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 221,
    name: "Steel Mug(1)",
    image: "/others/Steel Mug(1).jpg",
    price: "Rs.380",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 222,
    name: "Steel Mug(2)",
    image: "/others/Steel Mug(2).jpg",
    price: "Rs.380",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 223,
    name: "1L Water Bottle",
    image: "/others/1L Water Bottle.jpg",
    price: "Rs.499",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 224,
    name: "1L Water Bottle(1)",
    image: "/others/1L Water Bottle(1).jpg",
    price: "Rs.499",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 225,
    name: "Calendar Keychain",
    image: "/others/Calendar Keychain.jpg",
    price: "Rs.499",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 226,
    name: "Customised Bottle",
    image: "/others/Customised Bottle.jpg",
    price: "Rs.430",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  {
    id: 227,
    name: "Envelope Sketch Pendant",
    image: "/others/Envelope Sketch Pendant.jpg",
    price: "Rs.499",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 228,
    name: "Name Pendant",
    image: "/others/Name Pendant.jpg",
    price: "Rs.400",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 229,
    name: "Perl Necklace",
    image: "/others/Perl Necklace.jpg",
    price: "Rs.350",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Others"
  },
  {
    id: 230,
    name: "Customised Unisex Bellavita Perfumes",
    image: "/others/Customised Unisex Bellavita Perfumes.jpg",
    price: "Single/Set - Rs.400/800",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.70",
    category: "Others"
  },
  
  
  // Combo products
  {
    id: 401,
    name: "Advocate Combo",
    image: "/combo/Advocate Combo.jpg",
    price: "Rs.1750",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 402,
    name: "Doctor Combo",
    image: "/combo/Doctor Combo.jpg",
    price: "Rs.1650",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 403,
    name: "Atlantis Combo Set",
    image: "/combo/Atlantis Combo Set.jpg",
    price: "Rs.1100",
    deliveryCharges: "Rs.70",
    category: "Combo"
  },
  {
    id: 404,
    name: "Faux Wallet Color Photo Couple Combo",
    image: "/combo/Faux Wallet Color Photo Couple Combo.jpg",
    price: "Rs.950",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 405,
    name: "Gift Set",
    image: "/combo/Gift Set.jpg",
    price: "Rs.900",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 406,
    name: "Heart Metal Key Wallet 8.0 Combo",
    image: "/combo/Heart Metal Key Wallet 8.0 Combo.jpg",
    price: "Rs.950",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 407,
    name: "Men's Hammer",
    image: "/combo/Men's Hammer.jpg",
    price: "Rs.1800",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 408,
    name: "Men's Hamper(1)",
    image: "/combo/Men's Hamper(1).jpg",
    price: "Rs.1600",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 409,
    name: "Men's Hamper(2)",
    image: "/combo/Men's Hamper(2).jpg",
    price: "Rs.1250",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 410,
    name: "Men's Hamper(3)",
    image: "/combo/Men's Hamper(3).jpg",
    price: "Rs.2000",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 411,
    name: "Men's Hamper(4)",
    image: "/combo/Men's Hamper(4).jpg",
    price: "Rs.1600",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 412,
    name: "Nexon Artistic Combo(1)",
    image: "/combo/Nexon Artistic Combo(1).jpg",
    price: "Rs.750",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 413,
    name: "Nexon Artistic Combo(2)",
    image: "/combo/Nexon Artistic Combo(2).jpg",
    price: "Rs.750",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 414,
    name: "Nexon Leather Couple Combo",
    image: "/combo/Nexon Leather Couple Combo.jpg",
    price: "Rs.950",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 415,
    name: "Nexon Mini Combo",
    image: "/combo/Nexon Mini Combo.jpg",
    price: "Rs.700",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 416,
    name: "Artistic Dairy Combo 1.0",
    image: "/combo/Artistic Dairy Combo 1.0.jpg",
    price: "Rs.650",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 417,
    name: "Occasion Hamper",
    image: "/combo/Occasion Hamper.jpg",
    price: "Rs.2000",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 418,
    name: "Imported Leather 4 Piece Combo",
    image: "/combo/Imported Leather 4 Piece Combo.jpg",
    price: "Rs.1000",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 419,
    name: "Gold Flake Pen Keychain Combo",
    image: "/combo/Gold Flake Pen Keychain Combo.jpg",
    price: "Rs.380",
    deliveryCharges: "Rs.70",
    category: "Combo"
  },
  /*{
    id: 420,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 421,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 422,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 423,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 424,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 425,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 426,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 427,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 428,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 429,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
  {
    id: 430,
    name: "",
    image: "/combo/.jpg",
    price: "Rs.",
    packingCharges: "Rs.",
    deliveryCharges: "Rs.",
    category: "Combo"
  },
*/
];

const categories = ["All", "Frames", "Toys", "Combo", "Others"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Frames");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = activeTab === "All" ? products : products.filter(product => product.category === activeTab);

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "low-to-high") {
      filtered = filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace("Rs.", "").replace(",", ""));
        const priceB = parseInt(b.price.replace("Rs.", "").replace(",", ""));
        return priceA - priceB;
      });
    } else if (sortOrder === "high-to-low") {
      filtered = filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace("Rs.", "").replace(",", ""));
        const priceB = parseInt(b.price.replace("Rs.", "").replace(",", ""));
        return priceB - priceA;
      });
    }

    return filtered;
  }, [activeTab, searchTerm, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex justify-between items-center w-full md:w-auto">
              <div className="flex items-center">
                <Image
                  src="/d_gifts_ logo.png"
                  alt="D_GIFTS_ Logo"
                  width={24}
                  height={24}
                  className="mr-1 md:mr-2 md:w-[30px] md:h-[30px]"
                />
                <span className="text-lg md:text-xl font-bold text-gray-800">D_GIFTS_</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4 md:hidden">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Sort</option>
                  <option value="low-to-high">Low-High</option>
                  <option value="high-to-low">High-Low</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-gray-500 block w-24 p-1 ps-6 bg-neutral-secondary-medium border border-default-medium text-heading text-xs rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  />
                  <svg
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-1 rounded-md font-medium ${
                    activeTab === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4 md:justify-end w-full md:w-auto">
              <div className="hidden md:flex items-center space-x-4">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Sort by Price</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-gray-500 block w-full p-2 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:hidden space-x-4 py-2 border-t">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 py-1 text-sm rounded-md font-medium ${
                  activeTab === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="pt-24 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-stone-900 font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-slate-950 font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-1">Price: {product.price}</p>
                <p className="text-gray-600">Packing: {product.packingCharges}</p>
                <p className="text-gray-600">Delivery: {product.deliveryCharges}</p>
                <a
                  href={`https://wa.me/918124474699?text=Hello, I am interested in buying ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white w-full py-2 rounded mt-2 block text-center hover:bg-blue-600"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
