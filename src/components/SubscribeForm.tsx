import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

interface SubscribeFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

export default function SubscribeForm({
  title = "Stay Updated",
  description = "Subscribe to our mailing list to get the latest updates about CloudHacks events, workshops, and announcements.",
  compact = false,
}: SubscribeFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thank you for subscribing! You'll receive updates about CloudHacks events and workshops.",
        );
        setFormData({ name: "", email: "" });
      } else {
        const errorData = await response.json();
        setStatus("error");
        setMessage(
          errorData.error || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (compact) {
    return (
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
              disabled={status === "loading"}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
              disabled={status === "loading"}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-light-blue to-medium-blue hover:from-light-blue hover:to-medium-blue"
          >
            {status === "loading" ? (
              "Subscribing..."
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </>
            )}
          </Button>

          {status === "success" && (
            <div className="flex items-center space-x-2 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>{message}</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center space-x-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{message}</span>
            </div>
          )}
        </form>
      </div>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl animated-gradient font-bold text-center">
          {title}
        </CardTitle>
        <p className="text-gray-600 text-center">{description}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent outline-none transition-all"
                disabled={status === "loading"}
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-light-blue to-medium-blue hover:from-light-blue hover:to-medium-blue"
          >
            {status === "loading" ? (
              "Subscribing..."
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe to Updates
              </>
            )}
          </Button>

          {status === "success" && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span>{message}</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>{message}</span>
            </div>
          )}
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          We respect your privacy. Your information will only be used to send
          you updates about CloudHacks events and workshops.
        </p>
      </CardContent>
    </Card>
  );
}
