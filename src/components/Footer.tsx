import { Heart, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-primary" />
          <span className="font-display text-lg tracking-wider text-gradient">ELESS</span>
        </div>

        {/* Made with love */}
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5 flex-wrap">
          Made with{" "}
          <Heart className="w-4 h-4 text-red-500 animate-pulse inline-block" fill="currentColor" />{" "}
          for ELESS
          <span className="text-foreground/60">—</span>
          <span className="text-foreground font-medium">Chandan Kumar Singh</span>
        </p>

        {/* Year */}
        <p className="text-muted-foreground/50 text-xs mt-4">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
