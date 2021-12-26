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
import { FaDiscord, FaRust, FaReact, FaEthereum } from "react-icons/fa";
import { ImPaintFormat } from "react-icons/im";
import { SiScratch, SiIbm } from "react-icons/si";
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
            text="I'm  a 17-year-old high school kid from Bangalore. I grew up in Chennai,  Delhi and Gurgaon before moving to Bangalore. I'm Hindu and Buddhist, and  generally enjoy Computer Science and Econ. I've always been fascinated  with Science and Maths, be it through topping my class in elementary  school or qualifying for the top 25 in Olympiads. With that  interest in STEM, my dad encouraged me to start coding early, and I  considered it a fun activity. My journey pivoted in the  8th Grade when I left my unconventional Experiential learning school in  Gurgaon to join NAFL in Bangalore. The stem culture here was awesome,  and I developed a great appreciation for Electronics and Programming. I  spent a ton of time tinkering with electronics, working with  microprocessors and circuits to make fun projects. As an IGCSE student I  explored interesting CS theory like Logic gates and Image Optimization  Algorithms. With my growing knowledge of python, making projects was  fun."
            image="/dagbot.png"
            height={600}
            cw="60%"
            width={600}
            alt="Dagbot logo"
            reverse={false}
          />
          <TextImage
            text="2020  threw a curveball. I watched summer plans dissapear as I looked for  hobbies to fill time. A Reddit community talked about discord bot  development, and intrigued, I dove in. I instantly fell in love  and slowly drove head first into the programming rabbit hole. Soon I  spent all my free time making websites, bots, and more. I started a  startup, volunteered for NGO's and even did a few internships and  freelance work. I was blown away by what I could make with code. Old  interests like Pokémon, crypto and f1 fell into my programming projects.  I knew I had found what I was passionate about, and I ran with that!  The Open-source community was so powerful, and all the amazing people  I've met on GitHub have inspired me to do more. "
            image="/gh.webp"
            alt="me lookig at graphs"
            reverse
            cw="70%"
            height={470}
            width={900}
          />
          <TextImage
            text="Apart  from programming, I'm a passionate environmentalist. I've collected  over 120kgs+ of e-waste for recycling and developed a software solution  to help people find e-waste centres. I'm into MUN, having founded NAFL's  MUN club and winning the Oxford MUN Singapore. As a self-proclaimed YA  novel aficionado, I can tear through a teen novel no matter how 'cringe'  and still love it! I'm also a passionate member of my school book club,  where I love the discussions we have on literature, philosophy,  society, and feminism. On the left is my favourite book: Paper Towns by John Green, it's a novel that I can always read when I'm  in a bad mood.."
            image="/papertowns.jpg"
            alt="Github homescreen"
            cw="50%"
            reverse={false}
            height={250}
            width={162}
          />
          <TextImage
            text="For unwinding, I love making memes to spread laughter but also start discussions on issues. Currently have over 80000 Reddit Karma.  I also run a fountain pen YouTube Channel, and Instagram page where I share photos and guides on pen maintenance! Fountain Pens are a huge passion of mine, and as a member of the Indian Fountain Pen Association, I'm happy to promote the hobby.  As a huge f1 fan, I watch every race, no matter the time or date. As part of my f1 love, I also work as a freelancer for Sportskeeda, writing f1 articles."
            image="/hobbies.png"
            alt="Github homescreen"
            cw="50%"
            reverse
            height={320}
            width={320}
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
            date="2011"
            description="Started Learning to code with Python (Udemy) and Javascript Animations (Khan Academy)"
          />
          <TimelineElement
            icon={<SiScratch />}
            location="New Delhi"
            bg="#f6ab3c"
            heading="Scratch Game Development"
            date="2015"
            description="Via School's hour of code and external classes I started making games in scratch. Mostly simple games, this developed an early intrest in code and taught me logical thuiking! "
          />

          <TimelineElement
            icon={<CHI src="https://i.imgur.com/oQODMmY.png" />}
            location="Bangalore- NAFL"
            bg="#ff9bd3"
            heading="IGCSE Computer Science"
            date="2018 - 2020"
            description="A* in IGCSE computer science with distinction. I learnt theory as well as practical coursework with python"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/8EFyuVt.png" />}
            location="Bangalore"
            bg="#5865F2"
            heading="IBM Proffesional Data Science Certificatio )"
            date="2020"
            description="Completed IBM's 9 part course on becoming a professional data scientist. Worked with pandas, sklearn, matplotlib and more to finish a capstone with interactive maps!"
          />
          <TimelineElement
            icon={<FaDiscord />}
            location="Bangalore"
            bg="#5865F2"
            heading="Discord Bot Development (discord.py, serenity.rs)"
            date="2020 - present"
            description="Discord bot development with the discord api. Initially started with discord.py, worked my way up and beame comfortable. Shifted to serenity with rust. Also made 8+ PR's and was an active contributor to the library"
          />
          <TimelineElement
            icon={<FaRust />}
            location=""
            bg="#f44d1d"
            heading="Learning Rust"
            date="2020 - present"
            description="After getting inspired, I picked up the rust programming language and slowly became proficient as I completed the rust book and made  few projects!"
          />
          <TimelineElement
            icon={<FaReact />}
            location=""
            bg="#67daf9"
            heading="Web Dev/MERN Stack"
            date="2020 - present"
            description="Started with basic web development stuff, slowly became comfortable with html, css, js. Worked with TS and became great with MERN!"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/0eaRcNu.png" />}
            location="Bangalore - MAIS"
            bg="#ff9bd3"
            heading="A Level Computer Science"
            date="2020 - 2022"
            description="Working on getting an A Level CS course. 2020-2021 year :A [top grade], predicted A* for 2021-2022. More advanced theory including python and java programming"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/vsOGsb2.png" />}
            location="remote"
            bg="#67daf9"
            heading="Znotes Internship"
            date="2020 - 2021"
            description="Started with some basic React Development, but full trasntioned to a role involving Python bot development and DevOps work. Contributed with a team on github"
          />
          <TimelineElement
            icon={<SiIbm />}
            location=""
            bg="#000"
            heading="IBM Internship"
            date="2020 - 2021"
            description="Worked with IBM and the NGO emancipaction to use IBM technology and help victims of human trafficing/child abuse get mental health help via a chatbot. Helped create chatbot with IBM watson and integrate into a website"
          />
          <TimelineElement
            icon={<CHI src="/dagpiw.png" />}
            location=""
            bg="#805ed2"
            heading="CEO/Founder Dagpi"
            date="2020 - present"
            description="Founder and CEO of Saas service dagpi that offers image manipulation at scale! AWS activate funded and over 500+ active users. Fully open source with stripe payments, microservices and kuerbnetes"
          />
          <TimelineElement
            icon={<ImPaintFormat />}
            location=""
            bg="#EB459E"
            heading="Theme Developer"
            date="2020 - present"
            description="Worked on themes for VSC, and Better Discord/Powercord. Themes have 100k+ downloads aldready!"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/wMdLsNB.png" />}
            location=""
            bg="#0a549a"
            heading="New Circuit Internship"
            date="2021"
            description="New Circuit is a development group that works with popular youtuber PewDiePie. As an intern I worked with them on odcumentation and typescript dev work."
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/Gt5OyfT.png" />}
            location=""
            bg="#fcd8b6"
            heading="Gifting a Life NGO Work"
            date="2021"
            description="Gifting a life NGO is an organisation that runs vaccine drives and has covid resource portals. I revamped the website and added whatsapp integrations."
          />
          <TimelineElement
            icon={<FaEthereum />}
            location=""
            bg="#5d6dbe"
            heading="Solidity + CryptoCurrency"
            date="2021-present"
            description="Learnt the solidity programming language and started developing crypto technology with web3 and the ethereum/binance chains. SLowly continuing"
          />
          <TimelineElement
            icon={<CHI src="https://i.imgur.com/NVcozFB.png" />}
            location=""
            bg="#fcd8b6"
            heading="Vitamin Coin"
            date="2021"
            description="Worked as a developer on an emerging crypto currency Vitc. Helped develop the discord and twitter tipbots for vitamin coin"
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
