import { Button } from "@/components/ui/button";
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
  ExternalLink,
  Users,
  Trophy,
  Code,
  Calendar,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fancy-white via-white to-fancy-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-light-blue to-medium-blue rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-light-blue to-medium-blue bg-clip-text text-transparent">
              CloudHacks
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className=" hover:text-gray-900 transition-colors">
              About
            </a>
            <Link
              to="/workshops"
              className=" hover:text-gray-900 transition-colors"
            >
              Workshops
            </Link>
            <a href="#faq" className=" hover:text-gray-900 transition-colors">
              FAQ
            </a>
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center flex flex-col items-center">
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            CloudHacks
          </h1> */}
          <div className="mb-10">
            <img src="./blockynew.png" alt="Cloudhacks 2025" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                alt="CloudHacks participants collaborating"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-fancy-white to-fancy-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl animated-gradient font-bold mb-12">
            What's Happening?
          </h2>
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=300&fit=crop&crop=center"
              alt="Past hackathon statistics and participants"
              className="rounded-lg shadow-lg mb-8 w-full h-auto"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-light-blue">
                    25+
                  </CardTitle>
                  <CardDescription>Projects Submitted</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-medium-blue">
                    150+
                  </CardTitle>
                  <CardDescription>Participants</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-light-green">
                    $2400+
                  </CardTitle>
                  <CardDescription>in Prizes</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl animated-gradient font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a hackathon?</AccordionTrigger>
                <AccordionContent>
                  A hackathon is an event where people from all walks of life
                  get together, form teams, build something new to solve a
                  problem, or create something interesting and have fun doing
                  it! Participants (aka hackers) will work in teams of up to 4
                  to create a website, game, app, or any tech-related product
                  and bring their ideas to life. At the end of the hackathon,
                  hackers will pitch their projects to compete for wonderful
                  prizes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What if I've never been to a hackathon before?
                </AccordionTrigger>
                <AccordionContent>
                  That's okay! Whether it's your first or tenth hackathon,
                  you're welcome to join. Even if you're not familiar with
                  programming, you don't have to be an expert to participate in
                  a hackathon. You'll still be able to connect with other
                  participants, attend workshops, listen to guest speakers, and
                  learn about the world of tech!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Who can participate?</AccordionTrigger>
                <AccordionContent>
                  We welcome and encourage anyone between high school and
                  university of any programming skill level to participate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How much does it cost to attend?
                </AccordionTrigger>
                <AccordionContent>
                  Nothing! The event is free to join, and we'll provide
                  catering, workspace, WiFi, and also swag!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What if I can't code?</AccordionTrigger>
                <AccordionContent>
                  Don't let that restrain your interest for computing and love
                  for innovation! We welcome students of all skill levels and
                  backgrounds to join CloudHacks. Multiple beginner workshops
                  will be held at the event, and you'll also be able to work
                  with mentors and other participants to develop your skills.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  How many people can there be in a team?
                </AccordionTrigger>
                <AccordionContent>
                  You can work alone or in groups of up to 4 people.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>What can I make?</AccordionTrigger>
                <AccordionContent>
                  Anything you want! You can make a website, game, app, or any
                  tech-related product. You can also make a project that uses
                  hardware, such as a Raspberry Pi or Arduino. Unfortunately, we
                  won't be able to provide any hardware on-site, so you'll have
                  to bring your own. Though we don't have a specific theme, we
                  will have a few challenge tracks you can tackle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  What do I need to bring to CloudHacks?
                </AccordionTrigger>
                <AccordionContent>
                  Devices, chargers, essential needs, and whatever other
                  accessories (e.g. hardware) you think you should have for your
                  project. You should also bring a water bottle or anything else
                  to make the most out of our hackathon. We will be releasing
                  more details once registrations close.
                </AccordionContent>
              </AccordionItem>
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
                Contact us at sponsor.cloudhacks@gmail.com{" "}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <img src="cloud_sponsor.png" alt="sponsorpls" className="my-10" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-light-blue to-medium-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl animated-gradient font-bold mb-6">
            Ready to Join CloudHacks?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Register now for our hybrid format event and be part of the
            innovation!
          </p>
          <Button size="lg" variant="secondary" asChild>
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

      {/* Footer */}
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
    </div>
  );
}
