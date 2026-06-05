import { BsGithub } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { FaFlask, FaUniversity, FaFilePdf } from "react-icons/fa";

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
    title: "Interactive Agentic Hologram",
    description:
      "Prototyping an agentic holographic control system using Nvidia Jetson and Ultraleap. Features a custom agentic shell over Linux for natural language gesture-based interaction.",
    tags: ["Agentic AI", "Nvidia Jetson", "Verilog", "Embedded Linux"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman",
      },
    ],
  },
  {
    id: 1,
    title: "Physics-Informed Stochastic Control",
    description:
      "Research paper accepted at IEEE VTC 2026. Focuses on Physics-Informed Stochastic Receding Horizon Control (PI-SRHC) for autonomous energy management in racing electric vehicles.",
    tags: ["Control Theory", "Stochastic", "IEEE", "Python"],
    icons: [
      {
        id: 0,
        icon: FaUniversity,
        url: "https://vtc2026spring.trackchair.com/paper/47987",
      },
    ],
  },
  {
    id: 2,
    title: "Networked Patient Monitoring",
    description:
      "Clustered networking for real-time monitoring of vitals across large hospital wards. Implemented optimized Pan-Tompkins algorithm for R-R peak detection on constrained ESP32 platforms.",
    tags: ["Networking", "RTOS", "DSP", "ESP32", "HealthTech"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman",
      },
    ],
  },
  {
    id: 3,
    title: "Automated Robotic Solar Cleaning",
    description:
      "Patented system (202541079610) for automated robotic PV panel cleaning with obstacle detection. Integrated ultrasonic sensors and torque motor-driven brushes for optimized efficiency.",
    tags: ["Robotics", "Patent", "Sensors", "Arduino"],
    icons: [
      {
        id: 0,
        icon: FaFilePdf,
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Urban Planning Agentic RAG",
    description:
      "Deployed RAG-based LLM workflows for compliance and regulation at DCPR AI. Automated multi-TB document processing pipelines, reducing TTM by 88% and increasing data integrity by 39%.",
    tags: ["LangChain", "n8n", "Vector DB", "FastAPI"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman",
      },
    ],
  },
  {
    id: 5,
    title: "Open-Source Hardware: MOSS",
    description:
      "Led community building around the OpenLane and SkyWater130 stack. Contributed to Arduino libraries for unconventional hardware, organizing workshops for 300+ participants.",
    tags: ["Open Source", "ASIC", "Arduino", "Community"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman",
      },
    ],
  },
];

export default MoreProjectsList;
