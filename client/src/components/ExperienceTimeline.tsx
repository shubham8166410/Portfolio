import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    company: "Tyro Payments",
    period: "May 2022 - Present",
    role: "Full Stack Developer",
  },
  {
    company: "Rackspace Technology",
    period: "Feb 2020 - May 2022",
    role: "Cloud Engineer",
  },
  {
    company: "Siemens",
    period: "Feb 2019 - Feb 2020",
    role: "Software Engineer",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ExperienceTimeline() {
  return (
    <SectionWrapper>
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.div 
        className="relative max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} mb-12`}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: index % 2 === 0 ? -5 : 5,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: "1000px" }}
            >
              <Card className={`inline-block max-w-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} transform-gpu transition-all duration-300 hover:shadow-xl`}>
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.company}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.role}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-muted-foreground mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {exp.period}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}