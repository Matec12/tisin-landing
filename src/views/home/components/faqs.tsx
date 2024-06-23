"use client";

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Container from "@/components/mui/container";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Icon from "@/components/icon";
import SlideUp from "@/components/animation/slide-up";
import GrowIn from "@/components/animation/grow-in";

const HomeFAQsWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(32),
  paddingBottom: theme.spacing(32),
  backgroundImage: `url("/backgrounds/faqs.png")`,
  backgroundColor: theme.palette.primary[700],
  backgroundSize: "auto",
  backgroundAttachment: "fixed",
  backgroundPosition: "center"
}));

const FAQs = [
  {
    question: "What is TISIN Therapy App?",
    answer:
      "TISIN Therapy App is a platform that connects individuals seeking mental and emotional support with compassionate, non-certified therapist stand-ins."
  },
  {
    question: "How do I access TISIN Therapy App?",
    answer:
      "You can access TISIN Therapy App through any web browser on your device. For a more app-like experience, add it to your home screen from your browser’s settings."
  },
  {
    question: "Is there a cost to use TISIN Therapy App?",
    answer: "TISIN Therapy App offers only paid plans."
  },
  {
    question: "Who are the therapist stand-ins?",
    answer:
      "Therapist stand-ins are empathetic listeners who have undergone training to provide non-certified support and guidance to users."
  },
  {
    question: "How is my privacy protected?",
    answer:
      "TISIN Therapy App ensures all user data is encrypted and follows strict privacy policies to protect your information."
  },
  {
    question: "Can I choose my therapist stand-in?",
    answer:
      "Yes, you can browse through profiles and choose a therapist stand-in that you feel comfortable with."
  },
  {
    question: "What kind of issues can I discuss?",
    answer:
      "You can discuss a variety of issues, including stress, anxiety, relationship problems, and other everyday challenges."
  },
  {
    question: "How do I schedule a session?",
    answer:
      "You can schedule a session through the app by selecting a convenient time and date from your chosen therapist stand-in's availability."
  },
  {
    question: "What if I need urgent help?",
    answer:
      "TISIN Therapy App is not for emergencies. If you need urgent help, please contact a certified professional or emergency services."
  },
  {
    question: "Can I provide feedback?",
    answer:
      "Yes, you can provide feedback after each session to help improve the quality of service."
  }
];

const HomeFAQs = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <HomeFAQsWrapper id='faqs'>
      <Container>
        <SlideUp>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              textAlign: "center",
              maxWidth: 600
            }}
          >
            <Typography variant="displayLg" color="primary.15" fontWeight={600}>
              Frequently <br /> Asked Questions
            </Typography>
          </Box>
        </SlideUp>
        <Box sx={{ mt: 12, maxWidth: 600, mx: "auto" }}>
          {FAQs.map((faq, index) => {
            const panelId = `panel${index + 1}`;
            const isExpanded = expanded === panelId;

            return (
              <GrowIn key={index}>
                <Accordion
                  expanded={isExpanded}
                  onChange={handleChange(panelId)}
                  sx={{
                    border: (theme) =>
                      `2px solid ${theme.palette.primary[700]}`,
                    backgroundColor: (theme) => theme.palette.primary[15]
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Icon
                        icon={isExpanded ? "tabler:minus" : "tabler:plus"}
                        sx={{ color: "primary.700" }}
                      />
                    }
                    aria-controls={`${panelId}-content`}
                    id={`${panelId}-header`}
                  >
                    <Typography
                      variant="textXl"
                      fontWeight={600}
                      color="primary.700"
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="textMd" color="grey.600">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </GrowIn>
            );
          })}
        </Box>
      </Container>
    </HomeFAQsWrapper>
  );
};

export { HomeFAQs };
