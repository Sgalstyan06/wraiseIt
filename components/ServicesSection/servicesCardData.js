import { MobileIcon, QaTestingIcon, WebIcon, TeamIcon } from "../Icons";
import { NodeLogo, ReactLogo, TestLogo } from "./logoIcons";
import defineImage from "/public/assets/images/processDefine.jpeg";
import buildImage from "/public/assets/images/processBuild.png";
import testImage from "/public/assets/images/processTest.jpeg";

export const servicesCardData = [
  {
    id: 1,
    mainIcon: <WebIcon />,
    title: "Web development",
    name: "web",
    description:
      "From design to integration to maintenance, we offer full-cycle web application development services. We build apps that are secure, scalable, fast, and work well across all devices and platforms. " +
      "We take a proactive approach to web development and elaborate on ways to uncover less obvious business requirements, save costs and envisage risks for your project. After your web solution is released, we perform continuous server monitoring, allocate team members to fix bugs, and provide general customer support.",
    size: "big",
    logoIcons: [
      { src: <NodeLogo /> },
      { src: <TestLogo /> },
      { src: <ReactLogo /> },
      { src: <NodeLogo /> },
    ],
  },
  {
    id: 2,
    mainIcon: <QaTestingIcon />,
    title: "Q/A & testing",
    name: "testing",
    description:
      "Quality assurance is an integral part of every modern software development project that our team works on. For us, quality isn’t just about testing. Our delivery model is based on a 360-degree quality assurance approach that covers every stage of development and guarantees success. " +
      "Also we can suggest dedicated testing team enable you to expand your own resources in the most cost-efficient and smooth way. When choosing this model you will get a remote team of testers that works exclusively on your project in accordance with your requirements.",
    size: "big",
    logoIcons: [
      { src: <NodeLogo /> },
      { src: <TestLogo /> },
      { src: <ReactLogo /> },
      { src: <NodeLogo /> },
    ],
  },
  {
    id: 3,
    mainIcon: <MobileIcon />,
    title: "Mobile development",
    name: "mobile",
    description:
      "We build mobile applications to meet our customers’ needs and provide an excellent user experience. Take advantage of native iOS and Android apps or hybrid mobile apps built by our team of mobile software engineers. Our expertise to best practices enable us to deliver a wide range of iOS and Android apps. We develop, integrate, and alter features in your mobile applications and enterprise architectures that ensure visible results.",
    size: "big",
    logoIcons: [
      { src: <NodeLogo /> },
      { src: <TestLogo /> },
      { src: <ReactLogo /> },
      { src: <NodeLogo /> },
    ],
  },
  {
    id: 4,
    mainIcon: <TeamIcon />,
    title: "Dedicated development team",
    name: "dedicated developer",
    description:
      "Committed to your project, our dedicated development team provides the in-depth expertise and experience you need on a short-term/long-term basis for a successful project. For your project's critical challenges it is a great idea as it allows you to fulfill your complete IT development." +
      " Outsourcing your dedicated development team saves you countless hours spent recruiting and interviewing. We take into account the current market state, latest technologies and emerging trends while working on your project.",
    size: "big",
    logoIcons: [
      { src: <NodeLogo /> },
      { src: <TestLogo /> },
      { src: <ReactLogo /> },
      { src: <NodeLogo /> },
    ],
  },
];

export const servicesProcessData = [
  {
    title: "Define your needs",
    description:
      "We firstly try to look at the product from the point of view of our client and implement it in the accordance with the requirements while taking into consideration the technical limitations.",
    image: defineImage,
  },
  {
    title: "Build",
    description:
      "After defining the design, functionalities, financial budget and deadlines, we start building the product.",
    image: buildImage,
  },
  {
    title: "Test & grow",
    description:
      "We test the product thoroughly before delivering the product. Once the application is functionating flawlessly we send it live and you are ready to go with your custom made web or mobile application.",
    image: testImage,
  },
];
