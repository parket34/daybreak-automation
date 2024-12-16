import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "AI Process Automation",
      description: "Streamline your workflows with intelligent automation that learns and adapts to your business processes.",
      features: [
        "Custom workflow automation",
        "Intelligent document processing",
        "Process optimization",
        "24/7 automated operations"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Make informed decisions with AI-powered analytics that forecast trends and identify opportunities.",
      features: [
        "Business intelligence dashboards",
        "Trend forecasting",
        "Risk analysis",
        "Performance optimization"
      ]
    },
    {
      title: "Custom AI Development",
      description: "Tailored AI solutions designed to address your specific business challenges and objectives.",
      features: [
        "Custom AI models",
        "Integration services",
        "Scalable architecture",
        "Ongoing support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1A1F2C] p-8 rounded-xl border border-gray-800 hover:border-[#9b87f5] transition-colors"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#9b87f5] hover:bg-[#8a74f4] text-white">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;