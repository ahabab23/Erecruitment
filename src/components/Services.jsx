import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen w-full text-black"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {/* Heading */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-center text-2xl font-light text-black mb-12">
          Our Services
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12 p-6">
          {/** Service Cards **/}
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-transparent filter backdrop-blur-md rounded-lg shadow-lg text-left border border-black transition-transform hover:scale-95 p-2 w-full "
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
            >
              <h2 className="text-xs  font-semibold bg-clip-text text-black mb-3 ">
                {service.title}
              </h2>
              <p className="text-[10px] text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Services Data Array
const serviceData = [
  {
    title: "Recruitment",
    description:
      "We connect top talent with the right employers by leveraging our vast network and industry expertise. Our recruitment process ensures the perfect match for your company’s needs.",
  },
  {
    title: "Training",
    description:
      "Enhance workforce skills with our specialized training programs. We provide customized learning solutions to empower employees and improve productivity.",
  },
  {
    title: "Labour Outsourcing",
    description:
      "Reduce hiring complexities with our labour outsourcing services. We provide pre-screened, qualified professionals to meet your temporary or long-term staffing needs.",
  },
  {
    title: "HR360: Your HR Partner",
    description:
      "A comprehensive HR management solution designed to streamline payroll, compliance, and employee engagement, ensuring a seamless HR experience.",
  },
  {
    title: "Research & Consulting",
    description:
      "We provide in-depth market research and HR consulting to help businesses make informed workforce decisions and optimize human resource strategies.",
  },
  {
    title: "HR Consultancy",
    description:
      "Our expert HR consultants offer guidance on talent acquisition, compliance, employee relations, and organizational development to help businesses thrive.",
  },
];

export default Services;
