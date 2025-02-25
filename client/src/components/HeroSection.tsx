import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper>
      <div className="min-h-[90vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Passionate about building scalable applications and cloud infrastructure
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}