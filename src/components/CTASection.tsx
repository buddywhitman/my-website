import { Box, Button, Code, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/buddywhitman/my-website";

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Flex marginY={4} justifyContent="center" gap={2}>
        <Link
          aria-label="Deploy to Vercel"
          target="_blank"
          href="https://vercel.com/import/git?s=https://github.com/buddywhitman/my-website"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          target="_blank"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/buddywhitman/my-website"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>

      <Box marginY={2}>
        <Code>npx degit sozonome/nextarter-chakra {"<YOUR_APP_NAME>"}</Code>
        <br />

        <Link href="https://github.com/sozonome/nextarter-chakra/generate" target="_blank">
          <Button
            marginTop={2}
            size="sm"
          >
            Use This Template
          </Button>
        </Link>
      </Box>

      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Link href={repoLink} target="_blank">
          <Button
            size="sm"
          >
            <AiFillGithub /> Open in Github
          </Button>
        </Link>
        <Link href={repoLink} target="_blank">
          <Image
            align="center"
            src="https://img.shields.io/github/stars/sozonome/nextarter-chakra?style=social"
            alt="github stars"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
