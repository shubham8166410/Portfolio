import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "./SectionWrapper";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { SiReact, SiAmazon, SiSiemens, SiInfosys } from "react-icons/si";

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
    ],
    icon: SiReact, // Using React icon as a placeholder for Tyro
    projectImage: "/projects/payment-dashboard.png"
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
    ],
    icon: SiAmazon, // Using Amazon icon since Rackspace is a cloud provider
    projectImage: "/projects/cloud-dashboard.png"
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
    ],
    icon: SiSiemens,
    projectImage: "/projects/iot-dashboard.png"
  },
  {
    company: "Infosys",
    period: "Aug 2017 - Feb 2019",
    role: "Software Developer",
    description: "Worked on enterprise-level applications and digital transformation projects for global clients.",
    highlights: [
      "Developed microservices architecture",
      "Implemented RESTful APIs for client applications",
      "Reduced system downtime by 25% through monitoring improvements"
    ],
    icon: SiInfosys,
    projectImage: "/projects/enterprise-dashboard.png"
  }
];

interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  projectImage: string;
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
        Professional Journey
      </motion.h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/10"></div>

        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={exp.company}
              className={`flex mb-16 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <Icon className="w-4 h-4 text-white" />
              </div>

              {/* Content Card */}
              <motion.div 
                className={`flex-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedExp(exp)}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {exp.company}
                        </h3>
                        <p className="text-primary/80 font-medium">{exp.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                      </div>
                      <Icon className="w-8 h-8 text-primary/40" />
                    </div>
                    <p className="mt-4 text-sm line-clamp-2 text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <Dialog open={!!selectedExp} onOpenChange={() => setSelectedExp(null)}>
        <DialogContent className="sm:max-w-3xl bg-card/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {selectedExp?.icon && <selectedExp.icon className="w-6 h-6 text-primary" />}
              {selectedExp?.company}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
              {selectedExp?.projectImage && (
                <img 
                  src={selectedExp.projectImage} 
                  alt={`${selectedExp.company} project`}
                  className="object-cover w-full h-full"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <p className="text-lg font-semibold text-primary/80">{selectedExp?.role}</p>
            <p className="text-sm text-muted-foreground mt-1">{selectedExp?.period}</p>
            <p className="mt-4 text-muted-foreground">{selectedExp?.description}</p>
            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-primary/80">Key Achievements:</h4>
              <ul className="space-y-3">
                {selectedExp?.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
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