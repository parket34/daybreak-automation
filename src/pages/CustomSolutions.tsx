import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const CustomSolutions = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    const calendlyUrl = "https://calendly.com/tomparker-8be/ai-discovery-call";
    window.open(calendlyUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-gray-900 flex flex-col">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold font-helvetica text-white mb-6">Custom Solutions</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Tailored AI solutions designed specifically for your business needs and objectives.
        </p>
        <div className="flex justify-center space-x-4">
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#8a74f4] text-white"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book a Discovery Call
          </Button>
          <Button 
            onClick={() => navigate("/services")}
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-transform"
          >
            Explore Services
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomSolutions;
