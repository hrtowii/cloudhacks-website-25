import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ExternalLink, Users, Trophy, Calendar } from "lucide-react";
import { Link } from "react-router";
import Layout from "@/components/Layout";
import { faqData, cloudhacksImages } from "@/data";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center flex flex-col items-center">
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            CloudHacks
          </h1> */}
          <div className="mb-10">
            <img
              src="./blockynew.png"
              alt="Cloudhacks 2025"
              className="responsive-img"
            />
          </div>
          <p className="text-xl md:text-2xl  mb-8 max-w-3xl mx-auto">
            A student-led hackathon uniting programmers from across the country
            to innovate solutions for global and local challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-light-blue to-medium-blue hover:from-light-blue hover:to-medium-blue"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSexEqXY7S5RviJIrCII6WQLUICrdxJAnhslrQ7MTI9R9hUGJQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/workshops">View Workshops</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-light-blue mb-2">25+</div>
              <div className="">Projects Submitted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medium-blue mb-2">
                150+
              </div>
              <div className="">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-light-green mb-2">
                $2400+
              </div>
              <div className="">in Prizes</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl animated-gradient font-bold mb-6">
                About CloudHacks
              </h2>
              <p className="text-lg mb-6">
                CloudHacks is a student-led hackathon aiming to unite avid
                programmers from across the country and innovate all sorts of
                solutions to solve pertinent issues, global and local. It
                provides an opportunity for like-minded individuals to learn,
                innovate and network over the course of the day, through
                workshops and intensive hacking.
              </p>
              <p className="text-lg  mb-6">
                Every year, CloudHacks holds a series of monthly workshops,
                along with an annual hackathon, in partnership with PAYM and the
                Bishan Youth Network.
              </p>
              <p className="text-lg  mb-8">
                CloudHacks runs annually, and in those annual events, we give
                participants a set of problem statements to solve for. For 24
                hours, participants will work in teams of up to 4 to create a
                website, game, app, or any tech-related product and bring their
                ideas to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Teams of up to 4
                </Badge>
                <Badge variant="outline" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  24 Hours
                </Badge>
                <Badge variant="outline" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Amazing Prizes
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Carousel
                className="w-full max-w-md mx-auto"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent>
                  {cloudhacksImages.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="p-1">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="responsive-img rounded-lg shadow-lg w-full h-80 object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-fancy-white to-fancy-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col col-reverse lg:col-start-2 lg:col-end-3 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-7xl animated-gradient font-bold mb-6 text-center lg:text-right leading-tight">
                What's
                <br />
                Happening?
              </h2>
            </div>
            <div className="order-2 lg:order-1">
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    CloudHacks 2025 - Hybrid Format
                  </CardTitle>
                  <CardDescription className="text-lg">
                    CloudHacks runs annually, and in those annual events, we
                    give participants a set of problem statements to solve for.
                    For 24 hours, participants will work in teams of up to 4 to
                    create a website, game, app, or any tech-related product and
                    bring their ideas to life.
                  </CardDescription>
                </CardHeader>
                <div className="px-6 pb-6">
                  <p className="text-lg mb-6">
                    This year, our event will be in a hybrid format - we'll be
                    hosting workshops before the main hackathon if you're new to
                    programming or want to learn more!
                  </p>
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-light-blue to-medium-blue hover:from-light-blue hover:to-medium-blue"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSexEqXY7S5RviJIrCII6WQLUICrdxJAnhslrQ7MTI9R9hUGJQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl animated-gradient font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion
              type="single"
              collapsible
              // className="space-y-6"
              defaultValue="item-1"
            >
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b-2"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-semibold py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg leading-relaxed pt-2 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl animated-gradient font-bold text-center mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <img
              src="https://via.placeholder.com/120x80/e5e7eb/6b7280?text=PA"
              alt="PA"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://via.placeholder.com/120x80/e5e7eb/6b7280?text=PAYM"
              alt="PAYM"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://via.placeholder.com/120x80/e5e7eb/6b7280?text=BYN"
              alt="Bishan Youth Network"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://via.placeholder.com/120x80/e5e7eb/6b7280?text=BESM"
              alt="BESM"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://via.placeholder.com/120x80/e5e7eb/6b7280?text=Hack%2B"
              alt="Hack+"
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl animated-gradient font-bold mb-12">
            Sponsor us!
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              The next generation of software engineers, designers and
              entrepreneurs are coming to hackathons to have fun, compete for
              prizes, and learn new skills. Sponsoring a hackathon is a great
              way to get access to the top IT and technical talent. By
              sponsoring CloudHacks, you'll not only gain exposure and brand
              recognition but also high levels of student engagement, and maybe
              even see a problem you face in your organization solved.
            </p>
            <p className="text-lg mb-8">
              Want to make a lasting impression on the next generation of
              innovators?
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-light-blue to-medium-blue hover:from-light-blue hover:to-medium-blue"
            >
              <a
                href="mailto:sponsor.cloudhacks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                sponsor.cloudhacks@gmail.com
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <img
              src="cloud_sponsor.png"
              alt="sponsorpls"
              className="responsive-img my-10 max-w-md w-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-light-blue to-medium-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join CloudHacks?</h2>
          <p className="text-xl mb-8 opacity-90">
            Register now for our hybrid format event and be part of the
            innovation!
          </p>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexEqXY7S5RviJIrCII6WQLUICrdxJAnhslrQ7MTI9R9hUGJQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
