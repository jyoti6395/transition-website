import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Send } from "lucide-react";

const AIAssistantSection = () => (
  <section className="section-padding bg-background" id="ai">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Chat UI mockup */}
          <div className="glass-card overflow-hidden">
            <div className="bg-primary p-4 flex items-center gap-3">
              <Bot className="w-6 h-6 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground">AI Health Assistant</span>
              <span className="ml-auto w-2 h-2 rounded-full bg-green-fresh animate-pulse" />
            </div>
            <div className="p-5 space-y-4 bg-secondary/20">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                  <p className="text-sm text-foreground">Hi! I'm your AI health assistant. How can I help you today? 🌿</p>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-primary rounded-2xl rounded-tr-sm p-4 max-w-xs">
                  <p className="text-sm text-primary-foreground">What foods help lower blood sugar?</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-xs">
                  <p className="text-sm text-foreground">Great question! Leafy greens, berries, and legumes are excellent for blood sugar management. Want a personalized meal plan?</p>
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-border flex items-center gap-2">
              <div className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm text-muted-foreground">Ask me anything...</div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Send className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">AI Powered</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your 24/7 <span className="gradient-text">Health Assistant</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ask anything about your health, anytime. Our AI assistant provides instant, science-backed answers to your wellness questions.
          </p>
          <Button variant="hero" size="lg" className="px-8">
            Try AI Assistant
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AIAssistantSection;
