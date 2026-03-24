import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor.jpg";

const DoctorSection = () => (
  <section className="section-padding bg-secondary/30" id="doctor">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden animate-pulse-glow">
            <img src={doctorImg} alt="Dr. J - Plant-based medicine specialist" className="w-full rounded-3xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Meet Your Doctor</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Dr. J
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            A pioneer in plant-based medicine with years of experience helping patients reverse chronic conditions through nutrition-focused care.
          </p>
          <p className="text-muted-foreground mb-8">
            Dr. J combines conventional medical expertise with cutting-edge nutritional science to deliver personalized healing plans that actually work.
          </p>
          <Button variant="hero" size="lg" className="px-8">
            Consult Now
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DoctorSection;
