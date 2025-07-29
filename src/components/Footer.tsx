import { Code, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-light-blue to-medium-blue rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CloudHacks</span>
            </div>
            <p className="text-gray-400">
              Uniting programmers to innovate solutions for global and local
              challenges.
            </p>
          </div>

          <div>
            <h3 className="text-lg animated-gradient font-semibold mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <Link
                to="/workshops"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Workshops
              </Link>
              <a
                href="#faq"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg animated-gradient font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:hello.cloudhacks@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello.cloudhacks@gmail.com
              </a>
              <a
                href="https://discord.gg/MHUdwwvpcg"
                target="_blank"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                rel="noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord
              </a>
              <a
                href="https://www.instagram.com/cloudhacks__"
                target="_blank"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                rel="noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Instagram
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Sponsors:{" "}
                <a
                  href="mailto:sponsor.cloudhacks@gmail.com"
                  className="text-light-blue hover:text-medium-blue"
                >
                  sponsor.cloudhacks@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CloudHacks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
