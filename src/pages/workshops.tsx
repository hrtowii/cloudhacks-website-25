import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { workshopData } from "@/data";
import SubscribeForm from "@/components/SubscribeForm";

export default function WorkshopsPage() {
  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-light-blue to-medium-blue bg-clip-text text-transparent">
              Workshops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and build your skills with our
              hands-on workshops. From beginner-friendly sessions to advanced
              topics, we have something for everyone.
            </p>
          </div>

          {/* Workshops Grid */}
          <div className="space-y-12">
            {workshopData.map((workshop, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-80">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">
                          Speaker: {workshop.speaker}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {workshop.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {workshop.description}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <Button
                          size="lg"
                          asChild
                          className="bg-gradient-to-r from-light-blue to-medium-blue hover:from-light-blue hover:to-medium-blue"
                        >
                          <a
                            href={workshop.signup_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sign Up Now
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="mt-20">
            <div className="max-w-2xl mx-auto">
              <SubscribeForm
                title="Never Miss a Workshop"
                description="Subscribe to get notified about upcoming workshops, special events, and exclusive learning opportunities. Stay ahead with the latest in tech education!"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-light-blue to-medium-blue rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Level Up Your Skills?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Join our workshops and learn from the best in the industry
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSexEqXY7S5RviJIrCII6WQLUICrdxJAnhslrQ7MTI9R9hUGJQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for CloudHacks
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
