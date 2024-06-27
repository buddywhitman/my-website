/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Image as CHI,
} from "@chakra-ui/react";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";
import { ReactElement } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaReact, FaEthereum, FaWordpressSimple } from "react-icons/fa";
import { ImPaintFormat } from "react-icons/im";
import { SiCoursera, SiFlutter, SiIbm } from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

interface TextImageProps {
  text: string;
  reverse: boolean;
  image: string;
  alt: string;
  height: number;
  width: number;
  cw: string;
}

interface TimelineElementProps {
  date: string;
  icon: ReactElement<any, any>;
  heading: string;
  description: string;
  location: string;
  bg: string;
}

const TimelineElement = ({
  date,
  icon,
  heading,
  description,
  location,
  bg,
}: TimelineElementProps) => {
  const box_bg = useColorModeValue("#EDF2F7", "#212930");
  const text_c = useColorModeValue("#000", "#fff");
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ background: box_bg, color: text_c }}
      dateClassName="timelinedatestyle"
      contentArrowStyle={{ borderRight: `7px solid  ${box_bg}` }}
      date={date}
      iconStyle={{
        boxShadow: `0 0 0 4px ${box_bg}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)`,
        background: bg,
        color: "#fff",
      }}
      icon={icon}
    >
      <Heading size="lg" as="h3">
        {heading}
      </Heading>
      <Heading size="md" as="h4">
        {location}
      </Heading>
      <Text>{description}</Text>
    </VerticalTimelineElement>
  );
};

const TextImage = ({
  text,
  reverse,
  image,
  alt,
  height,
  width,
  cw,
}: TextImageProps) => {
  return (
    <Flex
      marginY={{ base: 0, md: "2%" }}
      paddingX={{ base: 0, md: 4, xl: 10 }}
      marginX={{ base: 0, xl: "10%" }}
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
    >
      <Box
        mr={{ base: 0, md: 3 }}
        ml={{ base: 0, md: 3 }}
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "100%", md: cw }}
      >
        <Text>{text}</Text>
      </Box>
      <Box>
        <Image height={height} width={width} src={image} alt={alt} />
      </Box>
    </Flex>
  );
};

const About = () => {
  const bl = useColorModeValue("brand.400", "brand.600");
  const b = useColorModeValue("#EDF2F7", "#212930");
  return (
    <Box>
      <Flex alignItems="center" direction="column">
        <Heading as="h2" size="2xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: bl,
              zIndex: -1,
            }}
          >
            About Me
          </Text>
        </Heading>
        <Box marginY="5%">
          <TextImage
            text="A decade or two down the line, I would love to launch a consumer-facing hard tech venture. I am also into music production, socio-poitical activism, military stuff and comparative religion. My belief in absolute equality, world peace, love, individuality and internationalism stems from an avid interest in the Vedanta philosophy. The earliest memory I have of the stuff that runs on the screen takes me back to fifth grade. My father, meaning to introduce me to HTML - showed me how to click a button and receive a warm greeting: Hello, Pulkit! I was shocked at how the computer knew my name, something I did not recall telling it earlier, and I wanted to learn how my dad accomplished the feat. By the time I answered that question by learning HTML, CSS & WordPress by the seventh grade, having started two blogs and seemingly destined to end up in software development - a thousand new questions were begging for attention. That is when I decided to learn what's truly under the hood – stepping into hardware. I joined a local maker lab – going by the name of SP Robotics Works. Every day after school, I'd spend three to four hours in a highly stimulating environment - surrounded by passionate individuals working on building robotic and IoT systems using the Arduino and Raspberry Pi platforms, implementing several sensors, actuators and communication modules."
            image={useColorModeValue("/staring.webp", "/staring.webp")}
            height={400}
            cw="50%"
            width={480}
            alt="staring into the vast ocean"
            reverse={false}
          />
          <TextImage
            text="By the time I graduated from their year-long programme, I knew that I wanted to explore the intersection of hardware and software, where man meets machine. I designed algorithms for gesture recognition for an interactive hologram and dreamt up BCIs long before I had heard of Neuralink. Growing up reading a lot (I used to spend the entire day at the exhaustive library in my mother's school through middle school), I'm grateful to my parents for giving me an exposure to a huge range of uncensored knowledge, conflicting schools of thought and jarring insights into the lives of personalities I'd only heard about. "
            image={useColorModeValue("/working_ww.webp", "/working_bb.webp")}
            alt="working"
            reverse
            cw="50%"
            height={300}
            width={500}
          />
          <TextImage
            text="All of this helped shape a complex worldview - understanding love, peace and freedom are the only things that matter despite, or rather because, of the many things that unite and divide the people of our world. Around this time, I started exploring existential questions to understand spirituality and politics for myself, inspired by Walter Isaacson's biographies of Steve Jobs and Albert Einstein. Never entirely emerging from my indulges in humanities, all my future endeavours featured a design/human perspective, trying to understand what people find beautiful, what gives us a reason to smile amidst this rat race. Throughout high school, I focussed a lot more on coursework, implementing hobbyist projects like R/C skateboards and AWS-enabled smart speakers while being able to secure straight As in my sophomore and senior years."
            image="/papertowns.webp"
            alt="Be Here Now"
            cw="50%"
            reverse={false}
            height={350}
            width={350}
          />
          <TextImage
            text="In college, I'm expanding my knowledge across three fronts: Application/Services Development, Systems/Embedded Engineering and Hardware/Silicon Design. My day is spent balancing classes with meetings and workshops organised by several of the student clubs (ACM, IEEE, GDSC, etc.) that I actively participate in and bond with friends over heartfelt conversations and music jamming sessions. I conclude my day at the workshop, where we (a team of twenty) work on building a solar-powered (endurance) racing car for the World Solar Challenge, Australia. I am responsible for the LV electronics - MCU, Displays, Sensor Fusion, Task Scheduling, etc. I also handle web/app dev for some start-ups incubated at our innovation centre while helping local businesses with their digital transformation needs. Now, now I'm feeling a lil proud of my storytelling that kept you hooked all the way till here (blushes). If you are still not bored to death, scroll down to explore my journey!"
            image={useColorModeValue("/hobbies.webp", "/college_w.webp")}
            alt="Manipal"
            cw="50%"
            reverse
            height={300}
            width={455}
          />
        </Box>
      </Flex>
      <Flex alignItems="center" direction="column">
        <Heading as="h3" size="2xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: b,
              zIndex: -1,
            }}
          >
            My Journey
          </Text>
        </Heading>
        <VerticalTimeline lineColor={b}>
          <TimelineElement
            icon={<BiCodeAlt />}
            location="Chennai"
            bg="#149414"
            heading="Started Programming"
            date="2015"
            description="Started Learning to code with C (Let Us C) and HTML/CSS (W3Schools)"
          />
          <TimelineElement
            icon={<FaWordpressSimple />}
            location=""
            bg="#21759b"
            heading="WordPress Development"
            date="2016"
            description="Built a website for the student-run sustainability startup Pratyutpanna at our school and later, blogs for keeping in touch with my friends as I was leaving Chennai for a new city."
          />
          <TimelineElement
            icon={<GiCircuitry />}
            location=""
            bg="#f6ab3c"
            heading="Circuit Design"
            date="2017"
            description="Started designing a handheld metal detector with the 555 timer IC and a bunch of passive components and thakfully, my dad decided to hire a private tutor who taught me how to read circuit diagrams and solder the components on to a GPCB."
          />
          <TimelineElement
            icon={<CHI src="https://static-asset.inc42.com/sp-robotics-works.png" />}
            location="Bangalore"
            bg="#ff9bd3"
            heading="SP Robotic Works"
            date="2018"
            description="A local maker lab where I worked with Arduino development boards and Raspberry Pi SBCs to build robots and IoT prototypes by interfacing several sensors, actuators and communication modules."
          />
          <TimelineElement
            icon={<CHI src="https://ncc.highereduhry.ac.in/Images/NCCLogo.png" />}
            location="National Cadet Corps"
            heading="1 Karnataka Battalion"
            date="2018-19"
            description="Served as cadet over two years in the youth wing of the Indian Armed Forces, the largest youth organization in the world. Developed an appreciation for defence personnel across the world and the international relations/geopolity of India."
          />
          <TimelineElement
            icon={<SiCoursera />}
            location="Cousera"
            bg="#0056d2"
            heading="nand2tetris"
            date="2019"
            description="Stumbled upon a bunch of MOOCs that I got super OCDed about, most notably the nand2tetris course, a two-part series about building a computer in a virtual environment: straight from the nand gate to building the entire operating system using a dedicated machine lanugage the instructors call Hack."
          />
          <TimelineElement
            icon={<CHI src="/xesbi.webp" />}
            location="Bangalore"
            bg="#ffffff"
            heading="Xesbi"
            date="2020"
            description="Attended a pretty hands-on workshop on training wakeword recognition models using TensorFlow and Keras organised by Xesbi Systems, a startup making programmable FPGAs. Bought their development board and built a GPIO-enabled voice assistant using the Google Cloud NLP service and the AWS Poly TTS API over HTTP and UART which won the second prize at the year's science fair."
          />
          <TimelineElement
            icon={<CHI src="https://m.media-amazon.com/images/I/41MB6mjFGdL.jpg" />}
            location="Remote"
            bg="#ffffff"
            heading="The Teen Business Podcast"
            date="2020"
            description="After auditing the visual design specialization offered by calarts on Coursera, I got the perfect chance to test my skills when a school alumnus reached out to me to build the brand kit and handle social media presence for a podcast he started, inviting teen entrepreuners to talk about their insightful journeys."
          />
          <TimelineElement
            icon={<CHI src="https://www.isola-group.com/wp-content/uploads/Chinese-Flag-Circle-1400x0-c-default.png" />}
            location="AnonOps"
            bg="#ee1c25"
            heading="Hacking the Chinese Military"
            date="2020"
            description="I spent the lockdown playing Minecraft, learning uhh penetration testing and hanging out in discord servers. When the Galwan conflict happened, Anonymous had an operation targeting the CPC government in reponse to their oppression of the Uyghurs and I stepped in with all guns blazing: managed to deface 81.cn and lock the Chinese admins out haha"
          />
          <TimelineElement
            icon={<FaReact />}
            location="Aspire Technologies"
            bg="#61DBFB"
            heading="React and JS"
            date="2020"
            description="Attended yet another remote React.js series along with dad, where I picked up a lot about Router and Hooks while also learning JS in quite some depth, DOM manipulation, jQuery and GSAP included."
          />
          <TimelineElement
            icon={<CHI src="https://www.sfsicse.com/images/College_Logo.png" />}
            location="SFS Public School"
            bg="#000000"
            heading="Improvisation of Nuclear Reactors"
            date="2021"
            description="In partial fulfilment of our Physics course requirements, I wrote a paper on utilizing Direct Energy Conversion (DEC) and the Seebeck Effect to improve the efficiency of nuclear reactors which I felt underwent a very lossy conversion of energy from chemical, thermal, mechanical to finally generating electricity. Also discussed the structure of the Sandia laboratories' DEC prototype in the paper."
          />
          <TimelineElement
            icon={<CHI src="/flatcalc.webp" />}
            location=""
            bg="#ffffff"
            heading="FlatCalc"
            date="2021"
            description="In partial fulfilment of our CS course requirements, I designed a TUI Java application designed to provide an accurate budget estimate to real estate customers who are bogged down by jargons and hidden costs. Wrote decoupled code, implementing SOLID principles and OOPS concepts like polymorphism and inheritance."
          />
          <TimelineElement
            icon={<CHI src="https://akashinternationalschool.com/wp-content/uploads/2023/03/ICSE-150x150.png" />}
            location="SFS Public School"
            bg="#5865F2"
            heading="ICSE Computer Science"
            date="2018-21"
            description="Did a lot of object-oriented programming (OOPs) coursework in Java, scoring a perfect 100 in the sophomore-year standardized examination, which Indians affectionately call the boards."
          />
          <TimelineElement
            icon={<CHI src="https://lh3.googleusercontent.com/gbNv8gI3GPf8f9AEzohjYpCOl_JFW0sq0cF6olJbZthkwQeYBtv077SNU1fVL0C71cg=s180" />}
            location="Remote"
            bg="#f44d1d"
            heading="MyCaptain"
            date="2021"
            description="Another founder onboarded be to join her amazing dev team, where I worked on their responsive webapp using React, GraphQL and Moment JS, with Google Analytics for (you guessed it) analytics, Vercel for CI/CD, implementing interaction design principles I picked up in an UI/UX specialization discovered on (you guessed it again) Coursera."
          />
          <TimelineElement
            icon={<CHI src="https://images.collegedunia.com/public/image/institute/logo_1606901122download%20(1).jfif?h=78.11&w=78.11&mode=stretch" />}
            location="Aspire Technologies"
            bg="#ff9bd3"
            heading="Data Science and Analytics"
            date="2021"
            description="Generated business intelligence insights using a bunch of Python libraries like numpy, pandas, matplotlib and BI software like Tableau, PowerBI and Infogram."
          />
          <TimelineElement
            icon={<SiFlutter />}
            location="Bangalore"
            bg="#0468d7"
            heading="Project fAte"
            date="2022"
            description="A friend started a teen-run non-profit to help excess food wasted in commercial establishments reach hungry street dogs across the city and I led the app dev for him, organizing a bunch of 9 teens across 7 time zones to build a cross-platform app using Flutter and Google Maps API."
          />
          <TimelineElement
            icon={<CHI src="https://alexandraawe.weebly.com/uploads/1/0/1/0/101020644/published/logo.jpeg?1515974294" />}
            location="Christ Junior College"
            bg="#000"
            heading="Junior Social Scientist Conference"
            date="2022"
            description="Co-authored a paper with a junior under the guidance of my humanities faculty on the resurgence of India, both as an economy and a democracy for the conference in title, which earned us the Outstanding Presentation award from the judging panel."
          />
          <TimelineElement
            icon={<CHI src="https://www.postoast.com/wp-content/uploads/2019/07/motto-of-Delhi-Public-School-Service-Before-Self.jpg" />}
            location="DPS North"
            bg="#000"
            heading="Rotating Space Station Prototype"
            date="2022"
            description="Developed a rotating wheel space station prototype, which involved chemical process engineering and a bunch of explosions to synthesis the fuel in our chemistry lab and a lot of strucutral design to ensure the fuel cannister placement and chassis design such that we could keep it spinning for the longest time without reigniting the cannisters despite the aerodynamic drag."
          />
          <TimelineElement
            icon={<BiCodeAlt />}
            location="SFS Public School"
            bg="#805ed2"
            heading="ISC Computer Science"
            date="2021-23"
            description="Did a ton of coursework in Digital Logic Synthesis and Hardware Implementation, along with Statistical Methods and Data Structures & Algorithms in Java, scoring a 99 in my senior year examinations, equivalent to the IBDP"
          />
          <TimelineElement
            icon={<CHI src="https://i2.wp.com/v.fastcdn.co/u/2990d1d3/26382126-0-Manah.png" />}
            location="Manipal"
            bg="#ffffff"
            heading="Manipal Institute of Technology"
            date="2023"
            description="Started my undergraduate studies as an Electrical and Electronics Engineering freshman at MIT, Manipal. Joined the core/working commitees of all the major student organizations on campus including IEEE, ACM, GDSC, ASME, IAESTE, IECSE, ISA, IEE&C and these organizations known as student projects: a solar racing car team contesting in the World Solar Challenge held biennally in an Australia, a CTF team which regularly emerges as India's topmost performer, and an autonomous vehicle team that contests in the Intelligent Ground Vehicle Competiton hosted by the Oakland University of Michigan, USA. "
          />
          <TimelineElement
            icon={<CHI src="https://dms.mydukaan.io/original/webp/media/c7a8700c-4a66-4956-806f-9a35db7b1b80.png" />}
            location="Manipal Updates"
            bg="#0a549a"
            heading="Graphic Design"
            date="2023"
            description="Helped launch and in some cases, manage social media presence for local businesses, which involved graphic design, digital marketing and social media management."
          />
          <TimelineElement
            icon={<CHI src="https://media.licdn.com/dms/image/D4D0BAQFNNw_EWsB7rw/company-logo_200_200/0/1698148055364?e=1727308800&v=beta&t=k8bLVWLmo0RUZyfS4PIoelsivNFQ1qVsqqQ1M4oXcPM" />}
            location="Kraftr"
            bg="#fcd8b6"
            heading="Business Strategy"
            date="2023"
            description="Joined a startup being incubated at the in-house incubation centre at MIT, which sources fashion deadstock from major denim manufacturers and upcycles them into shoes and other fashion accessories."
          />
          <TimelineElement
            icon={<CHI src="https://media.licdn.com/dms/image/D4D0BAQG2YRqggziZXQ/company-logo_200_200/0/1719257242555/gramhealth_logo?e=1727308800&v=beta&t=cr-AMZem3ZLcnT42Zl0ycVDUuBXFFFDKwikDu2wND3I" />}
            location="GramHealth"
            bg="#5d6dbe"
            heading="UI/UX Design"
            date="2023"
            description="Delivered high fidelity wireframes and prototypes for the web and mobile apps of GramHealth - another incubated startup that aims to implement an unified health ID that can be synced across several hospital chain, saving tons of precious time by giving access to healthcare professionals without the need for patients to reiterate their medical histories at each hospital."
          />
          <TimelineElement
            icon={<CHI src="/ohr.webp" />}
            location="Open Horizon Robotics"
            bg="#fcd8b6"
            heading="Corporate Liasion & Public Outreach"
            date="2023"
            description="Handled the external relations of Open Horizon Robotics, a community dedicated to developing and increasing the adoption of open-source robotics resources and supplying a platform for productive collaboration and dissemination of information in universities across the nation."
          />
          <TimelineElement
            icon={<CHI src="https://yt3.googleusercontent.com/9pe499Ez-QsD-KlUV1BodwnBffsd5PnUACu4vhfz63I1IKaKi2L4YICjM_kUX5LEOFfFJfjr0Q=s176-c-k-c0x00ffffff-no-rj" />}
            location="Project Manas"
            bg="#fcd8b6"
            heading="Taskphase Member"
            date="2023"
            description="I was a part of the sensing and automation taskphase, where I learnt tons about sensor fusion, localization & mapping for autonomous vehicles, ROS2, Lidars, Simulink, Motors and Control Theory."
          />
          <TimelineElement
            icon={<CHI src="https://scontent.fblr14-1.fna.fbcdn.net/v/t39.30808-1/299608679_569327604979984_7164348980644291815_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=qLU3PU1w5NEQ7kNvgHsZoSn&_nc_ht=scontent.fblr14-1.fna&oh=00_AYDHfDaEu6lQfRMXnUYsIg_1M4KNvuG3LVR4aGIZ6EI91Q&oe=668373DF" />}
            location="Cryptonite"
            bg="#fcd8b6"
            heading="Taskphase Member"
            date="2023"
            description="I participated in CTFs organized by TryHackMe and HackTheBox, primarily focussing on penetrating machines with web exploitation and reverse engineering."
          />
          <TimelineElement
            icon={<CHI src="/solarmobil.webp" />}
            location="SolarMobil"
            bg="#ffffff"
            heading="System Engineer"
            date="2023"
            description="I work on the automotive electronics of the next iteration of our solar racing car, which includes interfacing the battery management system (BMS), maximum power point tracker (MPPT) and Motor Controller with the onboard Arm Cortex M7-based STM32 evaluation board, building the steering-mounted display and developing the telemetry & tracking systems."
          />
          <TimelineElement
            icon={<CHI src="/moss.webp" />}
            location="Manipal Open Source Society"
            bg="#fcd8b6"
            heading="Open Source Hardware Workshop"
            date="2024"
            description="I conducted a workshop on the power and reach of open source projects, focusing on hardware in particular - from hobbyist electronics like the Arduino and Sparkfun Electronics to full-blown VLSI workflows with OpenLANE and Skywater."
          />
        </VerticalTimeline>
        <Heading as="h3" size="2xl">
          <Text
            as="span"
            position="relative"
            _before={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              top: 1,
              left: 0,
              bg: b,
              zIndex: -1,
            }}
          >
            The journey continues...
          </Text>
        </Heading>
      </Flex>
    </Box>
  );
};

export default About;
