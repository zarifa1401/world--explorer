import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "World Explorer",
  description: "A Next.js country explorer project for Week 13 and Week 14"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("world-explorer-theme");
                const theme = storedTheme || "dark";
                document.documentElement.classList.toggle("light", theme === "light");
                document.documentElement.classList.toggle("dark", theme !== "light");
              } catch (error) {
                document.documentElement.classList.add("dark");
              }
            `
          }}
        />
        <div className="theme-shell min-h-screen overflow-hidden bg-space-950 text-slate-100">
          <div className="ambient-bg fixed inset-0 -z-10 bg-star-field" />
          <div className="fixed inset-0 -z-10 stars" />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
