import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeComponent from "@/theme/ThemeComponent";
import Layout from "@/layouts";
import { siteConfig } from "@/configs/site";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagLine}`,
  description: siteConfig.description,
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png"
  },
  keywords: "Online, Therapy, Friend, Listen"
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={dmSans.className}
        style={dmSans.style}
        suppressHydrationWarning={true}
      >
        <AppRouterCacheProvider>
          <ThemeComponent>
            <Layout>{children}</Layout>
          </ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
