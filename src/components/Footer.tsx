const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">
        Trade<span className="text-gradient">Nova</span>
      </span>
      <p>© {new Date().getFullYear()} TradeNova. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
