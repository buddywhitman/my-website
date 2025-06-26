import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { IconType } from "react-icons/lib";

interface FeaturedProjectTypeIconType {
  id: number;
  icon: IconType;
  url: string;
}

interface FeaturedProjectType {
  id: number;
  alt: string;
  name: string;
  height: number;
  width: number;
  description: string;
  images: string[];
  tags: string[];
  icons: FeaturedProjectTypeIconType[];
  reversed: boolean;
}

const FeaturedProjectList: FeaturedProjectType[] = [
  {
    id: 0,
    alt: "MyCaptain Website",
    name: "MyCaptain",
    height: 1032,
    width: 1919,
    description:
      "Most fun so far (aside from this portfolio ofc), worked with a team of 6 talented devs during the lockdown to build this platform enabling Indian teens to dive headfirst into a career of their choice",
    images: ["/mycaptain_w.webp", "/mycaptain_b.webp"],
    tags: [
      "next",
      "react",
      "graphql",
      "react",
      "moment",
      "docker",
      "node",
      "strapi",
    ],
    icons: [
      {
        id: 1,
        icon: CgWebsite,
        url: "https://mycaptain.in",
      },
    ],
    reversed: false,
  },
  {
    id: 1,
    alt: "GreatHR Website",
    name: "GreatHR",
    height: 1031,
    width: 1920,
    description:
      "GreatHR is an HRM suite running a RESTful web service built with Spring Boot and Java following the MVC pattern, served with Angular.",
    images: ["/greathr_w.webp", "/greathr_b.webp"],
    tags: ["spring boot", "angular", "rest", "java", "js", "aws"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman/crud-app-frontend",
      },
      {
        id: 1,
        icon: BsGithub,
        url: "https://github.com/crud-app-backend",
      },
    ],
    reversed: true,
  },
  {
    id: 2,
    alt: "ISA Acheivements Website",
    name: "ISA Achievements",
    height: 893,
    width: 1666,
    description:
      "Thoughtful site to display (no points for guessing that one) the achievements of a student club's members. Built from scratch with vanilla CSS and JS.",
    images: ["/isa.webp", "/isa.webp"],
    tags: ["vanilla", "js", "vercel", "dom", "css"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman/isa-achievements",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://isa-achievements.vercel.app/",
      },
    ],
    reversed: false,
  },
];

export default FeaturedProjectList;
