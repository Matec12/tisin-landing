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
  manifest: `/favicon/site.webmanifest.json`,
  keywords: "Online, Therapy, Friend, Listen"
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className={dmSans.className} suppressHydrationWarning={true}>
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
