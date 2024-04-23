import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@udecode/cn";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import Link from "next/link";
import { TooltipProviderApp } from "@/provider/TooltipProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen bg-background font-sans antialiased p-5")}
      >
        <TooltipProviderApp>
          <nav className="space-x-6 bg-green-300 p-3 rounded-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/blogs"}>Blogs</Link>
          </nav>
          {children}
        </TooltipProviderApp>
      </body>
    </html>
  );
}
