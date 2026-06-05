import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaFlask, FaUniversity } from "react-icons/fa";
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
    alt: "Solar Racing Telemetry & Race Engineering Digital Twin",
    name: "Solar Racing Digital Twin",
    height: 1080,
    width: 1920,
    description:
      "Engineered a high-performance race strategy engine for solar EVs. Built a real-time digital twin integrating weather APIs, GIS elevation data, and vehicle dynamics. Leveraged stochastic receding horizon control for SoC optimization, leading to IEEE VTC publication and 2+ provisional patents.",
    images: ["/telemetry_2026.webp", "/telemetry_b.webp"],
    tags: ["HPC", "Control Theory", "STM32H7", "RTOS", "C++", "InfluxDB"],
    icons: [
      {
        id: 1,
        icon: FaUniversity,
        url: "https://vtc2026spring.trackchair.com/paper/47987",
      },
    ],
    reversed: false,
  },
  {
    id: 1,
    alt: "Agentic Voice AI for Hospital Workflows",
    name: "Fettle: Agentic Voice AI",
    height: 1080,
    width: 1920,
    description:
      "Architected distributed voice AI agents for high-concurrency hospital customer experience. Implemented SIP trunking with LiveKit and optimized real-time inference using PyTorch & TorchRec. Founding Engineer owning the entire DevOps lifecycle and backend architecture.",
    images: ["/fettle_2026.webp", "/fettle_b.webp"],
    tags: ["Agentic AI", "LiveKit", "PyTorch", "Kubernetes", "FastAPI", "Inference"],
    icons: [
      {
        id: 0,
        icon: CgWebsite,
        url: "https://fettle.health",
      },
    ],
    reversed: true,
  },
  {
    id: 2,
    alt: "CoreEL SoC Design & ASIC Flow",
    name: "SoC Design & ASIC Flow",
    height: 1080,
    width: 1920,
    description:
      "RTL2GDSII design of high-speed CAN bus and I2C controllers. Collaborated with synthesis and UVM verification teams to ensure timing closure on a Virtex 7 FPGA. Expert exposure to ASIC design flow including STA, floorplanning, and PPA optimization.",
    images: ["/soc_2026.webp", "/soc_b.webp"],
    tags: ["Verilog", "FPGA", "UVM", "ASIC Flow", "Vivado", "HFT"],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/buddywhitman",
      },
    ],
    reversed: false,
  },
  {
    id: 3,
    alt: "Multimodal Biofeedback System (Nature Publication)",
    name: "Biofeedback Edge AI",
    height: 1080,
    width: 1920,
    description:
      "Technical validation of a multimodal emotion-adaptive biofeedback system for autonomic regulation. Published in Nature Scientific Reports (Q1). Deployed multimodal edge AI pipeline using LSTM + transformer encoders on Jetson/ESP32 platforms.",
    images: ["/nature_2026.webp", "/nature_b.webp"],
    tags: ["Edge AI", "DSP", "Nature", "Transformer", "Jetson", "C"],
    icons: [
      {
        id: 1,
        icon: FaFlask,
        url: "https://doi.org/10.1038/s41598-026-46105-9",
      },
    ],
    reversed: true,
  },
];

export default FeaturedProjectList;
