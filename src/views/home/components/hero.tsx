"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { siteConfig } from "@/configs/site";

const HeroWrapper = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "90vh",
  overflow: "hidden"
}));

const HeroOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0.4,
  zIndex: 1,
  backgroundSize: "cover",
  backgroundColor: theme.palette.common.black,
  backgroundPosition: "center"
}));

const HeroSlide = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  transition: "opacity 0.5s ease",
  backgroundSize: "cover",
  backgroundPosition: "0% 30%",

  "&.active": {
    opacity: 1
  }
}));

const HeroContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  height: "100%",
  padding: theme.spacing(0, 4),
  margin: "auto",
  maxWidth: 900,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  textAlign: "center"
}));

const slides = [
  "https://res.cloudinary.com/matec-technology-services/image/upload/v1718794135/tisin/nathan-ansell-JvbNsRCXXic-unsplash_3_nh8gti.jpg",

  "https://res.cloudinary.com/matec-technology-services/image/upload/v1718794135/tisin/toa-heftiba-_UIVmIBB3JU-unsplash_1_khrohg.jpg",

  "https://res.cloudinary.com/matec-technology-services/image/upload/v1718794134/tisin/roman-kraft-0EVKn3-5JSU-unsplash_1_kmphca.jpg"
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  console.log({ currentIndex });

  return (
    <HeroWrapper className="hero-carousel">
      <HeroOverlay />
      {slides.map((slide, index) => (
        <HeroSlide
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          sx={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      <HeroContentWrapper>
        <Typography variant="displayXl" color="common.white" fontWeight={600}>
          {siteConfig.tagLine}
        </Typography>
        <Typography variant="textMd" color="common.white" fontWeight={500}>
          {siteConfig.description}
        </Typography>
        <Stack direction="row" justifyContent="center" gap={2.5} mt={6}>
          <Button
            component={Link}
            href="/contact"
            variant="outlined"
            size="large"
            color="grey"
            sx={{ backgroundColor: "common.white" }}
          >
            Apply Here
          </Button>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
          >
            Get Started
          </Button>
        </Stack>
      </HeroContentWrapper>
    </HeroWrapper>
  );
};

export { HomeHero };
