"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@/components/mui/container";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SlideUp } from "@/components/animations";

const HomePricingWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(32),
  paddingBottom: theme.spacing(32)
}));

const HomePricing = () => {
  return (
    <HomePricingWrapper>
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
            <Typography variant="displayLg" color="grey.900" fontWeight={600}>
              Pricing
            </Typography>
          </Box>
        </SlideUp>
      </Container>
    </HomePricingWrapper>
  );
};

export { HomePricing };
