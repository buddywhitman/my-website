import {
  Box,
  Text,
  SimpleGrid,
  Spinner,
  Flex,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { FaCodeBranch, FaServer, FaTerminal } from "react-icons/fa";
import MotionBox from "components/motion/Box";
import GithubProject from "components/GithubProject";

const EASE = [0.23, 1, 0.32, 1] as const;

const SectionHead = ({ kicker, title }: { kicker: string; title: string }) => (
  <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} mb={{ base: 6, md: 8 }}>
    <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb="2">{kicker}</Text>
    <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="600" color="var(--synced-text)" letterSpacing="-0.02em" lineHeight="1">
      {title}
    </Text>
  </MotionBox>
);

const OpenSource = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [orgCount, setOrgCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const resp = await fetch("/api/get-repos");
        const toks = await resp.json();
        if (toks.status && toks.data) {
          const owned = toks.data.repositories?.nodes || [];
          const contributed = toks.data.repositoriesContributedTo?.nodes || [];
          
          // Merge and de-duplicate by nameWithOwner
          const all = [...owned, ...contributed];
          const uniqueMap = new Map();
          all.forEach((r: any) => {
            if (r && r.nameWithOwner) {
              uniqueMap.set(r.nameWithOwner.toLowerCase(), r);
            }
          });
          setRepos(Array.from(uniqueMap.values()));

          if (toks.data.contributionsCollection) {
            setStats(toks.data.contributionsCollection);
          }
          if (toks.data.organizations) {
            setOrgCount(toks.data.organizations.totalCount);
          }
        }
      } catch (e) {
        console.error("GitHub fetch failed", e);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  const LLM_REPOS = ["vidur", "vllm", "sglang", "sglang-jax", "aiter"];
  const DEV_REPOS = ["dist-gcs-pdf-processing", "hr_agent", "WakeWord_Recognition", "VaxBot"];
  const _REPOS = ["risc-v-core", "solarmobil/stm32h750b-dk"];

  const matchesCategory = (repo: any, list: string[]) => {
    if (!repo || !repo.name) return false;
    const name = repo.name.toLowerCase();
    const nameWithOwner = repo.nameWithOwner?.toLowerCase() || "";
    return list.some(item => {
      const target = item.toLowerCase();
      return name === target || nameWithOwner.endsWith("/" + target);
    });
  };

  const llmCategoryRepos = repos.filter(r => matchesCategory(r, LLM_REPOS));
  const devCategoryRepos = repos.filter(r => matchesCategory(r, DEV_REPOS));
  const linuxCategoryRepos = repos.filter(r => matchesCategory(r, LINUX_REPOS));

  // Fallback data in case API fetches nothing or is loading
  const fallbackLLM = [
    { name: "sglang", nameWithOwner: "buddywhitman/sglang", description: "SGLang is a high-performance serving framework for large language models and multimodal models.", url: "https://github.com/buddywhitman/sglang", stargazerCount: 0, forkCount: 0, primaryLanguage: { name: "Python", color: "#3572A5" } },
    { name: "vllm", nameWithOwner: "buddywhitman/vllm", description: "A high-throughput and memory-efficient inference and serving engine for LLMs", url: "https://github.com/buddywhitman/vllm", stargazerCount: 0, forkCount: 0, primaryLanguage: { name: "Python", color: "#3572A5" } },
    { name: "sglang-jax", nameWithOwner: "buddywhitman/sglang-jax", description: "JAX backend for SGL serving stack.", url: "https://github.com/buddywhitman/sglang-jax", stargazerCount: 0, forkCount: 0, primaryLanguage: { name: "Python", color: "#3572A5" } },
    { name: "aiter", nameWithOwner: "buddywhitman/aiter", description: "AI Tensor Engine for ROCm AMD GPUs.", url: "https://github.com/buddywhitman/aiter", stargazerCount: 0, forkCount: 0, primaryLanguage: { name: "Python", color: "#3572A5" } }
  ];

  const fallbackDev = [
    { name: "dist-gcs-pdf-processing", nameWithOwner: "buddywhitman/dist-gcs-pdf-processing", description: "Distributed Multilingual Document Processing System Built for XX-TB Scale with persistent error logging and resume capabilities.", url: "https://github.com/buddywhitman/dist-gcs-pdf-processing", stargazerCount: 1, forkCount: 1, primaryLanguage: { name: "Python", color: "#3572A5" } },
    { name: "schedul.io", nameWithOwner: "buddywhitman/schedul.io", description: "An automatic task and event scheduler utilizing LLMs and message parsing.", url: "https://github.com/buddywhitman/schedul.io", stargazerCount: 0, forkCount: 0, primaryLanguage: { name: "Python", color: "#3572A5" } }
  ];

  const fallbackLinux = [
    { name: "risc-v-core", nameWithOwner: "buddywhitman/risc-v-core", description: "A RISC-V RV32I core implemented using Verilog & SystemVerilog.", url: "https://github.com/buddywhitman/risc-v-core", stargazerCount: 0, forkCount: 0, primaryLanguage: { name: "Verilog", color: "#b2b7f8" } },
  ];

  const finalLLM = loading || llmCategoryRepos.length === 0 ? fallbackLLM : llmCategoryRepos;
  const finalDev = loading || devCategoryRepos.length === 0 ? fallbackDev : devCategoryRepos;
  const finalLinux = loading || linuxCategoryRepos.length === 0 ? fallbackLinux : linuxCategoryRepos;

  return (
    <Box pb={20}>
      {/* HERO */}
      <Box position="relative" minH={{ base: "58vh", md: "66vh" }} display="flex" flexDirection="column" justifyContent="flex-end" pb={{ base: 8, md: 12 }} overflow="hidden">
        <Box className="blob blob-alt" top="0%" left="-6%" w={{ base: "50vw", md: "34vw" }} h={{ base: "50vw", md: "34vw" }} bg="radial-gradient(circle, var(--c-violet) 0%, transparent 68%)" opacity="0.16" />
        <Box className="blob" bottom="-5%" right="-6%" w={{ base: "45vw", md: "30vw" }} h={{ base: "45vw", md: "30vw" }} bg="radial-gradient(circle, var(--c-teal) 0%, transparent 68%)" opacity="0.18" style={{ animationDelay: "5s" }} />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>04 — CONTRIBUTE & SHARE</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "17vw", md: "13vw", lg: "11vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">Open</Box><Box as="span" className="tiedye-text"> Source</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="660px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            I actively contribute to high-performance inference libraries, design self-hosted developer toolings, and tinker with operating system kernels.
          </Text>
        </Box>
      </Box>

      {/* GITHUB STATS PANEL */}
      {stats && (
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          mb={12}
          p={{ base: 6, md: 8 }}
          border="1px solid"
          borderColor="var(--synced-border)"
          borderRadius="2xl"
          bg="var(--synced-surface)"
          style={{ backdropFilter: "blur(10px)" }}
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" top="-40%" right="-10%" w="300px" h="300px" bg="radial-gradient(circle, var(--c-violet) 0%, transparent 70%)" opacity="0.08" filter="blur(50px)" pointerEvents="none" />
          <Text className="mono-label" color="var(--accent)" mb={6} fontSize="10px">GITHUB CONTRIBUTIONS & ACTIVITY</Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap={6}>
            <Box>
              <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="var(--synced-text)" lineHeight="1">
                {stats.contributionCalendar?.totalContributions || 0}
              </Text>
              <Text className="mono-label" color="var(--synced-muted)" mt="1" fontSize="9px">Total Contributions</Text>
            </Box>
            <Box>
              <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="var(--synced-text)" lineHeight="1">
                {stats.totalCommitContributions || 0}
              </Text>
              <Text className="mono-label" color="var(--synced-muted)" mt="1" fontSize="9px">Commits Pushed</Text>
            </Box>
            <Box>
              <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="var(--synced-text)" lineHeight="1">
                {stats.totalPullRequestContributions || 0}
              </Text>
              <Text className="mono-label" color="var(--synced-muted)" mt="1" fontSize="9px">Pull Requests Merged</Text>
            </Box>
            <Box>
              <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="var(--synced-text)" lineHeight="1">
                {stats.totalIssueContributions || 0}
              </Text>
              <Text className="mono-label" color="var(--synced-muted)" mt="1" fontSize="9px">Issues Resolved</Text>
            </Box>
            <Box>
              <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="700" color="var(--synced-text)" lineHeight="1">
                {orgCount || 0}
              </Text>
              <Text className="mono-label" color="var(--synced-muted)" mt="1" fontSize="9px">Organizations</Text>
            </Box>
          </SimpleGrid>
        </MotionBox>
      )}

      {loading && (
        <Flex justify="center" align="center" py={12}>
          <Spinner color="var(--accent)" size="xl" />
        </Flex>
      )}

      {/* REPOSITORIES BY CATEGORY */}
      <VStack gap={20} align="stretch" pt={12}>
        {/* LLMs & Inference Optimization */}
        <Box>
          <Flex justify="space-between" align="baseline" borderBottom="1px solid var(--synced-border)" pb={4} mb={6}>
            <SectionHead kicker="FAST GENERATION" title="LLMs & Inference Optimization" />
            <Icon as={FaCodeBranch} color="var(--accent)" boxSize={5} />
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {finalLLM.map((repo) => (
              <GithubProject key={repo.nameWithOwner} data={repo as any} />
            ))}
          </SimpleGrid>
        </Box>

        {/* Developer Tools & Self-Hosting */}
        <Box>
          <Flex justify="space-between" align="baseline" borderBottom="1px solid var(--synced-border)" pb={4} mb={6}>
            <SectionHead kicker="PRODUCTIVITY ENGINE" title="Developer Tools & Self-Hosting" />
            <Icon as={FaServer} color="var(--accent)" boxSize={5} />
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {finalDev.map((repo) => (
              <GithubProject key={repo.nameWithOwner} data={repo as any} />
            ))}
          </SimpleGrid>
        </Box>

        {/* Linux Kernel & Ecosystem */}
        <Box>
          <Flex justify="space-between" align="baseline" borderBottom="1px solid var(--synced-border)" pb={4} mb={6}>
            <SectionHead kicker="DOWN TO METAL" title="Embedded & VLSI" />
            <Icon as={FaTerminal} color="var(--accent)" boxSize={5} />
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {finalLinux.map((repo) => (
              <GithubProject key={repo.nameWithOwner} data={repo as any} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default OpenSource;
