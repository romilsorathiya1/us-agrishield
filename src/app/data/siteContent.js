export const company = {
  name: "US Agrishield",
  tagline: "Reliable crop care for stronger harvests",
  phone: "8799125600",
  phoneDisplay: "+91 87991 25600",
  email: "info@usagrishield.com",
  address:
    "156, Gajanan Industrial Estate, 3, Kathwada-Singarva Rd, near Sharnam Estate, Kathwada, Ahmedabad, Gujarat 382430",
};

export const categories = [
  {
    slug: "fungicides",
    icon: "FU",
    name: "Fungicides",
    tagline: "Disease management for healthier crops",
    description:
      "Advanced fungicide solutions that protect crops from diseases and promote healthier plant growth.",
    image: "/Fungicides.jpeg",
    image2: "/Fungicides2.png",
    products: ["US Defender", "US Champion", "US Champion Plus"],
  },
  {
    slug: "insecticides",
    icon: "IN",
    name: "Insecticides",
    tagline: "Targeted protection from damaging pests",
    description:
      "Effective insecticide solutions that protect crops from harmful insects and improve crop productivity.",
    image: "/Insecticides.jpeg",
    image2: "/Insecticides2.png",
    products: ["US Sniper", "US Marshal", "US Hanter", "US Fighter", "US Ravan", "US Guard"],
  },
  {
    slug: "herbicides",
    icon: "HE",
    name: "Herbicides",
    tagline: "Weed control for cleaner crop stands",
    description:
      "Advanced weed control solutions for cleaner fields and better crop performance.",
    image: "/Herbicides.jpeg",
    image2: "/Herbicides2.png",
    products: ["US Titan"],
  },
  {
    slug: "pgr",
    icon: "PGR",
    name: "PGR",
    tagline: "Plant growth regulator solutions",
    description:
      "Advanced plant growth regulators that support healthier growth, improved flowering, and higher yields.",
    image: "/PGR.jpeg",
    image2: "/PGR2.png",
    products: ["US Booster", "US Power Plus", "US Extra Life", "US Silistic"],
  },
];

export const products = [
  // Fungicides
  {
    slug: "fungicides",
    name: "US Defender",
    category: "Fungicide",
    composition: "Tebuconazole 25.9% EC",
    image: "/productPhotos/defender.png",
    dosage: "Use as recommended by crop advisor for target crop and disease condition.",
    pack: "Available pack sizes on request",
    summary:
      "Broad-spectrum systemic fungicide effective against rust, leaf spot, and powdery mildew for healthier crop yields.",
    benefits: [
      "Systemic action for preventive and curative control",
      "Improves crop quality and yield",
      "Fast absorption by plant tissue",
    ],
  },
  {
    slug: "fungicides",
    name: "US Champion",
    category: "Fungicide",
    composition: "Azoxystrobin 11% + Tebuconazole 18.3% SC",
    image: "/productPhotos/champion.png",
    dosage: "280–350 ml per acre",
    pack: "Available pack sizes on request",
    summary:
      "Dual-action fungicide combining systemic and contact activity to provide broad-spectrum disease protection.",
    benefits: [
      "Dual mode of action prevents resistance",
      "Longer duration of disease protection",
      "Protects new plant growth effectively",
    ],
  },
  {
    slug: "fungicides",
    name: "US Champion Plus",
    category: "Fungicide",
    composition: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
    image: "/productPhotos/azod.png",
    dosage: "280–350 ml per acre",
    pack: "Available pack sizes on request",
    summary:
      "Advanced fungicide formulation for superior control of stubborn fungal infections and leaf blight.",
    benefits: [
      "High rainfastness and systemic activity",
      "Broad-spectrum control across multiple crop types",
      "Enhances greening effect and crop vigor",
    ],
  },

  // Insecticides
  {
    slug: "insecticides",
    name: "US Sniper",
    category: "Insecticide",
    composition: "Abamectin 1.9% EC",
    image: "/productPhotos/sniper.png",
    dosage: "200–250 ml per acre",
    pack: "Available pack sizes on request",
    summary:
      "High-potency insecticide and miticide for targeted control of mites, leaf miners, and chewing insects.",
    benefits: [
      "Translaminar movement for hidden pest control",
      "Effective against resistant mite populations",
      "Rapid knockdown action",
    ],
  },
  {
    slug: "insecticides",
    name: "US Marshal",
    category: "Insecticide",
    composition: "Emamectin Benzoate 1.9% EC",
    image: "/productPhotos/marshal.png",
    dosage: "200–250 ml per acre",
    pack: "Available pack sizes on request",
    summary:
      "Modern biological-derived insecticide for quick paralysis and control of bollworms and caterpillars.",
    benefits: [
      "Strong stomach and contact action",
      "Low application dosage requirement",
      "Safe for beneficial insects when used as directed",
    ],
  },
  {
    slug: "insecticides",
    name: "US Hanter",
    category: "Insecticide",
    composition: "Diafenthiuron 47% + Bifenthrin 9.4% SC",
    image: "/productPhotos/hanter.png",
    dosage: "280–350 ml per acre",
    pack: "Available pack sizes on request",
    summary:
      "Dual-action, broad-spectrum insecticide combination used to control stubborn sucking and chewing pests in crops like cotton and chilli.",
    benefits: [
      "Rapidly paralyzes pests on contact",
      "Kills both sucking and chewing insects",
      "Keeps crops safe for weeks",
    ],
  },
  {
    slug: "insecticides",
    name: "US Fighter",
    category: "Insecticide",
    composition: "Azadirachtin 0.15% EC (1500 ppm)",
    image: "/productPhotos/fighter.png",
    dosage: "200–250 ml per acre",
    pack: "Available pack sizes on request",
    summary:
      "Organic, neem seed-based botanical biopesticide used to protect plants from a wide range of harmful insects.",
    benefits: [
      "Disrupts pest lifecycles by stopping them from feeding and growing",
      "Protects friendly insects like honeybees and ladybugs from harm",
      "Leaves zero chemical residue, breaking down safely and naturally",
    ],
  },
  {
    slug: "insecticides",
    name: "US Ravan",
    category: "Insecticide",
    composition: "Azadirachtin 1% EC (10,000 PPM)",
    image: "/productPhotos/ravan.png",
    dosage: "As recommended by crop advisor",
    pack: "Available pack sizes on request",
    summary:
      "Concentrated, organic bio-insecticide derived from neem seed kernels used to control chewing and sucking pests in agriculture and gardening.",
    benefits: [
      "Stops insect reproduction, egg-laying, and molting cycles",
      "Starves pests immediately by altering their taste receptors",
      "Remains completely non-toxic to pollinators and beneficial predators",
    ],
  },
  {
    slug: "insecticides",
    name: "US Guard",
    category: "Insecticide / Miticide",
    composition: "Flufenzine 20% EC",
    image: "/productPhotos/gurds.png",
    dosage: "As recommended by crop advisor",
    pack: "Available pack sizes on request",
    summary:
      "Specialized miticide and acaricide used in agriculture to control various plant-eating mites on crops.",
    benefits: [
      "Kills mite eggs, nymphs, and adults",
      "Acts as a growth regulator providing extended residual defense",
      "Uses translaminar movement to eliminate pests feeding underneath leaves",
    ],
  },

  // PGR
  {
    slug: "pgr",
    name: "US Booster",
    category: "PGR",
    composition: "Paclobutrazol 40% SC",
    image: "/productPhotos/booster.png",
    dosage: "Use as recommended by crop advisor for target crop stage.",
    pack: "Available pack sizes on request",
    summary:
      "Effective plant growth regulator that controls vegetative growth and promotes profuse flowering and fruit setting.",
    benefits: [
      "Promotes balanced crop canopy and flowering",
      "Increases fruit size, color, and uniformity",
      "Improves tolerance against environmental stress",
    ],
  },
  {
    slug: "pgr",
    name: "US Power Plus",
    category: "PGR",
    composition: "Gibberellic Acid (GA3)",
    image: "/productPhotos/powerPlus.png",
    dosage: "Use as recommended by crop advisor for target crop stage.",
    pack: "Available pack sizes on request",
    summary:
      "Plant growth stimulant that promotes cell elongation, uniform growth, bigger fruit development, and higher yield.",
    benefits: [
      "Enhances cell division and plant vigor",
      "Improves crop yield and quality metrics",
      "Breaks seed dormancy and stimulates early growth",
    ],
  },
  {
    slug: "pgr",
    name: "US Extra Life",
    category: "PGR / Bio-stimulant",
    composition: "Plant & Root Booster",
    image: "/productPhotos/extraLife.png",
    dosage: "As recommended by crop advisor",
    pack: "Available pack sizes on request",
    summary:
      "A plant nutrition and growth booster bio-product for agricultural use that supports strong root development and healthier plant growth.",
    benefits: [
      "Supports strong root development",
      "Promotes healthier plant growth",
      "Helps improve overall plant vigor",
    ],
  },
  {
    slug: "pgr",
    name: "US Silistic",
    category: "Adjuvant",
    composition: "Silicone-based Agricultural Adjuvant",
    image: "/productPhotos/silistic.png",
    dosage: "As recommended by crop advisor",
    pack: "Available pack sizes on request",
    summary:
      "Specialized agricultural adjuvant that drastically lowers water surface tension, allowing pesticide and fertilizer sprays to form a thin, uniform film across plant leaves.",
    benefits: [
      "Maximises leaf coverage by instantly breaking water surface tension",
      "Boosts chemical absorption through rapid, deep plant tissue penetration",
      "Prevents rain wash-off by quickly binding sprays to leaves",
    ],
  },

  // Herbicides
  {
    slug: "herbicides",
    name: "US Titan",
    category: "Herbicide",
    composition: "Quizalofop Ethyl 7.5% + Imazethapyr 15% EC",
    image: "/productPhotos/titan.png",
    dosage: "Use as recommended by crop advisor for weed type and crop stage.",
    pack: "Available pack sizes on request",
    summary:
      "Selective post-emergence herbicide providing broad-spectrum control of narrow and broadleaf weeds.",
    benefits: [
      "Dual herbicide action for complete weed control",
      "Safe for major leguminous and oilseed crops",
      "Prevents crop-weed competition early in the season",
    ],
  },
];

export const whyChooseUs = [
  {"heading":"Premium Quality",
    "description":"High-quality products developed to deliver reliable performance and consistent crop protection."},
  {"heading":"Fast Technical Support",
    "description":"Quick and reliable technical assistance for product selection, dosage, and application."},
  {"heading":"Gujarat Based",
  "description":"Operating from Gujarat to deliver reliable agrochemical solutions across India."},
  {"heading":"Farmer Focused",
  "description":"Dedicated to helping farmers achieve healthier crops, higher yields, and better profitability."}
];

