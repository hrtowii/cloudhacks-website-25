import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-light-blue to-medium-blue rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-light-blue to-medium-blue bg-clip-text text-transparent">
            CloudHacks
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => handleSectionClick("about")}
            className={cn(
              "hover:text-gray-900 transition-colors",
              location.pathname === "/" && location.hash === "#about" ? "text-gray-900 font-medium" : "text-gray-600"
            )}
          >
            About
          </button>
          <Link
            to="/workshops"
            className={cn(
              "hover:text-gray-900 transition-colors",
              isActive("/workshops") ? "text-gray-900 font-medium" : "text-gray-600"
            )}
          >
            Workshops
          </Link>
          <button
            onClick={() => handleSectionClick("faq")}
            className={cn(
              "hover:text-gray-900 transition-colors",
              location.pathname === "/" && location.hash === "#faq" ? "text-gray-900 font-medium" : "text-gray-600"
            )}
          >
            FAQ
          </button>
          <Button asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexEqXY7S5RviJIrCII6WQLUICrdxJAnhslrQ7MTI9R9hUGJQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}