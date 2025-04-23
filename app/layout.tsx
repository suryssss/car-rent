import type { Metadata } from "next";
import { Raleway } from "next/font/google"; // Import the Raleway font
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const raleway = Raleway({
  variable: "--font-raleway", // Define a CSS variable for the font
  subsets: ["latin"], // Specify the subset
  weight: ["400", "500", "600", "700"], // Specify font weights
});

export const metadata: Metadata = {
  title: "Car Rental Service",
  description: "Find and rent premium cars in your city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body
          className={`${raleway.variable} antialiased bg-gray-50 text-gray-900`} // Apply the Raleway font
        >
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <div className="flex items-center justify-center min-h-screen">
              <SignIn routing="hash" />
            </div>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
