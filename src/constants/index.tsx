import ecommerce from "@/assets/offer/Ecommerce web page-amico.webp";
import trade from "@/assets/offer/International trade-rafiki.webp";
import operation from "@/assets/offer/Operating system upgrade-amico (1).webp";
import project from "@/assets/offer/Projections-bro.webp";

import ceo from "@/assets/executives/CEO.webp";
import jarl from "@/assets/executives/jarl.webp";
import kevin from "@/assets/executives/kevin-1.webp";
import stanley from "@/assets/executives/stanley.webp";

import duke from "@/assets/foreign-affairs/Duke-Liu.webp";
import elden from "@/assets/foreign-affairs/Elden-Tu.webp";
import steven from "@/assets/foreign-affairs/Steven-Lien.webp";
import william from "@/assets/foreign-affairs/William.webp";

import fidel from "@/assets/ph-business-associates/fidel-ferrer.webp";

import hera from "@/assets/operations-team/Hera.webp";
import gelo from "@/assets/operations-team/Gelo.webp";
import cess from "@/assets/operations-team/Cess.webp";
import jin from "@/assets/operations-team/jin.webp";
import lane from "@/assets/operations-team/Lane.webp";
import lea from "@/assets/operations-team/Lea.webp";

import loveph from "@/assets/banner-optimized/Love-Lastly-na.webp";
import rides from "@/assets/banner-optimized/last-star.webp";
import terraces from "@/assets/banner-optimized/rice-terraces-person.webp";
import festival from "@/assets/banner-optimized/festi-finale.webp";
import river from "@/assets/banner-optimized/kids-river.webp";
import groupSelfie from "@/assets/banner-optimized/gruop-selfie-1.webp";
import vacation from "@/assets/banner-optimized/iloilo-person.webp";
import meeting from "@/assets/banner-optimized/meeting-final.webp";

import spBanner from "@/assets/modal-offers/ShoPilipinas-Logo.webp";
import spFeatImg from "@/assets/modal-offers/sp-background.webp";
import tradeBanner from "@/assets/modal-offers/plant-1.webp";
import tradeFeat from "@/assets/modal-offers/plant-2.webp";
import projectBanner from "@/assets/modal-offers/plant-3.webp";
import projectFeat from "@/assets/modal-offers/plant-4.webp";
import operationBanner from "@/assets/modal-offers/plant-5.webp";
import operationFeat from "@/assets/modal-offers/plant-6.webp";

import envelope from "@/assets/announcement-img/envelope.webp";
import gift from "@/assets/announcement-img/gift.webp";
import shop from "@/assets/announcement-img/shop-online.jpg";
import taiwan from "@/assets/announcement-img/taiwan.webp";
import yehey from "@/assets/announcement-img/yehey.webp";

import type {
  Accordion,
  AnnouncementProps,
  AwardsProps,
  BannerSlidesProps,
  BiographyProps,
  CoreValues,
  Engagement,
  MeetTeamProps,
  NavLink,
  OfferCards,
  QualificationProps,
} from "@/interfaces";

import {
  LuFolderOpen,
  LuFiles,
  LuFlag,
  LuChartColumnIncreasing,
  LuImage,
} from "react-icons/lu";

export const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/", label: "About", scrollTo: "about" },
  { path: "/chairman", label: "Chairman" },
  { path: "/announcement", label: "Announcement" },
  { path: "/news", label: "News" },
  { path: "/partners", label: "Trusted Partners" },
];

export const engagementStats: Engagement[] = [
  { label: "Total Views", count: 521 },
  { label: "Total Visitors", count: 235 },
  { label: "Today's Views", count: 52 },
  { label: "Today's Visitors", count: 21 },
];

export const coreValues: CoreValues[] = [
  { title: "Core Values" },
  {
    icon: LuFolderOpen,
    title: "Integrity",
    description:
      "Building trust through ethical and transparent business practices.",
  },
  {
    icon: LuFiles,
    title: "Professionalism",
    description: "Delivering excellence at every stage of operation.",
  },
  {
    icon: LuFlag,
    title: "Innovation",
    description:
      "Creating cutting-edge solutions that anticipate future needs.",
  },
  {
    icon: LuChartColumnIncreasing,
    title: "Collaboration",
    description: "Empowering partnerships that achieve shared success.",
  },
  {
    icon: LuImage,
    title: "Sustainability",
    description:
      "Investing in projects that benefit both economy and environment.",
  },
];

export const cards: OfferCards[] = [
  {
    src: ecommerce,
    alt: "Ecommerce Illustration",
    label: "Ecommerce",
    banner: spBanner,
    bannerAlt: "ShoPilipinas Banner",
    featImg: spFeatImg,
    featImgAlt: "FGP Office",
    title: "E-Commerce Operations",
    description: `
    B2C: ShoPilipinas.com localized online marketplace that empowers Philippine sellers with tools and logistics.
    B2B: Wholesale distribution and offline integration connecting local businesses with global buyers.  
    
    FortuneGod Group of Companies aims to revolutionize the Philippine e-commerce landscape by integrating AI-driven technology, the localized independent platform ShoPilipinas.com, live-e-commerce, and a multi-tied matrix operational strategy. This innovative ecosystem is designed to streamline operations, enhance consumer experience, and maximize market reach.`,
    extension: true,
  },
  {
    src: trade,
    alt: "Trade Illustration",
    label: "International Trade",
    banner: tradeBanner,
    bannerAlt: "ShoPilipinas Banner",
    featImg: tradeFeat,
    featImgAlt: "FGP Office",
    title: "International Trade",
    description: `Import & export of bulk commodities such as petroleum products, minerals, and essential consumer goods`,
  },
  {
    src: project,
    alt: "Project Illustration",
    label: "Projects",
    banner: projectBanner,
    bannerAlt: "ShoPilipinas Banner",
    featImg: projectFeat,
    featImgAlt: "FGP Office",
    title: "Project Development & Investment",
    description: `– Renewable Energy Projects: solar PV, wind, and hydropower.
      – WTE (Waste-to-Energy): advanced solutions to convert urban waste into power.
      – Infrastructure: solar streetlighting, water resource management, and smart city initiatives.`,
  },
  {
    src: operation,
    alt: "Operation Illustration",
    label: "Turn Key Operation",
    banner: operationBanner,
    bannerAlt: "ShoPilipinas Banner",
    featImg: operationFeat,
    featImgAlt: "FGP Office",
    title: "Turnkey Market Entry for Global Brands",
    description: `
    – End-to-end solutions: from onboarding to operations.
    – Marketing, logistics, payments, and after-sales – all under one roof.
    – Helping international brands localize with minimal risks and maximize ROI in the Philippines.`,
  },
];

export const whyFgp: Accordion[] = [
  {
    title: "Proven Market Roots",
    description: "30+ years of business leadership in the Philippines.",
    item: "1",
  },
  {
    title: "Diversified Portfolio",
    description: "From commodities to e-commerce to infrastructure",
    item: "2",
  },
  {
    title: "Cross-Border Expertise",
    description: "Bridging Asia-Pacific resources with local needs.",
    item: "3",
  },
  {
    title: "Sustainability Driven",
    description: "Aligning profit with environmental and social impact.",
    item: "4",
  },
  {
    title: "Future Ready",
    description: "AI, live-commerce, and digital-first business models.",
    item: "5",
  },
];

export const keyAdvantage: Accordion[] = [
  {
    title: "Dual-Engine Strategy",
    description:
      "Balancing import flows from China and export flows from the Philippines.",
    item: "1",
  },
  {
    title: "Cost-Optimized Logistics",
    description:
      "Bundled shipping & customs clearance reduce costs by up to 30%.",
    item: "2",
  },
  {
    title: "Membership-Driven Growth",
    description:
      "High-retention loyalty programs with recurring revenue model.",
    item: "3",
  },
  {
    title: "Trust & Transparency",
    description: "End-to-end transaction protection and real-time tracking.",
    item: "4",
  },
  {
    title: "Scalability",
    description:
      "Adaptable for retail, wholesale, and cross-border operations.",
    item: "5",
  },
];

export const executiveTeam: MeetTeamProps[] = [
  { name: "Jarl Lin", position: "Chief Finance Officer", image: jarl },
  { name: "David Huang", position: "Chairman / CEO", image: ceo },
  { name: "Stanley Liu", position: "President", image: stanley },
  { name: "Kevin Yang", position: "Global Trade Director", image: kevin },
];

export const foreignTeam: MeetTeamProps[] = [
  { name: "Duke Liu", position: "Director International Affairs", image: duke },
  { name: "Elden Tu", position: "Senior Consultant", image: elden },
  {
    name: "Steven Lien",
    position: "Director International Affairs",
    image: steven,
  },
  { name: "William Wang", position: "Project Manager", image: william },
];

export const phBusinessAssociates: MeetTeamProps[] = [
  { name: "Engr. Fidel Ferrer", position: "Senior Consultant", image: fidel },
];

export const operationsTeam: MeetTeamProps[] = [
  {
    name: "Hera Krizelda Almacen",
    position: "Human Resources & Admin Officer",
    image: hera,
  },
  {
    name: "Heraclea Afable",
    position: "Accounting and Finance Lead",
    image: lea,
  },
  {
    name: "Princess Rita Yandoc",
    position: "Accounting and Treasury Officer",
    image: cess,
  },
  {
    name: "Angelo Lopez",
    position: "IT Web Management & Graphic Design Artist",
    image: gelo,
  },
  {
    name: "Nerilane Maranan",
    position: "Executive Assistant & Marketing Supervisor",
    image: lane,
  },
  {
    name: "Lyn Ching Docuyanan",
    position: "Marketing Staff",
    image: jin,
  },
];

export const slides: BannerSlidesProps[] = [
  { img: loveph },
  {
    img: rides,
    description:
      "Screams, laughter, and hands in the air riding a rollercoaster with friends in the philippines is pure joy you can't forget",
  },
  {
    img: terraces,
    description:
      "Each layer of the terraces tells a story, each smiles tells what it means to be Filipino",
  },
  {
    img: festival,
    description:
      "Dancing in the streets, smiling with strangers this is what being filipino feels like",
  },
  {
    img: river,
    description:
      "Every splash tells a story, of filipino childhood, friendship, and joy of being free",
  },
  {
    img: groupSelfie,
    description:
      "Beyond the view, it's the bond filipino friendship that turns every trip into memory",
  },
  {
    img: vacation,
    description:
      "More than destinations it's the people that make every filipino journey unforgettable",
  },
  {
    img: meeting,
    description:
      "In every filipino city, progress begins with people and purpose",
  },
];

export const bioSlide: BiographyProps[] = [
  {
    label: "Director",
    description: "Taiwan Chamber of Commerce & Industry in the Philippines",
  },
  {
    label: "Director",
    description: "Taiwan Recyling Energy Development Association",
  },
  {
    label: "Philippine Representative",
    description: "International Chinese Freemasons Supreme Lodge",
  },
  {
    label: "Chairman",
    description: "Philippine Ecommerce Association",
  },
  {
    label: "Presidential ",
    description:
      "The Fraternal Order of Eagles - Philippine Eagles, Inc. Metro Elite Eagles Club ",
  },
];

export const awardsCard: AwardsProps[] = [
  {
    label: "74th Nuremberg International Invention Exhibition",
    description:
      "Once again ranked First Internationally, receiving the Gold Medal Award at the 74th iENA Germany reaffirming global leadership in innovation.",
  },
  {
    label: "73rd Nuremberg International Invention Exhibition",
    description:
      "Achieved First International Ranking and a Gold Medal Award at the 73rd iENA Germany, one of the world’s most prestigious invention exhibitions.",
  },
  {
    label: "12th IIIC Taiwan International Innovation & Invention Competition",
    description:
      "Awarded the Gold Medal at the 12th IIIC Taiwan Competition, celebrating cutting-edge innovation and outstanding impact.",
  },
  {
    label: "International Nobel Prize for Outstanding Inventors",
    description:
      "Recognized by the Republic of China Outstanding Inventors Association awarded",
  },
  {
    label: "National Invention Exhibition",
    description:
      "Received the Gold Award for Invention and Entrepreneurship at the 23rd National Invention Exhibition, part of the Belt and Road & BRICS Skills Development and Technology Innovation Competition organized by the China Invention Association.",
  },
  {
    label: "IIIC International Innovation & Invention Competition",
    description:
      "Honored with a Silver Medal at the IIIC International Innovation & Invention Competition in Taiwan 2019",
  },
];

export const qualifications: QualificationProps[] = [
  {
    title: "Deputy Dean of Research Institute",
    description:
      "Huizhou Zhongkai High-tech Zone ZongHua Battery Indusrty Research Institute, China",
  },
  {
    title: "Distinguished Member",
    description: "The Filipino Inventors Society (FIS）-",
  },
  {
    title: "Philippines Country Representative / Development Director",
    description:
      "Social Impact Investment and Procurement Foundation（SIIP) & S.T.A.R.S. Foundation",
  },
  {
    title: "Special lecturer",
    description: "Taiwan Academy of Banking and Finance",
  },
  {
    title: "Senior Consultant",
    description: "IntelliBenefit Technology Co., Ltd. (IBCO)",
  },
  {
    title:
      "Associate Professor Level/International Strategic Management and Resource Integration Expert Teacher, School of Mechanical and Resource Engineering",
    description: "Guangxi Wuzhou University",
  },
];

export const announcementData: AnnouncementProps[] = [
  {
    id: "1",
    title: "Taiwan Excellence Expo 2025",
    description: "Stay updated from checkout to delivery. ",
    author: "FgpPh",
    created_at: "September 9, 2025",
    tags: ["ecommerce", "shopilipinas"],
    slug: "track-orders",
    image: taiwan,
  },
  {
    id: "2",
    title: "New Arrivals Just Dropped",
    description:
      "Discover our latest collection designed to match your lifestyle. Fresh styles and must-have items are waiting for you.",
    author: "FgpPh",
    created_at: "October 14, 2025",
    tags: ["ecommerce", "shopilipinas", "fgp"],
    slug: "new-arrival",
    image: gift,
  },
  {
    id: "3",
    title: "Members-Only Rewards",
    description:
      "Sign up today and unlock exclusive perks. Earn points every time you shop and redeem them for exciting rewards.",
    author: "FgpPh",
    created_at: "October 14, 2025",
    tags: ["ecommerce", "shopilipinas", "fgp"],
    slug: "members-award",
    image: gift,
  },
  {
    id: "4",
    title: "Secure & Easy Checkout",
    description:
      "We’ve made shopping safer and faster for you. Enjoy smooth payments and complete peace of mind with every order.",
    author: "FgpPh",
    created_at: "September 9, 2025",
    tags: ["ecommerce", "shopilipinas"],
    slug: "secure-checkout",
    image: envelope,
  },
  {
    id: "5",
    title: "Limited-Time Flash Sale",
    description:
      "Hurry! Grab your favorites with up to 50% off. This offer won’t last long, so shop now before stocks run out.",
    author: "FgpPh",
    created_at: "September 9, 2025",
    tags: ["ecommerce", "shopilipinas"],
    slug: "flash-sale",
    image: yehey,
  },
  {
    id: "6",
    title: "Free Shipping Weekend",
    description:
      "For a limited time, all orders come with free nationwide shipping buy now!!",
    author: "FgpPh",
    created_at: "September 9, 2025",
    tags: ["ecommerce", "shopilipinas"],
    slug: "free-shipping-weekend",
    image: yehey,
  },
  {
    id: "7",
    title: "Big Savings Await!",
    description:
      "Enjoy exclusive discounts across our store. Shop your favorite products at unbeatable prices and grab the best deals before they’re gone. ",
    author: "FgpPh",
    created_at: "September 4, 2025",
    tags: ["ecommerce", "shopilipinas"],
    slug: "big-savings",
    image: shop,
  },
];
