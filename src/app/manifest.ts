import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TISIN - Connecting You to Compassionate Support",
    short_name: "TISIN",
    description:
    "TISIN Therapy App is an innovative platform designed to bridge the gap between individuals seeking mental and emotional support and compassionate, non-certified therapist stand-ins.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
