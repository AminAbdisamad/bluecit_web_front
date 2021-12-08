import ServiceComponent from "../components/services/Services";

import PageHeading from "../components/PageHeading";

const headingContent = {
  title: "Our Services",
  text: "Here at BlueCIT, We take the time to understand your cybersecurity challenges as well as your software requirements. Here are some of the primary services we offer to our clients.",
};
const servicesContent = [
  {
    title: "Software Development",
    description:
      "We develop cutting-edge, sophisticated applications that allow an interactive business environment, effective, efficient e-commerce space, and simplify transaction processes, by connecting customers to consumers using the latest technologies",
    image: "/images/software.jpg",
  },
  {
    title: "Digital Transformation",
    description:
      "We assist to enhance organizational competitiveness, marketing strategy, operational management, and provide sustainable, transformative business solutions",
    image: "/images/digital.jpg",
  },
  {
    title: "Vulnerability Management",
    description:
      "Our experts help you go beyond basic scanning, define key risk areas, analyze scan results with intelligence-driven context, customize reporting for clear visibility, and coordinate remediation activities",
    image: "/images/Vulnerability.jpg",
  },
  {
    title: "Penetration Testing",
    description:
      "We perform simulated cyberattacks to gauge how effective your security systems are. During a penetration test, we will explore your system’s intrusion points, simulate server injections, bypass firewalls, and use exploits to assess your networks, websites and software’s vulnerabilities.",
    image: "/images/penetration.jpg",
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageHeading title={headingContent.title} text={headingContent.text} />
      <div>
        {servicesContent.map((service, i) => (
          <ServiceComponent
            key={i}
            title={service.title}
            description={service.description}
            image={service.image}
            invert={i % 2 === 0}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
