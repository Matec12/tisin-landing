"use client";

import { ReactNode, Suspense } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Header from "./components/header";
import Footer from "./components/footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Suspense>
        <Header />
      </Suspense>

      {children}

      <Box sx={{ flexGrow: 1 }} />

      <Footer />
    </Stack>
  );
};

export default MainLayout;
