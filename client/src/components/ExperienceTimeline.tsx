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

export default function ExperienceTimeline() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="relative max-w-3xl mx-auto">
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
            <Card className={`inline-block max-w-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-muted-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}