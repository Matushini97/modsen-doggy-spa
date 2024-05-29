import type { Metadata } from "next";
import "@/styles/index.scss";
import "@fontsource/cinzel-decorative/400.css";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel-decorative/900.css";
import "@fontsource/tangerine/400.css";
import "@fontsource/tangerine/700.css";
import "@fontsource-variable/cormorant";
import { Footer, Header, Offer } from "@/components/ui/layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Offer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
