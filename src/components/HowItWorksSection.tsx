import { motion } from "framer-motion";
import { Link2, LineChart, Zap } from "lucide-react";

const steps = [
  { icon: Link2, num: "01", title: "Connect Your Brokerage", desc: "Link your existing brokerage account securely in seconds." },
  { icon: LineChart, num: "02", title: "Analyze with AI", desc: "Our AI scans live market data and surfaces actionable insights." },
  { icon: Zap, num: "03", title: "Execute Smarter Trades", desc: "Trade with confidence backed by data‑driven recommendations." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding bg-surface">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm mb-3">HOW IT WORKS</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Three steps to smarter trading</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <span className="text-7xl font-bold text-primary/10 absolute -top-6 left-1/2 -translate-x-1/2 select-none">
              {s.num}
            </span>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
