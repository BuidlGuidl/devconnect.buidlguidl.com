import { Orbit } from "next/font/google";
import localFont from "next/font/local";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

const orbit = Orbit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-orbit",
  display: "swap",
  adjustFontFallback: false,
});

const neueBit = localFont({
  src: "../public/fonts/PPNeueBit-Bold.woff2",
  variable: "--font-neuebit",
  weight: "700",
});

export const metadata = getMetadata({
  title: "Buidlguidl's Builder Bootcamp @ Devconnect Argentina",
  description:
    "A week long series of workshops and sessions for builders of any skill level to learn about how to build on Ethereum",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className={`${orbit.variable} ${neueBit.variable}`}>
      <body className="font-orbit">
        <ThemeProvider enableSystem={false} defaultTheme="light">
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
