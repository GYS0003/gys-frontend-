import { Hind, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"; // Add this import

// Font configurations remain the same
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind",
});

export const metadata = {
  title: "Home | Vedims",
  description: "Home description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hind.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Add this script for system preference detection
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const theme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', theme === 'dark');
            } catch (e) {}
          `
        }} /> */}
      </head>
      <body className={`relative leading-[1.8]  z-0 scrollbar-hide ${inter.className}`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}