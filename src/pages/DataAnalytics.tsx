import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const DataAnalytics = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    window.open('https://calendly.com/tomparker-8be/asi-booking', '_blank');
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
          
          <h1 className="text-4xl font-bold text-white mb-6">Predictive Analytics</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-xl mb-8">
              Harness the power of data with our advanced analytics solutions to make informed decisions and predict future trends.
            </p>

            <div className="bg-[#1A1F2C] p-8 rounded-xl border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  Business Intelligence Dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  Predictive Modeling
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  Real-time Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                  Data Visualization
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleBooking}
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8a74f4] text-white"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default DataAnalytics;
