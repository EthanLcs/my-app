import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Business Career Compass",
  description: "Empowering professionals with insights and guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white text-black">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header>
          <nav className="flex items-center justify-center gap-8 p-6 border-b border-gray-200">
            <Link href="/" className="font-semibold hover:text-blue-600">
              Home
            </Link>
            <Link href="/members" className="font-semibold hover:text-blue-600">
              Members
            </Link>
            <Link href="/blogs" className="font-semibold hover:text-blue-600">
              Blogs
            </Link>
            <Link href="/contact" className="font-semibold hover:text-blue-600">
            Contact
            </Link>
          </nav>
        </header>

        <main className="flex-1 p-6">{children}</main>

        <footer className="border-t border-gray-200 p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Business Career Compass
        </footer>
      </body>
    </html>
  );
}
