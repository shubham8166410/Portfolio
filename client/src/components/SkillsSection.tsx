import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "./SectionWrapper";
import { 
  SiJavascript, 
  SiKotlin, 
  SiNodedotjs, 
  SiPython, 
  SiReact, 
  SiTypescript, 
  SiAngular, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiJenkins, 
  SiGithubactions, 
  SiAmazon, 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiPrometheus, 
  SiGrafana 
} from "react-icons/si";

const skills = [
  {
    category: "Backend",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Angular.js", icon: SiAngular },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "AWS", icon: SiAmazon },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function SkillsSection() {
  return (
    <SectionWrapper>
      <motion.div layout>
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                }}
                transition={{ duration: 0.2 }}
              >
                <Card className="transform-gpu transition-transform duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {category.items.map((skill) => (
                        <motion.div
                          key={skill.name}
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <skill.icon className="h-5 w-5" />
                          <span>{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}