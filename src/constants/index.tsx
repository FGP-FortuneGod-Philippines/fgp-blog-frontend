import ecommerce from "@/assets/offer/Ecommerce web page-amico.png";
import trade from "@/assets/offer/International trade-rafiki.png";
import operation from "@/assets/offer/Operating system upgrade-amico (1).png";
import project from "@/assets/offer/Projections-bro.png";

import ceo from "@/assets/executives/CEO.png";
import jarl from "@/assets/executives/jarl.png";
import kevin from "@/assets/executives/kevin-1.png";
import stanley from "@/assets/executives/stanley.png";

import duke from "@/assets/foreign-affairs/Duke-Liu.png";
import elden from "@/assets/foreign-affairs/Elden-Tu.png";
import steven from "@/assets/foreign-affairs/Steven-Lien.png";
import william from "@/assets/foreign-affairs/William.png";

import fidel from "@/assets/ph-business-associates/fidel-ferrer.png";

import hera from "@/assets/operations-team/Hera.png";
import gelo from "@/assets/operations-team/Gelo.png";
import cess from "@/assets/operations-team/Cess.png";
import jin from "@/assets/operations-team/jin.png";
import lane from "@/assets/operations-team/Lane.png";
import lea from "@/assets/operations-team/Lea.png";

import loveph from "@/assets/banner-slides/Love-Lastly-na.png";
import rides from "@/assets/banner-slides/last-star.png";
import terraces from "@/assets/banner-slides/rice-terraces-person.png";
import festival from "@/assets/banner-slides/festi-finale.png";
import river from "@/assets/banner-slides/kids-river.png";
import groupSelfie from "@/assets/banner-slides/gruop-selfie-1.png";
import vacation from "@/assets/banner-slides/iloilo-person.png";
import meeting from "@/assets/banner-slides/meeting-final.png";

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
  { src: ecommerce, alt: "Ecommerce Illustration", label: "Ecommerce" },
  { src: trade, alt: "Trade Illustration", label: "International Trade" },
  {
    src: project,
    alt: "Project Illustration",
    label: "Projects",
  },
  {
    src: operation,
    alt: "Operation Illustration",
    label: "Turn Key Operation",
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
