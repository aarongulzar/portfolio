import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Gulzar | Data Science, AI & Software Development",
  description:
    "A modern personal portfolio for Aaron Gulzar, focused on data science, machine learning, artificial intelligence, and software development.",
  authors: [{ name: "Aaron Gulzar" }],
  keywords: [
    "Aaron Gulzar",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Software Development",
    "Portfolio",
  ],
  openGraph: {
    title: "Aaron Gulzar | Data Science, AI & Software Development",
    description:
      "Clean, responsive portfolio showcasing projects, skills, education, experience, and contact links.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Gulzar | Data Science, AI & Software Development",
    description:
      "Modern portfolio for data science, machine learning, AI, and software development.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("portfolio-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = stored === "light" || stored === "dark" ? stored : preferred;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
