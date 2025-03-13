import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "RECRUITMENT",
      description:
        "Strategic recruitment solutions focused on finding top talent for your organization. We handle the entire hiring process from sourcing candidates to final placement, ensuring you get the right people for your team.",
    },
    {
      title: "Training",
      description:
        "Comprehensive professional development programs designed to upskill your team. Our training solutions are customized to address specific skill gaps and enhance overall workforce capabilities.",
    },
    {
      title: "LABOUR OUTSOURCING",
      description:
        "Streamline operations by offloading non-core functions to our specialized teams. This allows your business to focus on growth while we handle staffing, management, and operational execution.",
    },
    {
      title: "Your End-to-End HR Partner",
      description:
        "Complete HR management solutions tailored for businesses of all sizes. We handle everything from compliance to employee relations, allowing you to focus on your core business activities.",
    },
    {
      title: "HR CONSULTANCY",
      description:
        "Expert advice on HR strategy, organizational development, and workplace transformation. Our consultants bring industry expertise to help you build effective HR systems and practices.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-violet-50/50 via-white to-blue-50/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
            Our Services
          </h2>
          <p className="text-gray-600">
            Comprehensive HR solutions for your business needs
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="h-full p-4 bg-white rounded-lg border border-gray-100 hover:border-violet-200 transition-all duration-200 hover:shadow-md flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-md bg-violet-50 flex items-center justify-center text-violet-600 group-hover:bg-violet-100 transition-colors">
                    <div className="w-4 h-4"></div>
                  </div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
