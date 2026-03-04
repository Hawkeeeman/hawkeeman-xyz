import { motion } from "framer-motion";
import dashboardImg from "@/assets/dashboard-preview.jpg";

const DashboardPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary font-mono text-sm mb-3">DASHBOARD</p>
        <h2 className="text-3xl sm:text-5xl font-bold">Your command center</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Charts, portfolio, order book, and news — all in one real‑time view.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-xl overflow-hidden border border-border/50 glow-green"
      >
        <img
          src={dashboardImg}
          alt="TradeNova dashboard showing stock charts, portfolio balance, and market news"
          className="w-full h-auto"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </motion.div>
    </div>
  </section>
);

export default DashboardPreview;
