import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Local Marketplace",
  description: "Buy and sell services locally.",
  icons: {

  }
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
          <MantineProvider theme={theme}>
              <body className={poppins.variable}>{children}</body>
          </MantineProvider>
        </html>
    </ClerkProvider>
  );
}
