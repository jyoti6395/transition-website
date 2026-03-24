import { motion } from "framer-motion";
import { TrendingUp, Apple, Activity } from "lucide-react";

const TrackSection = () => (
  <section className="section-padding bg-secondary/30" id="track">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Track Your <span className="gradient-text">Health</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Track your transformation with real data, not guesswork. Get insights into your progress with detailed analytics.
          </p>
          <div className="space-y-4">
            {[
              { icon: TrendingUp, text: "Progress graphs & health metrics" },
              { icon: Apple, text: "Personalized meal plans" },
              { icon: Activity, text: "Vitals tracking & alerts" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass-card p-6 md:p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Mock dashboard UI */}
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-display font-semibold text-foreground">Health Score</span>
              <span className="text-accent font-bold text-2xl">92</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <div className="bg-accent h-3 rounded-full" style={{ width: "92%" }} />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { label: "Weight", value: "-12 lbs", trend: "↓" },
                { label: "Blood Sugar", value: "Normal", trend: "✓" },
                { label: "Energy", value: "High", trend: "↑" },
              ].map((stat) => (
                <div key={stat.label} className="bg-secondary/80 rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                  <div className="font-semibold text-foreground text-sm">{stat.value}</div>
                  <div className="text-accent text-xs mt-1">{stat.trend}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-secondary/50 rounded-xl p-4">
              <div className="text-sm font-medium text-foreground mb-3">Weekly Progress</div>
              <div className="flex items-end gap-2 h-20">
                {[40, 55, 45, 65, 70, 80, 92].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t-md relative" style={{ height: `${h}%` }}>
                    <div className="absolute inset-0 bg-primary rounded-t-md" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrackSection;
