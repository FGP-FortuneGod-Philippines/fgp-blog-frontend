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

import type {
  Accordion,
  BannerSlidesProps,
  CoreValues,
  Engagement,
  MeetTeamProps,
  NavLink,
  OfferCards,
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
