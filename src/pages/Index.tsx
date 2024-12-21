import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    window.open('https://calendly.com/tomparker-8be/asi-booking', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-gray-900 flex flex-col">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold font-helvetica text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB]">
            DayBreak AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge AI solutions. Transform your operations and unlock new possibilities with our intelligent automation platform.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <Button 
              onClick={handleBooking}
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#8a74f4] text-white"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Consultation
            </Button>
            <Button 
              onClick={() => navigate("/services")}
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-transform"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "AI-Powered Automation",
              description: "Leverage advanced AI algorithms to automate complex business processes and decision-making workflows"
            },
            {
              title: "Predictive Analytics",
              description: "Harness the power of machine learning to forecast trends and make data-driven business decisions"
            },
            {
              title: "Custom AI Solutions",
              description: "Tailored artificial intelligence solutions designed specifically for your business needs and objectives"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1A1F2C] p-8 rounded-xl border border-gray-800 hover:border-[#9b87f5] transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Measurable Benefits of AI Implementation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "20+ Hours",
                label: "Saved Per Week",
                description: "Automate repetitive tasks and streamline workflows",
                expandedDetails: "Our AI solutions automate data entry, report generation, customer support responses, and routine administrative tasks. Clients typically save 4-5 hours per day, allowing teams to focus on strategic initiatives and high-value activities."
              },
              {
                metric: "35%",
                label: "Revenue Increase",
                description: "Through optimized operations and enhanced decision making",
                expandedDetails: "By leveraging predictive analytics and automated customer engagement, businesses see significant revenue growth. This includes improved lead conversion rates, optimized pricing strategies, and increased customer lifetime value through personalized experiences."
              },
              {
                metric: "60%",
                label: "Error Reduction",
                description: "Minimize human error in critical processes",
                expandedDetails: "AI-powered validation and verification systems catch errors in real-time, ensuring data accuracy and compliance. This leads to reduced rework, improved quality control, and enhanced regulatory compliance across all business processes."
              },
              {
                metric: "24/7",
                label: "Operation Capability",
                description: "Continuous automated processing without interruption",
                expandedDetails: "Our AI systems work around the clock, processing requests, monitoring systems, and responding to customer needs at any hour. This ensures consistent service delivery, faster response times, and improved customer satisfaction across all time zones."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-[#1A1F2C]/80 p-8 rounded-xl border border-gray-800 hover:border-[#9b87f5] transition-all duration-300 min-h-[200px] hover:min-h-[300px]"
              >
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-4xl font-bold text-[#9b87f5] mb-2">{benefit.metric}</h3>
                  <h4 className="text-xl font-semibold text-white mb-3">{benefit.label}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
                
                <div className="absolute inset-0 p-8 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-[#1A1F2C] border border-[#9b87f5]">
                  <p className="text-white text-sm leading-relaxed">
                    {benefit.expandedDetails}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose DayBreak AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cutting-edge Technology",
                description: "Access to the latest AI and machine learning technologies"
              },
              {
                title: "Expert Team",
                description: "Dedicated AI specialists and solution architects"
              },
              {
                title: "Scalable Solutions",
                description: "Grow and adapt your AI capabilities as your business evolves"
              },
              {
                title: "ROI Focused",
                description: "Measurable results and clear business value"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#1A1F2C]/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
};

export default Index;
