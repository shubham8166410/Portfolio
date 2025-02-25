import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiLinkedin, SiInstagram, SiThreads } from "react-icons/si";

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/your-profile",
    description: "Connect with me on LinkedIn for professional networking and updates."
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com/your-profile",
    description: "Follow my Instagram for personal moments and creative content."
  },
  {
    name: "Threads",
    icon: SiThreads,
    url: "https://threads.net/@your-profile",
    description: "Join the conversation with me on Threads."
  }
];

export default function Footer() {
  const [selectedSocial, setSelectedSocial] = useState<SocialLink | null>(null);

  return (
    <footer className="mt-24 border-t border-primary/10 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.button
                  key={social.name}
                  className="text-primary/60 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSocial(social)}
                >
                  <Icon className="w-6 h-6" />
                </motion.button>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} ShubhamPandey. All rights reserved.
          </p>
        </div>
      </div>

      <Dialog open={!!selectedSocial} onOpenChange={() => setSelectedSocial(null)}>
        <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              {selectedSocial?.icon && (
                <selectedSocial.icon className="w-6 h-6 text-primary" />
              )}
              {selectedSocial?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground mb-6">{selectedSocial?.description}</p>
            <motion.a
              href={selectedSocial?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Visit {selectedSocial?.name}
              {selectedSocial?.icon && <selectedSocial.icon className="w-4 h-4" />}
            </motion.a>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
