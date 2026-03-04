import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Stock market data visualization" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          AI-Powered Trading Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Trade Smarter.
          <br />
          <span className="text-gradient">Move Faster.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          AI‑powered insights built for serious traders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="glow-green text-base px-8 gap-2">
            Get Started <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 gap-2 border-border/50 hover:bg-accent">
            <Play size={16} /> View Live Demo
          </Button>
        </motion.div>

        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex animate-ticker whitespace-nowrap font-mono text-xs text-muted-foreground gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                <span>AAPL <span className="text-primary">+2.34%</span></span>
                <span>TSLA <span className="text-destructive">-1.12%</span></span>
                <span>MSFT <span className="text-primary">+0.87%</span></span>
                <span>NVDA <span className="text-primary">+4.56%</span></span>
                <span>AMZN <span className="text-destructive">-0.45%</span></span>
                <span>GOOG <span className="text-primary">+1.23%</span></span>
                <span>META <span className="text-primary">+3.01%</span></span>
                <span>BTC <span className="text-primary">+5.67%</span></span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
