import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}