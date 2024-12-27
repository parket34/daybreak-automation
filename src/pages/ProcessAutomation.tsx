import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const ProcessAutomation = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    window.open('https://calendly.com/tomparker-8be/ai-discovery-call', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-gray-900 flex flex-col">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Button 
            onClick={() => navigate("/services")}
            variant="ghost" 
            className="text-gray-400 mb-8"
          >
            ← Back to Services
          </Button>
          
          <h1 className="text-4xl font-bold text-white mb-6">AI Process Automation</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-xl mb-8">
              Transform your business operations with intelligent automation solutions that streamline workflows and boost efficiency.
            </p>

            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  Intelligent Document Processing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  Workflow Automation
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  Process Mining & Optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  24/7 Automated Operations
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleBooking}
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8a74f4] text-white"
              >
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProcessAutomation;