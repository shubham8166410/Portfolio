import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Cloud Infrastructure Dashboard",
    description: "A real-time monitoring dashboard for cloud resources built with React and Node.js, featuring live metrics and automated scaling recommendations.",
    tech: ["React", "Node.js", "AWS", "Grafana"],
    demoUrl: "https://dashboard-demo.example.com",
    githubUrl: "https://github.com/username/cloud-dashboard",
    image: "dashboard.png"
  },
  {
    title: "Payment Processing System",
    description: "Secure payment processing system with fraud detection capabilities, handling thousands of transactions daily.",
    tech: ["Kotlin", "PostgreSQL", "Docker", "Kubernetes"],
    demoUrl: "https://payments.example.com",
    githubUrl: "https://github.com/username/payment-system",
    image: "payments.png"
  },
  {
    title: "IoT Monitoring Platform",
    description: "Industrial IoT platform for real-time sensor data collection and analysis, supporting multiple protocols and data formats.",
    tech: ["Python", "MongoDB", "MQTT", "Grafana"],
    demoUrl: "https://iot-platform.example.com",
    githubUrl: "https://github.com/username/iot-platform",
    image: "iot.png"
  }
];

export default function ProjectsSection() {
  return (
    <SectionWrapper>
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: "1000px" }}
            >
              <Card className="h-full transform-gpu transition-all duration-300 hover:shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
