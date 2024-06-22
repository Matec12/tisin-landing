"use client";

import React from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { keyframes, styled } from "@mui/material/styles";
import Container from "@/components/mui/container";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomTextField from "@/components/mui/text-field";
import SlideUp from "@/components/animation/slide-up";

const upanddownAnimation = (translate: number) => keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(${translate}px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

const SubscribeWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(32),
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.5' fill='%23FFB727' cx='45' cy='45' r='5'/%3E%3Cg fill='%2394ADA5' fill-opacity='0.5'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundColor: theme.palette.secondary[15],
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundRepeat: "repeat"
}));

const FormCardContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  maxWidth: "800px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  "::before": {
    content: '""',
    position: "absolute",
    top: -20,
    left: -20,
    height: "40px",
    width: "40px",
    background: theme.palette.primary[300],
    borderRadius: "50% 20%",
    zIndex: 0,
    animation: `${upanddownAnimation(20)} 4s ease-in-out infinite`
  },
  "::after": {
    content: '""',
    position: "absolute",
    bottom: -20,
    right: -20,
    height: "40px",
    width: "40px",
    background: theme.palette.secondary[300],
    borderRadius: "50% 20%",
    zIndex: 0,
    animation: `${upanddownAnimation(-20)} 4s ease-in-out infinite`
  }
}));

const FormCard = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(16),
  borderRadius: theme.spacing(4, 0),
  width: "100%",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: theme.spacing(3)
}));

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" })
});

const SubscribeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormCard>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%", display: "flex", alignItems: "end", gap: 16 }}
      >
        <Box sx={{ width: "40%" }}>
          <Controller
            name="fullname"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                label="Full Name"
                value={value}
                onChange={onChange}
                placeholder="Enter your full name"
                error={Boolean(errors.fullname)}
                {...(errors.fullname && {
                  helperText: errors.fullname.message as string
                })}
              />
            )}
          />
        </Box>
        <Box sx={{ width: "40%" }}>
          <Controller
            name="fullname"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                label="Email"
                value={value}
                onChange={onChange}
                placeholder="Enter your email"
                error={Boolean(errors.fullname)}
                {...(errors.fullname && {
                  helperText: errors.fullname.message as string
                })}
              />
            )}
          />
        </Box>
        <Box sx={{ width: "20%" }}>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </form>
    </FormCard>
  );
};

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <Container>
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            gap: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            textAlign: "center",
            maxWidth: 600,
            mb: 12
          }}
        >
          <SlideUp>
            <Typography
              variant="displayLg"
              color="primary.500"
              fontWeight={600}
            >
              Subscribe to <br /> our Newsletter
            </Typography>
          </SlideUp>
          <SlideUp>
            <Typography variant="textMd" color="primary.300" fontWeight={600}>
              Join our family and receive insights to maintain resilience and
              mental strength.
            </Typography>
          </SlideUp>
        </Box>
        <SlideUp>
          <FormCardContainer>
            <SubscribeForm />
          </FormCardContainer>
        </SlideUp>
      </Container>
    </SubscribeWrapper>
  );
};

export default Subscribe;
