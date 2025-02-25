import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "./SectionWrapper";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const experiences = [
  {
    company: "Tyro Payments",
    period: "May 2022 - Present",
    role: "Full Stack Developer",
    description: "Developing and maintaining scalable financial applications, implementing secure payment solutions, and optimizing system performance.",
    highlights: [
      "Implemented secure payment processing features",
      "Optimized database queries improving response time by 40%",
      "Led team of 5 developers for major platform upgrade"
    ]
  },
  {
    company: "Rackspace Technology",
    period: "Feb 2020 - May 2022",
    role: "Cloud Engineer",
    description: "Managed cloud infrastructure and implemented DevOps practices for enterprise clients.",
    highlights: [
      "Designed and implemented CI/CD pipelines",
      "Reduced deployment time by 60% through automation",
      "Managed multi-cloud environments for 20+ clients"
    ]
  },
  {
    company: "Siemens",
    period: "Feb 2019 - Feb 2020",
    role: "Software Engineer",
    description: "Developed industrial automation software and implemented IoT solutions.",
    highlights: [
      "Developed real-time monitoring systems",
      "Implemented IoT sensors data processing",
      "Improved system reliability by 35%"
    ]
  },
];

interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
}

export default function ExperienceTimeline() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <SectionWrapper>
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: "1000px" }}
            >
              <Card 
                className="cursor-pointer transform-gpu transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedExp(exp)}
              >
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                    <p className="text-muted-foreground font-medium">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
                    <p className="mt-4 text-sm line-clamp-3">{exp.description}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedExp} onOpenChange={() => setSelectedExp(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedExp?.company}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-lg font-semibold text-primary">{selectedExp?.role}</p>
            <p className="text-sm text-muted-foreground mt-1">{selectedExp?.period}</p>
            <p className="mt-4">{selectedExp?.description}</p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-2">
                {selectedExp?.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}