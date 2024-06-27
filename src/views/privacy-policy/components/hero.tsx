import { styled } from "@mui/material/styles";
import Container from "@/components/mui/container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GrowIn } from "@/components/animations";

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 99,
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#FAFAFA",
  margin: theme.spacing(18, 0, 0, 0)
}));

const HeroContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 999,
  height: "100%",
  padding: theme.spacing(20, 4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(28, 0),
    gap: 12,
    flexDirection: "row"
  }
}));

const PrivacyPolicyHero = () => {
  return (
    <HeroWrapper className="hero" id="hero">
      <Container sx={{ position: "relative" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: { xs: "6rem", md: 140 },
            fontWeight: 600,
            position: "absolute",
            color: "#EBEBEB",
            top: "-40%",
            right: 0,
            zIndex: 1
          }}
        >
          TISIN
        </Typography>
        <GrowIn>
          <HeroContentWrapper>
            <Typography
              variant="displayLg"
              sx={{
                color: "common.black",
                fontWeight: 500,
                maxWidth: 500
              }}
            >
              Privacy Policy
            </Typography>
          </HeroContentWrapper>
        </GrowIn>
      </Container>
    </HeroWrapper>
  );
};

export { PrivacyPolicyHero };
