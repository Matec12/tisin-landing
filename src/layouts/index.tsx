"use client";

import { ReactNode, Suspense } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Header from "./components/header";
import Footer from "./components/footer";

const MainLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: "100vh",

  "& .content-center": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
    minHeight: `calc(100vh - ${theme.spacing(
      (theme.mixins.toolbar.minHeight as number) / 4
    )})`
  },

  "& .content-right": {
    display: "flex",
    overflowX: "hidden",
    position: "relative",
    minHeight: `calc(100vh - ${theme.spacing(
      (theme.mixins.toolbar.minHeight as number) / 4
    )})`
  }
}));

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainLayoutWrapper>
      <Suspense>
        <Header />
      </Suspense>
      <Box
        className="app-content"
        sx={{
          overflow: "hidden",
          position: "relative",
          minHeight: "100vh"
        }}
      >
        {children}
      </Box>
      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
