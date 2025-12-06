import { Facebook, Linkedin, Github, Instagram, Code2, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import developerPhoto from "@/assets/developer-photo.jpg";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/", // Replace with actual URL
    colorClass: "hover:bg-facebook hover:text-foreground hover:shadow-[0_0_25px_hsl(221_44%_41%/0.6)]",
    bgClass: "bg-facebook/10 text-facebook",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/", // Replace with actual URL
    colorClass: "hover:bg-linkedin hover:text-foreground hover:shadow-[0_0_25px_hsl(201_100%_35%/0.6)]",
    bgClass: "bg-linkedin/10 text-linkedin",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/", // Replace with actual URL
    colorClass: "hover:bg-github hover:text-background hover:shadow-[0_0_25px_hsl(0_0%_98%/0.4)]",
    bgClass: "bg-github/10 text-github",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/", // Replace with actual URL
    colorClass: "hover:bg-instagram hover:text-foreground hover:shadow-[0_0_25px_hsl(340_75%_54%/0.6)]",
    bgClass: "bg-instagram/10 text-instagram",
  },
];

const DeveloperSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient with glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-md mx-auto">
        {/* Section title */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4 tracking-widest uppercase">
            <Code2 className="w-4 h-4" />
            <span>Developer</span>
            <Sparkles className="w-4 h-4 text-primary animate-spark" />
          </div>
        </div>

        {/* Developer Card */}
        <div
          ref={cardRef}
          className={`glass-card p-8 glow-border transition-all duration-700 delay-150 ${cardVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
            }`}
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-full animate-subtle-glow scale-105" />

              {/* Glass blob container with image */}
              <div className="w-32 h-32 md:w-40 md:h-40 glass-blob overflow-hidden animate-profile-glow">
                <img
                  src={developerPhoto}
                  alt="Chandan Kumar Singh - App Developer"
                  className="w-full h-full object-cover object-[0%_60%] scale-[1.6] translate-x-[15%]"
                />
              </div>

              {/* Decorative electric ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.15] animate-[spin_25s_linear_infinite]" />
            </div>
          </div>

          {/* Name */}
          <h2 className="font-display text-lg md:text-xl font-semibold text-center text-foreground mb-1 tracking-wide text-glow-subtle">
            Chandan Kumar Singh
          </h2>

          {/* Role */}
          <p className="text-muted-foreground text-center text-xs mb-6">
            App Developer
          </p>

          {/* Social Links with enhanced hover effects */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 ${social.bgClass} ${social.colorClass}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: cardVisible ? `${index * 100}ms` : '0ms'
                }}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />

                {/* Tooltip with glow */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-foreground bg-card/90 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg border border-border/30">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
