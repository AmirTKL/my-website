import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Amir's website",
  description: "Amir's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // ${ geistSans.variable} ${geistMono.variable}
        className={` antialiased bg-slate-800 text-white`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 items-center">
            <SidebarTrigger className="bg-slate-900 rounded-l-none size-15 lg:size-10 hover:bg-slate-700 fixed" />
            <div className="text-center">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
