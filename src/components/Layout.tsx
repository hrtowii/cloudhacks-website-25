import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fancy-white via-white to-fancy-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}