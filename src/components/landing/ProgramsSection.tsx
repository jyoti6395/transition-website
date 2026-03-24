import { motion } from "framer-motion";
import { Leaf, Heart, Zap } from "lucide-react";

const programs = [
  { icon: Leaf, title: "Weight Loss", desc: "Sustainable, plant-powered weight management.", color: "text-green-fresh" },
  { icon: Heart, title: "Diabetes Reversal", desc: "Reverse type 2 diabetes through nutrition.", color: "text-primary" },
  { icon: Zap, title: "Gut Health", desc: "Restore your microbiome for total wellness.", color: "text-accent" },
];

const ProgramsSection = () => (
  <section className="section-padding bg-background" id="programs">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="gradient-text">Programs</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-14">
          Targeted healing programs designed by medical professionals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            className="glass-card p-8 hover-scale group cursor-pointer relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                <p.icon className={`w-8 h-8 ${p.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground">{p.desc}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
