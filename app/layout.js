import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "World Explorer",
  description:
    "Explore countries around the world with Next.js and REST Countries API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="stars"></div>

        <Navbar />

        <main className="min-h-screen pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}