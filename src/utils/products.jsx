import productImg01 from "../Images/off-white.webp";
import productImg02 from "../Images/off-white2.webp";
import productImg03 from "../Images/off-white3.jpeg";
// https://www.farfetch.com/nl/shopping/men/off-white/items.aspx?page=1&view=96&sort=3&category=136331

import productImg04 from "../Images/bur1.webp";
import productImg05 from "../Images/gucci1.jpeg";
import productImg06 from "../Images/gucci2.webp";
import productImg07 from "../Images/gucci3.webp";

// https://www.farfetch.com/nl/shopping/men/clothing-2/items.aspx?page=1&view=96&sort=3&category=136335

import productImg08 from "../Images/ferra1.jpeg";
import productImg09 from "../Images/gucci4.jpeg";
import productImg10 from "../Images/bur2.webp";

import hoodie01 from "../Images/amiri1.webp";
import hoodie02 from "../Images/off-whitehoodie.webp";
import hoodie03 from "../Images/bala2.webp";
import hoodie04 from "../Images/amiparis.jpeg";
import hoodie05 from "../Images/bala1.jpeg";
import hoodie06 from "../Images/burhoodie.webp";
import hoodie07 from "../Images/vetements.webp";

import shirt01 from "../Images/balashirt.webp";
import shirt02 from "../Images/pp.webp";
import shirt03 from "../Images/bape.jpeg";
import shirt04 from "../Images/dg.webp";

import denim01 from "../Images/amirij.jpeg";
import denim02 from "../Images/amirij2.jpeg";
import denim03 from "../Images/vetj.jpeg";
import denim04 from "../Images/bj.jpeg";

import logo1 from "../Images/offlogo.png";
import logo2 from "../Images/blogo.png";
import logo3 from "../Images/guccilogo.png";
import logo4 from "../Images/burlogo.png";

import { IonIcon } from '@ionic/react';
import { car, card, shieldHalfOutline, cash } from 'ionicons/icons';

export const SliderData = [
  {
      id: 1,
      title: "Exclusive Off-White Offer: Get 10% Off Your First Purchase!",
      desc: "Elevate your style with Off-White's signature streetwear. Discover iconic designs and unique details.",
      cover: logo1,
  },
  {
      id: 2,
      title: "Limited Time Offer: 10% Off Balenciaga Favorites!",
      desc: "Indulge in the luxury of Balenciaga's avant-garde fashion. Experience unparalleled craftsmanship and innovation.",
      cover: logo2,
  },
  {
      id: 3,
      title: "Welcome to Gucci: Enjoy 10% Off Your First Order!",
      desc: "Step into the world of Gucci and embrace Italian elegance. Explore timeless pieces and iconic motifs.",
      cover: logo3,
  },
  {
      id: 4,
      title: "Unlock 10% Off Burberry Essentials Today!",
      desc: "Discover the epitome of British luxury with Burberry's heritage-inspired collections. Experience classic style with a modern twist.",
      cover: logo4,
  },
];


export const serviceData = [
  {
    icon: <IonIcon icon={car} />,
    title: "Free Shipping",
    subtitle: "Enjoy free, fast, and reliable shipping on all orders.",
    bg: "#fdefe6",
  },
  {
    icon: <IonIcon icon={card} />,
    title: "Safe Payment",
    subtitle: "Shop with confidence using our secure payment methods.",
    bg: "#ceebe9",
  },
  {
    icon: <IonIcon icon={shieldHalfOutline} />,
    title: "Secure Payment",
    subtitle: "Your data is encrypted and protected for a worry-free shopping experience.",
    bg: "#e2f2b2",
  },
  {
    icon: <IonIcon icon={cash} />,
    title: "Money Back Guarantee",
    subtitle: "Not satisfied? Get a hassle-free refund within 30 days.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Off-White ",
    imgUrl: productImg01,
    category: "shirt",
    price: 639,
    discount:30,
    shortDesc:
      "Bandana Vacation short-sleeve shirt",
    description:
      "Bandana Vacation short-sleeve shirt",
    reviews: [
      {
        rating: 4.7,
        text: "I had an issue with my order, but the customer service team was quick to respond and resolved it efficiently. Excellent service!",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Off-WHite ",
    imgUrl: productImg02,
    category: "shirt",
    price: 695,
    discount:20,
    shortDesc:
      "bandana-print satin shirt",
    description:
      "Made in Italy, this satin shirt by Off-White offers a relaxed silhouette made unique with a bandana-style print with skyline illustrations.",
    reviews: [
      {
        rating: 4.8,
        text: "This is the epitome of sophistication. The design is sleek and modern, and the attention to detail is impressive.",
      },
      {
        rating: 4.8,
        text: "I had an issue with my order, but the customer service team was quick to respond and resolved it efficiently. Excellent service!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Ferragamo",
    imgUrl: productImg08,
    category: "coat",
    price: 7000,
    discount:15,
    shortDesc:
      "single-breasted leather coat",
    description:
      "single-breasted leather coat.Made in Italy ",
    reviews: [
      {
        rating: 4.6,
        text: "The package arrived earlier than expected, and the item was carefully packaged to ensure it arrived in pristine condition. Very impressed with the shipping process.",
      },
      {
        rating: 4.9,
        text: "I had an issue with my order, but the customer service team was quick to respond and resolved it efficiently. Excellent service!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Gucci",
    imgUrl: productImg09,
    category: "coat",
    price: 4446,
    discount:35,
    shortDesc:
      "GG-pattern single-breasted coat",
    description:
      "Sand beige wool-silk blend monogram pattern classic collar front button fastening long sleeves straight hem",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Balenciaga",
    imgUrl: hoodie03,
    category: "hoodie",
    price: 1100,
    discount:10,
    shortDesc:
      "Tape Type logo cotton hoodie",
    description:
      "Balenciaga displays its streetwear inspiration with this hoodie, cut to a relaxed silhouette. This piece features a logo print at the front and rear that takes the form of masking tape.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "AMI Paris",
    imgUrl:hoodie04,
    category: "hoodie",
    price: 440,
    discount:5,
    shortDesc:
      "logo-intarsia knit hoodie",
    description:
      "AMI Paris' signature Ami de Coeur logo, translating as 'Ami of hearts', is a reinterpretation of the ace of hearts, expressing the brand's playful nature. Spun from soft virgin wool, this fresh white knit hoodie features the motif at the chest in a vibrant red intarsia-knit pattern.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "14",
    productName: "VETEMENTS",
    imgUrl:hoodie07,
    category: "hoodie",
    price: 840,
    discount:5,
    shortDesc:
      "logo-print hoodie",
    description:
      "Rendered in black, this limited edition hoodie by Vetements displays the luxury streetwear brand's affinity for oversized silhouettes.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Off-White ",
    imgUrl: productImg01,
    category: "shirt",
    price: 639,
    discount:30,
    shortDesc:
      "Bandana Vacation short-sleeve shirt",
    description:
      "Bandana Vacation short-sleeve shirt",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Off-WHite ",
    imgUrl: productImg02,
    category: "shirt",
    price: 695,
    discount:20,
    shortDesc:
      "bandana-print satin shirt",
    description:
      "Made in Italy, this satin shirt by Off-White offers a relaxed silhouette made unique with a bandana-style print with skyline illustrations.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Off-White",
    imgUrl: productImg03,
    category: "shirt",
    price: 1495,
    shortDesc:
      "trompe-l'œil-print denim shirt",
    description:
      "Off-White's propensity for pushing design boundaries is plain to see with this shirt. Cut from denim washed in a dark blue hue, it's accented with a trompe-l'œil-print depicting an x-ray scan.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Off-WHite ",
    imgUrl: productImg02,
    category: "shirt",
    price: 695,
    discount:20,
    shortDesc:
      "bandana-print satin shirt",
    description:
      "Made in Italy, this satin shirt by Off-White offers a relaxed silhouette made unique with a bandana-style print with skyline illustrations.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Burberry",
    imgUrl: productImg04,
    category: "jacket",
    price: 995,
    shortDesc:
      "Reversible Vintage Check jacket",
    description:
      "Reversible Vintage Check jacket. You change your mind like the weather. That's why you need the option for an immediate outfit change should you feel the urgent need. Opt for this reversible hooded jacket from Burberry and choose between the iconic Vintage Check and plain black with the Horseferry logo patch to the front. ",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Gucci",
    imgUrl: productImg05,
    category: "jacket",
    price: 1963,
    shortDesc:
      "GG Supreme hooded jacket",
    description:
      "GG Supreme hooded jacket",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Gucci",
    imgUrl: productImg06,
    category: "jacket",
    price: 2.163,
    shortDesc:
      "Jumbo GG canvas jacket",
    description:
      "Gucci's jacket honours the brand's signature GG motif. Here, an enlarged 'jumbo' version decorates the canvas fabric all over.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Gucci",
    imgUrl: productImg07,
    category: "jacket",
    price: 2.399,
    shortDesc:
      "GG-print cotton bomber jacket",
    description:
      "GG-print cotton bomber jacket",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Gucci",
    imgUrl: productImg07,
    category: "jacket",
    price: 2.399,
    shortDesc:
      "GG-print cotton bomber jacket",
    description:
      "GG-print cotton bomber jacket",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Ferragamo",
    imgUrl: productImg08,
    category: "coat",
    price: 7.000,
    discount:15,
    shortDesc:
      "single-breasted leather coat",
    description:
      "single-breasted leather coat.Made in Italy ",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Gucci",
    imgUrl: productImg09,
    category: "coat",
    price: 4446,
    discount:35,
    shortDesc:
      "GG-pattern single-breasted coat",
    description:
      "Sand beige wool-silk blend monogram pattern classic collar front button fastening long sleeves straight hem",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "AMIRI    ",
    imgUrl: hoodie01,
    category: "hoodie",
    price: 830,
    shortDesc:
      "raised monogram hoodie",
    description:
      "Made in United States",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Burberry",
    imgUrl: productImg10,
    category: "coat",
    price: 1997,
    shortDesc:
      "Cotton Gabardine Trench Coat",
    description:
      "A short, slim-fit trench coat in our signature cotton gabardine. The style is complete with a Vintage check undercollar and lining. Outer: 100% cotton. Undercollar: 100% cotton. Lining: 100% cotton. Sleeve lining: 100% viscose. Buttons: buffalo horn. Buckles: 100% calf leather.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Off-White"    ,
    imgUrl: hoodie02,
    category: "hoodie",
    price: 759,
    shortDesc:
      "Scan Arrow cotton hoodie",
    description:
      "Scan Arrow cotton hoodie",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Balenciaga",
    imgUrl: hoodie03,
    category: "hoodie",
    price: 1100,
    discount:10,
    shortDesc:
      "Tape Type logo cotton hoodie",
    description:
      "Balenciaga displays its streetwear inspiration with this hoodie, cut to a relaxed silhouette. This piece features a logo print at the front and rear that takes the form of masking tape.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "AMI Paris",
    imgUrl:hoodie04,
    category: "hoodie",
    price: 440,
    discount:5,
    shortDesc:
      "logo-intarsia knit hoodie",
    description:
      "AMI Paris' signature Ami de Coeur logo, translating as 'Ami of hearts', is a reinterpretation of the ace of hearts, expressing the brand's playful nature. Spun from soft virgin wool, this fresh white knit hoodie features the motif at the chest in a vibrant red intarsia-knit pattern.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Balenciaga",
    imgUrl: hoodie05,
    category: "hoodie",
    price:1100,
    shortDesc:
      "Tape Type distressed hoodie",
    description:
      "Balenciaga once again displays its streetwear prowess with this hoodie as it boasts an oversized design and drop-shoulder silhouette. This piece features a logo prints at the front and rear that take the form of masking tape for a charming branded finish.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Burberry    ",
    imgUrl: hoodie06,
    category: "hoodie",
    price: 727,
    shortDesc:
      "check-pattern zip-up hoodie",
    description:
      "Checks are synonymous with Burberry, appearing throughout the house's collections. They detail the hood of this soft cotton piece, adding a bold finish to the design.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Balenciaga",
    imgUrl: shirt01,
    category: "shirt",
    price: 895,
    shortDesc:
      "Tape Type cotton T-shirt",
    description:
      "Tape Type cotton T-shirt",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Philipp Plein",
    imgUrl: shirt02,
    category: "shirt",
    price: 899,
    shortDesc:
      "crystal-embellished cotton T-shirt",
    description:
      "crystal-embellished cotton T-shirt",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "AAPE BY *A BATHING APE®",
    imgUrl: shirt03,
    category: "shirt",
    price: 799,
    shortDesc:
      "camouflage logo-print T-shirt",
    description:
      "camouflage logo-print T-shirt",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Dolce & Gabbana    ",
    imgUrl: shirt04,
    category: "shirt",
    price: 4959,
    shortDesc:
      "floral-embroidered cotton T-shirt",
    description:
      "Crafted from pure cotton, this black T-shirt by Dolce & Gabanna is adorned with floral embroidery, reflecting the brand's propensity for opulent detailing. A constrasting logo patch to the front adds a recognisable touch. ",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Amiri",
    imgUrl: denim01,
    category: "denim",
    price: 3499,
    shortDesc:
      "logo-jacquard cotton cargo jeans",
    description:
      "logo-jacquard cotton cargo jeans",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "VETEMENTS    ",
    imgUrl: denim03,
    category: "denim",
    price: 2199,
    shortDesc:
      "mid-rise straight jeans",
    description:
      "light blue cotton-denim logo print to the front ripped detailing belt loops front button and zip fastening classic five pockets",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "AMIRI    ",
    imgUrl: denim02,
    category: "denim",
    price: 2869,
    shortDesc:
      "camouflage print denim jeans",
    description:
      "Made in United States",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Balenciaga",
    imgUrl: denim04,
    category: "denim",
    price: 2139,
    shortDesc:
      "distressed wide-leg jeans",
    description:
      "Balenciaga's bold aesthetic is highlighted with these jeans, imagined in a fully distressed design. The mid-rise pair is cut in a wide leg silhouette, following the brand's penchant for oversized pieces.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

];
