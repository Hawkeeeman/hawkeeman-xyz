import { motion } from "framer-motion";
import { Lock, Wifi, Target } from "lucide-react";

const items = [
  { icon: Lock, title: "Bank‑Level Encryption", desc: "256‑bit AES encryption and SOC 2 compliance keep your data safe." },
  { icon: Wifi, title: "Real‑Time Integration", desc: "Direct exchange feeds with 99.99% uptime for zero‑lag data." },
  { icon: Target, title: "Built for Active Traders", desc: "Designed from the ground up for speed, precision, and performance." },
];

const TrustSection = () => (
  <section className="section-padding bg-surface">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-mono text-sm mb-3">TRUST</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Built on security and speed</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <item.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
