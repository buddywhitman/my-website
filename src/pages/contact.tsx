 
import {
  Box, Text, Input, Field, Textarea, Flex, VStack, HStack, Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { FaKeybase } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsArrowUpRight } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import SchemaMarkup from "components/SchemaMarkup";

const MotionBox = motion(Box) as any;
const EASE = [0.23, 1, 0.32, 1] as const;

const ChannelRow = ({ icon: Icon, label, handle, url }: { icon: any; label: string; handle: string; url: string }) => {
  const [h, setH] = useState(false);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <Flex align="center" justify="space-between" py="5" borderBottom="1px solid" borderColor="var(--synced-border)"
        style={{ paddingLeft: h ? "12px" : "0px", transition: "padding-left 280ms cubic-bezier(0.23,1,0.32,1)" }}>
        <HStack gap="4">
          <Icon size={20} style={{ color: h ? "var(--accent)" : "var(--synced-muted)", transition: "color 200ms ease" }} />
          <Box>
            <Text className="mono-label" fontSize="9px" color="var(--synced-muted)">{label}</Text>
            <Text className="editorial" fontSize={{ base: "xl", md: "2xl" }} color="var(--synced-text)" lineHeight="1.1">{handle}</Text>
          </Box>
        </HStack>
        <Box color={h ? "var(--accent)" : "var(--synced-muted)"} style={{ transform: h ? "translate(4px,-4px)" : "none", transition: "all 240ms cubic-bezier(0.23,1,0.32,1)" }}>
          <BsArrowUpRight size={18} />
        </Box>
      </Flex>
    </a>
  );
};

interface FormValues {
  name: string;
  email: string;
  message: string;
  _honey?: string;
}

const Contact = () => {
  const schema = { "@context": "https://schema.org", "@type": "Person", name: "Pulkit Kumar", email: "pulkit.talks@gmail.com" };
  const fieldStyle = {
    background: "var(--synced-surface)",
    border: "1px solid var(--synced-border)",
    borderRadius: "12px",
    color: "var(--synced-text)",
  } as React.CSSProperties;

  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      formData.append("_captcha", "false");
      formData.append("_template", "table");
      formData.append("_subject", `New Contact Request: ${data.name}`);

      const response = await fetch("https://formsubmit.co/ajax/pulkit.talks@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage("Failed to send request. Please try again or contact us directly.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box pb={20}>
      <SchemaMarkup data={schema} />

      {/* HERO */}
      <Box position="relative" pt={{ base: 8, md: 14 }} pb={{ base: 10, md: 16 }} overflow="hidden">
        <Box className="blob blob-alt" top="-30%" right="0%" w={{ base: "55vw", md: "32vw" }} h={{ base: "55vw", md: "32vw" }} bg="radial-gradient(circle, var(--c-magenta) 0%, transparent 68%)" opacity="0.16" />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>SAY HELLO</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "16vw", md: "12vw", lg: "10vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">Let&apos;s </Box><Box as="span" className="tiedye-text">talk.</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="600px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            Hiring, collaborating, arguing about whether AI is going to be good for us — all welcome.
            I read everything. The fastest way to me is the form, but pick whatever channel you like.
          </Text>
        </Box>
      </Box>

      {/* GRID */}
      <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 12, lg: 16 }} align="flex-start">
        {/* Channels */}
        <MotionBox flex="1" w="full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
          <Text className="mono-label" color="var(--accent)" fontSize="10px" mb="6">DIRECT CHANNELS</Text>
          <ChannelRow icon={MdEmail} label="EMAIL — FASTEST" handle="pulkit.talks@gmail.com" url="mailto:pulkit.talks@gmail.com" />
          <ChannelRow icon={BsLinkedin} label="LINKEDIN" handle="in/buddywhitman" url="https://www.linkedin.com/in/buddywhitman" />
          <ChannelRow icon={BsGithub} label="GITHUB" handle="@buddywhitman" url="https://github.com/buddywhitman" />
          <ChannelRow icon={SiDiscord} label="DISCORD" handle="buddywhitman" url="https://discord.com/users/732152359882457138" />
          <ChannelRow icon={FaKeybase} label="KEYBASE — PGP" handle="buddywhitman" url="https://keybase.io/buddywhitman" />
        </MotionBox>

        {/* Form */}
        <MotionBox flex="1" w="full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
          <Box position="relative" p={{ base: 7, md: 10 }} borderRadius="3xl" border="1px solid" borderColor="var(--synced-border)" bg="var(--synced-surface)" overflow="hidden" style={{ backdropFilter: "blur(10px)" }}>
            <Box position="absolute" bottom="-40%" right="-20%" w="280px" h="280px" bg="radial-gradient(circle, var(--c-violet) 0%, transparent 70%)" opacity="0.1" filter="blur(45px)" pointerEvents="none" />
            {submitStatus === "success" ? (
              <VStack gap="6" py={8} textAlign="center" position="relative" zIndex="1" align="center">
                <Icon as={BiCheckCircle} h={16} w={16} color="var(--accent)" />
                <Text className="editorial" fontSize="2xl" fontWeight="600" color="var(--synced-text)">
                  Message Sent!
                </Text>
                <Text fontSize="sm" color="var(--synced-muted)" maxW="320px" lineHeight="relaxed">
                  Thank you for reaching out. I will read your message and get back to you as soon as possible.
                </Text>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="press-btn"
                  style={{
                    fontFamily: "'Space Grotesk','Inter',sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    border: "1px solid var(--synced-border)",
                    cursor: "pointer",
                    background: "transparent",
                    color: "var(--synced-text)",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    marginTop: "16px",
                  }}
                >
                  Send another message
                </button>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack align="stretch" gap="6" position="relative" zIndex="1">
                  <Text className="editorial" fontSize="2xl" fontWeight="600" color="var(--synced-text)">Drop a line</Text>
                  
                  {submitStatus === "error" && (
                    <Box
                      p="4"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="var(--c-magenta)"
                      bg="rgba(219, 39, 119, 0.1)"
                      color="var(--synced-text)"
                      fontSize="sm"
                    >
                      <HStack gap="3" align="flex-start">
                        <Icon as={FiAlertCircle} color="var(--c-magenta)" w={5} h={5} mt="0.5" />
                        <Text>{errorMessage || "Failed to send request. Please try again."}</Text>
                      </HStack>
                    </Box>
                  )}

                  {/* Honeypot field */}
                  <input
                    {...register("_honey")}
                    type="text"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Field.Root>
                    <Field.Label><Text className="mono-label" fontSize="9px" color="var(--synced-muted)">YOUR NAME</Text></Field.Label>
                    <Input {...register("name", { required: true })} placeholder="Who's writing?" style={fieldStyle} _placeholder={{ color: "var(--synced-muted)" }} _focus={{ borderColor: "var(--accent)" }} />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label><Text className="mono-label" fontSize="9px" color="var(--synced-muted)">EMAIL</Text></Field.Label>
                    <Input type="email" {...register("email", { required: true })} placeholder="where I reach you" style={fieldStyle} _placeholder={{ color: "var(--synced-muted)" }} _focus={{ borderColor: "var(--accent)" }} />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label><Text className="mono-label" fontSize="9px" color="var(--synced-muted)">MESSAGE</Text></Field.Label>
                    <Textarea {...register("message", { required: true })} rows={5} placeholder="the pitch, the question, the rant…" style={fieldStyle} _placeholder={{ color: "var(--synced-muted)" }} _focus={{ borderColor: "var(--accent)" }} />
                  </Field.Root>
                  <button type="submit" className="press-btn" disabled={isSubmitting}
                    style={{
                      fontFamily: "'Space Grotesk','Inter',sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontSize: "0.78rem",
                      border: "none",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      background: "var(--accent)",
                      color: "#fff",
                      padding: "16px 24px",
                      borderRadius: "9999px",
                      width: "100%",
                      opacity: isSubmitting ? 0.6 : 1,
                      transition: "opacity 200ms ease",
                    }}>
                    {isSubmitting ? "Sending..." : "Send it →"}
                  </button>
                </VStack>
              </form>
            )}
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Contact;

