import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Footer from "@/components/Footer";

const Book = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1A1F2C] to-gray-900 flex flex-col">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Schedule a Consultation</h1>
          <p className="text-gray-300 mb-8">
            Book a free consultation with our AI experts to discuss how we can transform your business operations.
          </p>
          
          {/* Placeholder for booking calendar - to be implemented */}
          <div className="bg-[#1A1F2C] p-8 rounded-xl border border-gray-800">
            <Calendar className="w-16 h-16 text-[#9b87f5] mx-auto mb-4" />
            <p className="text-gray-400 mb-4">Calendar integration coming soon.</p>
            <Button className="bg-[#9b87f5] hover:bg-[#8a74f4] text-white">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
