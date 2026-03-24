import { motion } from "framer-motion";
import { Salad, Stethoscope, BarChart3 } from "lucide-react";

const highlights = [
  { icon: Salad, title: "Personalized Diet Plans", desc: "Custom nutrition tailored to your body and goals." },
  { icon: Stethoscope, title: "Certified Doctors", desc: "Real physicians trained in plant-based medicine." },
  { icon: BarChart3, title: "Real Health Results", desc: "Measurable outcomes backed by data and science." },
];

const AboutSection = () => (
  <section className="section-padding bg-background" id="about">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          About <span className="gradient-text">The Transition</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
          We help people heal naturally through plant-based nutrition and expert medical care.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            className="glass-card p-8 hover-scale hover-glow text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
              <h.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
