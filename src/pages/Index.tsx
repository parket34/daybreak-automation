import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB]">
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
              onClick={() => navigate("/book")}
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
              className="border-white text-white hover:bg-white hover:text-gray-900"
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
    </div>
  );
};

export default Index;