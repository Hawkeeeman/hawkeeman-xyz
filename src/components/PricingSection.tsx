import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Get started with the basics",
    features: ["5 stock watchlists", "Daily market summary", "Basic charting", "Community access"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    desc: "Full AI toolkit for serious traders",
    features: ["Unlimited watchlists", "AI predictive signals", "Advanced charting", "Smart alerts", "Portfolio analytics", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For teams and institutions",
    features: ["Everything in Pro", "API access", "Dedicated account manager", "Custom integrations", "Compliance tools", "SLA guarantee"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm mb-3">PRICING</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Plans for every trader</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl p-6 flex flex-col ${
              p.highlighted
                ? "border-2 border-primary/60 bg-card glow-green relative"
                : "glass"
            }`}
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-3 mb-1">
              <span className="text-4xl font-bold">{p.price}</span>
              {p.period && <span className="text-muted-foreground text-sm">{p.period}</span>}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>

            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              className={p.highlighted ? "w-full glow-green-sm" : "w-full"}
              variant={p.highlighted ? "default" : "outline"}
            >
              {p.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
