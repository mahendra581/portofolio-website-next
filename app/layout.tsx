import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ActiveSectionContextProvider from "@/components/ui/activeSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahendra | Portofolio",
  description: "Interested in software engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "${inter.className} bg-slate-900 text-white relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
        }
      >
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
