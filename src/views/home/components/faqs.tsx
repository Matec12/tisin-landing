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

const HomeFAQsWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(32),
  paddingBottom: theme.spacing(32)
}));

const FAQs = [
  {
    question: "What is TISIN Therapy App?",
    answer:
      "TISIN Therapy App is a platform that connects individuals seeking mental and emotional support with compassionate, non-certified therapist stand-ins."
  },
  {
    question: "How do I sign up for TISIN Therapy App?",
    answer:
      "You can sign up by clicking the Get Started button, and following the registration process."
  },
  {
    question: "Is there a cost to use TISIN Therapy App?",
    answer:
      "TISIN Therapy App offers both free and paid plans. The free plan provides basic features, while the paid plan offers additional services and benefits."
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
    <HomeFAQsWrapper>
      <Container>
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
          <Typography variant="displayXl" color="grey.900" fontWeight={600}>
            Frequently <br /> Asked Questions
          </Typography>
        </Box>
        <Box sx={{ mt: 12, maxWidth: 600, mx: "auto" }}>
          {FAQs.map((faq, index) => {
            const panelId = `panel${index + 1}`;
            const isExpanded = expanded === panelId;

            return (
              <Accordion
                key={index}
                expanded={isExpanded}
                onChange={handleChange(panelId)}
              >
                <AccordionSummary
                  expandIcon={
                    <Icon icon={isExpanded ? "tabler:minus" : "tabler:plus"} />
                  }
                  aria-controls={`${panelId}-content`}
                  id={`${panelId}-header`}
                >
                  <Typography variant="textXl" color="grey.700">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="textMd" color="grey.600">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </HomeFAQsWrapper>
  );
};

export { HomeFAQs };
