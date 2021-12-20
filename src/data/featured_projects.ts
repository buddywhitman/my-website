import { BsGithub, BsArrowRight } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiPypi, SiDocker } from "react-icons/si";

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
    alt: "dagpi website",
    name: "Dagpi",
    height: 1032,
    width: 1919,
    description:
      "Dagpi is a SoftwareAsAService API that I'm the CEO and founder of. It features ImageManipulation as a servie with a dashboard. Each user has metrics, and the option to buy a premium service with stripe. Dagpi uses rust, python and typescript. View github for full stack!",
    images: ["/dagpi_home_w.png", "/dagpi_home_b.png"],
    tags: [
      "python",
      "api",
      "rust",
      "react",
      "docker",
      "docker",
      "express",
      "linux",
      "pgsql",
      "stripe",
      "grafana",
    ],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/dagpi",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://dagpi.xyz",
      },
    ],
    reversed: false,
  },
  {
    id: 1,
    alt: "polaroid github",
    name: "Polaroid",
    height: 1031,
    width: 1920,
    description:
      "Polaroid is an Image Manipulation Library for python written in rust. By combining the speed of rust with the ease of python, I've developed an up-and-coming image library to rival PIL!",
    images: ["/polaroid_w.png", "/polaroid_b.png"],
    tags: ["rust", "images", "python", "pypi", "pyo3"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/dagbot",
      },
      {
        id: 1,
        icon: SiPypi,
        url: "https://pypi.org/polaroid",
      },
    ],
    reversed: true,
  },
  {
    id: 2,
    alt: "Daggy Food Blog",
    name: "Food Blog",
    height: 893,
    width: 1666,
    description:
      "DaggyFoodBlog is my experiment with running a custom blog on the hugo platform. Lots of SEO optimization, Image optimization and performance! Also some great articles",
    images: ["/foodblog.png", "/foodblog.png"],
    tags: ["blog", "hugo", "netlify", "html", "js", "css"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/food-blog",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://daggy-food-blog.netlify.app",
      },
    ],
    reversed: false,
  },
  {
    id: 3,
    alt: "dagbot in discord",
    name: "Dagbot",
    height: 1040,
    width: 1457,
    description:
      "Dagbot was my first serious bot! Dagbot is written in python, with tons of features using discord api, dagpi and a variety of others. Coupled with A MERN stack dashboard that syncs with the bot, this is a fully full stack app!",
    images: ["/dagbot_ss_w.png", "/dagbot_ss_b.png"],
    tags: [
      "python",
      "bot",
      "react",
      "express",
      "ts",
      "docker",
      "kubernetes",
      "pgsql",
      "mongodb",
    ],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/daggy1234/dagbot",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://dagbot.daggy.tech",
      },
      {
        id: 2,
        icon: SiDocker,
        url: "https://github.com/daggy1234/dagbot/pkgs/container/dagbot",
      },
    ],
    reversed: true,
  },
];

export default FeaturedProjectList;
