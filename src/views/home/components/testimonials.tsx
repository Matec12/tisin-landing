"use client";

import React from "react";
import useCarouselCarousel from "embla-carousel-react";
import { styled } from "@mui/material/styles";
import Container from "@/components/mui/container";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "@/components/icon";
import SlideUp from "@/components/animation/slide-up";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from "@/components/carousel/arrow-button";

const HomeTestimonialsWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(32),
  paddingBottom: theme.spacing(32),
  backgroundImage: `url("/backgrounds/testimonials.svg")`,
  backgroundColor: theme.palette.primary[15],
  backgroundSize: "auto",
  backgroundPosition: "center"
}));

const CarouselWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: "75rem",
  margin: "0 auto",
  marginTop: theme.spacing(12)
}));

const CarouselViewport = styled(Box)<BoxProps>(({ theme }) => ({
  overflowX: "hidden",
  padding: theme.spacing(6, 0)
}));

const CarouselContainer = styled(Box)<BoxProps>(() => ({
  backfaceVisibility: "hidden",
  display: "flex",
  touchAction: "pan-y pinch-zoom",
  gap: 12
}));

const CarouselSlide = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  flex: "0 0 100%",
  minWidth: 0,
  padding: theme.spacing(12, 6),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.secondary[15],
  borderTop: `6px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[3],
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    flex: "0 0 50%"
  },
  [theme.breakpoints.up("xl")]: {
    flex: "0 0 33.33%"
  }
}));

const QuoteIconWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  zIndex: 999999,
  top: -25,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  padding: theme.spacing(1)
}));

const testimonials = [
  {
    quote:
      "If you do the job badly enough, sometimes you don't get asked to do it again.",
    author: "Wisteria Ravenclaw"
  },
  {
    quote:
      "I'm killing time while I wait for life to shower me with meaning and happiness.",
    author: "Ursula Gurmmeister"
  },
  {
    quote:
      "The only skills I have the patience to learn are those that have no real application in life.",
    author: "Ingredia Nutrisha"
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  }
];

const HomeTestimonials = () => {
  const [emblaRef, emblaApi] = useCarouselCarousel({
    align: "start",
    loop: true
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <HomeTestimonialsWrapper>
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
            <Typography variant="displayXl" color="grey.900" fontWeight={600}>
              What People Say
            </Typography>
          </Box>
        </SlideUp>
        <SlideUp>
          <CarouselWrapper>
            <CarouselViewport ref={emblaRef}>
              <CarouselContainer>
                {testimonials.map((testimonial, index) => (
                  <CarouselSlide key={index}>
                    <QuoteIconWrapper>
                      <Icon icon="tabler:quote" />{" "}
                    </QuoteIconWrapper>
                    <Typography
                      variant="textMd"
                      color="primary.main"
                      gutterBottom
                    >
                      {testimonial.quote}
                    </Typography>
                    <Typography
                      variant="textSm"
                      fontWeight={700}
                      color="primary.main"
                      mt={4}
                    >
                      {testimonial.author}
                    </Typography>
                  </CarouselSlide>
                ))}
              </CarouselContainer>
            </CarouselViewport>
            <Box
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "end",
                alignItems: "center"
              }}
            >
              <Box sx={{ display: "flex", gap: 4 }}>
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </Box>
            </Box>
          </CarouselWrapper>
        </SlideUp>
      </Container>
    </HomeTestimonialsWrapper>
  );
};

export { HomeTestimonials };
