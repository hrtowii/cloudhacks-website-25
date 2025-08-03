export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface WorkshopItem {
  image: string;
  speaker: string;
  title: string;
  description: string;
  signup_link: string;
}

export interface CloudHacksImage {
  id: string;
  src: string;
  alt: string;
}

export const faqData: FaqItem[] = [
  {
    id: "item-1",
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where people from all walks of life get together, form teams, build something new to solve a problem, or create something interesting and have fun doing it! Participants (aka hackers) will work in teams of up to 4 to create a website, game, app, or any tech-related product and bring their ideas to life. At the end of the hackathon, hackers will pitch their projects to compete for wonderful prizes.",
  },
  {
    id: "item-2",
    question: "What if I've never been to a hackathon before?",
    answer:
      "That's okay! Whether it's your first or tenth hackathon, you're welcome to join. Even if you're not familiar with programming, you don't have to be an expert to participate in a hackathon. You'll still be able to connect with other participants, attend workshops, listen to guest speakers, and learn about the world of tech!",
  },
  {
    id: "item-3",
    question: "Who can participate?",
    answer:
      "We welcome and encourage anyone between high school and university of any programming skill level to participate.",
  },
  {
    id: "item-4",
    question: "How much does it cost to attend?",
    answer:
      "Nothing! The event is free to join, and we'll provide catering, workspace, WiFi, and also swag!",
  },
  {
    id: "item-5",
    question: "What if I can't code?",
    answer:
      "Don't let that restrain your interest for computing and love for innovation! We welcome students of all skill levels and backgrounds to join CloudHacks. Multiple beginner workshops will be held at the event, and you'll also be able to work with mentors and other participants to develop your skills.",
  },
  {
    id: "item-6",
    question: "How many people can there be in a team?",
    answer: "You can work alone or in groups of up to 4 people.",
  },
  {
    id: "item-7",
    question: "What can I make?",
    answer:
      "Anything you want! You can make a website, game, app, or any tech-related product. You can also make a project that uses hardware, such as a Raspberry Pi or Arduino. Unfortunately, we won't be able to provide any hardware on-site, so you'll have to bring your own. Though we don't have a specific theme, we will have a few challenge tracks you can tackle.",
  },
  {
    id: "item-8",
    question: "What do I need to bring to CloudHacks?",
    answer:
      "Devices, chargers, essential needs, and whatever other accessories (e.g. hardware) you think you should have for your project. You should also bring a water bottle or anything else to make the most out of our hackathon. We will be releasing more details once registrations close.",
  },
];

export const workshopData: WorkshopItem[] = [
  {
    image: "https://igate-eg.com/wp-content/uploads/2023/12/Python-Symbol.png",
    speaker: "Lucas",
    title: "Python and Data Structures",
    description:
      "Learn the fundamentals of Python programming and explore data structures like lists, dictionaries, and more. This workshop aims to give you basic skills to start your journey into programming as a whole. ",
    signup_link:
      "https://www.onepa.gov.sg/events/bishan-yn-x-cloudhacks-python-data-structures-58413584",
  },
  {
    image:
      "https://d3mxt5v3yxgcsr.cloudfront.net/courses/6020/course_6020_image.png",
    speaker: "To be decided!",
    title: "HTML, CSS, and JavaScript",
    description:
      "Get started with web development by learning the core technologies: HTML, CSS, and JavaScript. This workshop will cover the basics of building web pages and styling them. You can also join our next workshop on Python Flask to become a full-stack developer! Registration not open yet.",
    signup_link: "https://example.com/signup/python",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:640/1*XzIRJGujfqAiOV2EIQgR_Q.png",
    speaker: "Zhuo En",
    title: "Python Flask",
    description:
      "Dive into full-stack web development with Python Flask. This workshop will teach you how to build dynamic web applications using Flask, a lightweight and intuitive web framework for Python. Registration not open yet.",
    signup_link: "https://example.com/signup/react",
  },
];

export const cloudhacksImages: CloudHacksImage[] = [
  {
    id: "cloudhacks_image_1",
    src: "./cloudhacks_1.JPG",
    alt: "CloudHacks event - participants and activities",
  },
  {
    id: "cloudhacks_image_2",
    src: "./cloudhacks_2.JPG",
    alt: "CloudHacks event - coding and collaboration",
  },
  {
    id: "cloudhacks_image_3",
    src: "./cloudhacks_3.JPG",
    alt: "CloudHacks event - workshops and learning",
  },
  {
    id: "cloudhacks_image_4",
    src: "./cloudhacks_4.JPG",
    alt: "CloudHacks event - innovation and teamwork",
  },
  {
    id: "cloudhacks_image_5",
    src: "./cloudhacks_5.JPG",
    alt: "CloudHacks event - presentation and networking",
  },
];
