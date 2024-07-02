import { BsGithub, BsDownload } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLink } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiDocker, SiDiscord } from "react-icons/si";

interface MoreProjectTypeIconType {
  id: number;
  icon: IconType;
  url: string;
}

interface MoreProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icons: MoreProjectTypeIconType[];
}

const MoreProjectsList: MoreProjectType[] = [
  {
    id: 0,
    title: "portfolio",
    description:
      "Liked this site? here's the easily replicable source code for it! Using Next.js, Chakra UI, and Framer Motion, it's responsive, fast, and looks great! I also used Vercel for deployment and Github for version control. I also used the Github API to fetch my pinned projects!",
    tags: ["next", "react", "chakra", "vercel", "github"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman/my-website",
      },
    ],
  },
  {
    id: 1,
    title: "WakeWord Recognition",
    description:
      "Dabbled a bit with TensorFlow and Keras and trained a gated RNN to recognise the wake word 'hey buddy'. The model was trained on a dataset of 100 recorded positive and negative samples and achieved an accuracy of 98% on the test set.",
    tags: ["tensorflow", "keras", "python", "jupyter"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman/WakeWord_Recognition",
      },
    ],
  },
  {
    id: 2,
    title: "flatCalc",
    description:
      "FlatCalc is a real-estate calculator, designed to reveal all the hidden prices involved in a real estate deal and help users map out an accurate budget with sound financial understanding.",
    tags: ["java", "swing"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman/flatcalc",
      },
    ],
  },
  {
    id: 3,
    title: "electronica",
    description:
      "A hardware knowledge repository - made in an attempt to unify hardware resources and create a structured curriculum, similar to roadmaps.sh for software career paths.",
    tags: ["markdown", "verilog", "C", "STM32Cube"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman/electronica",
      },
    ],
  },
  {
    id: 4,
    title: "Arduino LiquidCrystal",
    description:
      "I know, I know. This is a repository owned by the Arduino org and made my first open source contribution here by getting a PR merged successfully for implementing a feature to support the rather unusual 3x10 LCD display format.",
    tags: [
      "C",
      "Arduino",
      "CMake",
      "Make",
      "GCC",
    ],
    icons: [
      {
        id: 1,
        icon: BsGithub,
        url: "https://ewaste-app.vercel.com",
      },
    ],
  },
  {
    id: 5,
    title: "vaxBot",
    description:
      "A private vaccine appointment bot written with Discordjs. It utilizes the CoWin API to fetch available vaccine slots from nearby vaccination centers and allows a user to book an appointment for the same, all within the discord server itself!",
    tags: ["discordjs", "js", "cowin"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman/VaxBot",
      },
    ],
  },
];

export default MoreProjectsList;
