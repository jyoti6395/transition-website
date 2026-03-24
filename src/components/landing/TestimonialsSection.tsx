import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { name: "Sarah M.", result: "Lost 30 lbs in 4 months", text: "The Transition changed my life. I never thought plant-based eating could be this delicious and effective!", avatar: "S" },
  { name: "James K.", result: "Reversed Type 2 Diabetes", text: "Dr. J's program helped me get off my medications. My blood sugar is now normal for the first time in years.", avatar: "J" },
  { name: "Linda R.", result: "Gut issues resolved", text: "After years of digestive problems, I finally found relief. The personalized approach made all the difference.", avatar: "L" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-secondary/30" id="testimonials">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real <span className="gradient-text">Transformations</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-14">Stories from our community.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`glass-card p-8 text-left cursor-pointer transition-all duration-300 ${active === i ? "ring-2 ring-primary" : ""}`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-accent text-xs font-medium">{t.result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
