import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    features: ["Initial consultation", "Basic meal plan", "Email support", "Monthly check-in"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    features: ["Everything in Basic", "Weekly coaching calls", "AI health assistant", "Custom supplement plan", "Priority support"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$199",
    period: "/month",
    features: ["Everything in Pro", "Daily monitoring", "Direct doctor access", "Lab work included", "Family plan option", "VIP community"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section className="section-padding bg-background" id="pricing">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Simple <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-14">Choose the plan that fits your journey.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`glass-card p-8 relative text-left ${plan.highlighted ? "ring-2 ring-primary animate-pulse-glow" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? "hero" : "heroOutline"}
              className="w-full"
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
