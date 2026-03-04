import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden glass border-primary/20 p-10 sm:p-16 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Start trading with AI today</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Join thousands of traders using TradeNova to make smarter, faster, data‑driven decisions.
          </p>
          <Button size="lg" className="glow-green text-base px-10 gap-2">
            Get Started Free <ArrowRight size={18} />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
