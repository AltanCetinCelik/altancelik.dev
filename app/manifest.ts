import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Altan Çetin Çelik — AI Systems & Backend Engineer",
    short_name: "Altan Çelik",
    description:
      "Portfolio and engineering profile of Altan Çetin Çelik: adaptive LLM inference, LLM evaluation, agent architectures, FastAPI backends, and edge AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090b",
    theme_color: "#07090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
