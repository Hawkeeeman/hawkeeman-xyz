import { motion } from "framer-motion";
import { Brain, BarChart3, PieChart, Shield, Bell } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Stock Analysis", desc: "Predictive insights powered by machine learning that analyze thousands of data points in real time." },
  { icon: BarChart3, title: "Real‑Time Tracking", desc: "Live market data streaming with sub‑second latency so you never miss a move." },
  { icon: PieChart, title: "Portfolio Dashboard", desc: "Visualize your performance with interactive charts, P&L breakdowns, and allocation views." },
  { icon: Shield, title: "Risk Management", desc: "Automated stop‑loss, position sizing, and volatility alerts to protect your capital." },
  { icon: Bell, title: "Smart Alerts", desc: "Custom trading signals and AI‑generated alerts delivered across every device." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm mb-3">FEATURES</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Everything you need to trade with an edge</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 group hover:border-primary/40 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-green-sm transition-shadow">
              <f.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
