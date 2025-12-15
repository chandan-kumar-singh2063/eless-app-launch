import { Download, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const apkUrl = "https://github.com/chandan-kumar-singh2063/eless-app/releases/download/V1.3/eless.apk";
    const link = document.createElement("a");
    link.href = apkUrl;
    // For cross-origin downloads, the download attribute might be ignored, 
    // but GitHub headers usually force download anyway.
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Electric lightbulb glowing"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? "opacity-50" : "opacity-0"
            }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Subtle animated glow particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-[60px] animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        {/* 3D Rotating Electric Logo */}
        <div className={`mb-6 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}>
          <div className="relative w-20 h-20 md:w-28 md:h-28">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full animate-subtle-glow" />

            {/* 3D rotating container */}
            <div className="relative w-full h-full rounded-full flex items-center justify-center animate-3d-rotate">
              {/* Multiple layered zap icons for 3D depth effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-sm">
                <Zap className="w-10 h-10 md:w-14 md:h-14 text-primary" strokeWidth={2} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-50">
                <Zap className="w-9 h-9 md:w-13 md:h-13 text-primary icon-glow-3d" strokeWidth={1.5} />
              </div>
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-primary icon-glow-3d" strokeWidth={1.5} />
            </div>

            {/* Orbiting spark */}
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-primary/60 rounded-full animate-spark" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-3 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <span className="text-gradient text-glow-subtle">ELESS</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-muted-foreground text-xs md:text-sm mb-1 tracking-widest uppercase transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
          Electrical Engineering
        </p>
        <p className={`text-foreground/80 text-base md:text-lg mb-8 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
          Student's Society
        </p>

        {/* Download Button with animated icon */}
        <div className={`transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <Button
            onClick={handleDownload}
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95 animate-subtle-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5 animate-download-float" />
              <span className="font-display tracking-wide">Download ELESS App</span>
            </span>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
