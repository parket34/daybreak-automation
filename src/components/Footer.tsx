import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-6 mt-auto">
      <div className="container mx-auto px-4 flex justify-center">
        <Button
          variant="ghost"
          className="text-white hover:text-[#9b87f5]"
          onClick={() => window.open('https://www.linkedin.com/in/tomparker1257647/', '_blank')}
        >
          <Linkedin className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;