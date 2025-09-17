import { Separator } from "./ui/separator";

interface FooterProps {
  onPageChange?: (page: string) => void;
  currentPage?: string;
}

export function Footer({ onPageChange, currentPage }: FooterProps) {
  const navItems = [

    { id: "menu", label: "Menu" },
    { id: "about", label: "About Us" },
    { id: "franchise", label: "Franchise" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "rgb(253 225 95)" }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-8xl text-black">🌸</div>
        <div className="absolute top-20 right-20 text-6xl text-black">🧋</div>
        <div className="absolute bottom-20 left-20 text-7xl text-black">💜</div>
        <div className="absolute bottom-10 right-10 text-5xl text-black">✨</div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <Separator className="bg-black/20 mb-12" />

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-black text-lg mb-4">🏪 Seoul Cha</h4>
            <p className="text-black/80 text-sm leading-relaxed">
              Bringing authentic Korean bubble tea culture to your neighborhood. Every cup tells a story
              from Seoul to your soul.
            </p>

            <div className="space-y-2 text-sm">
              <p className="text-black/80">
                FOOD CASTLE, Vasna - Bhayli Main Road, Behind Nayara Petrol Pump,
              </p>
              <p className="text-black/80">Bhayli, Vadodara (Gujarat) 391410</p>
              <p className="text-black/80">☎️ (+91) 6357 013 736</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-black text-lg mb-4">🔗 Quick Links</h4>

            <nav aria-label="Footer navigation">
              <ul className="grid sm:grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onPageChange?.(item.id)}
                        className={`w-full text-left px-4 py-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-black shadow-sm"
                            : "text-black/90 hover:text-black hover:bg-black/10"
                        }`}
                        style={isActive ? { color: 'var(--seoul-orange)' } : {}}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h4 className="text-black text-lg mb-4">📱 Connect With Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-black/80">📧 support@seoulcha.com</p>
              <p className="text-black/80">🕒 Mon–Thu: 10AM–9PM</p>
              <p className="text-black/80">🕒 Fri–Sat: 10AM–11PM</p>
              <p className="text-black/80">🕒 Sun: 11AM–8PM</p>
            </div>

            <div className="korean-handwritten text-black/80 text-sm mt-4">
              #SeoulChaVibes #BubbleTeaLife
            </div>
          </div>
        </div>

        <Separator className="bg-black/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-black/60 text-sm text-center md:text-left">
            © 2025 Seoul Cha. All rights reserved. Made with 💜{" "}
            <a
              href="https://www.softcofrnds.com"
              className="underline hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoftCoFrnds IT Solutions
            </a>
            .
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <button
              type="button"
              onClick={() => onPageChange?.("terms")}
              className="text-black/80 hover:text-black transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button
              type="button"
              onClick={() => onPageChange?.("privacy")}
              className="text-black/80 hover:text-black transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>

            <a
              href="https://www.instagram.com/seoul_cha_/"
              className="text-black/80 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="fill-black opacity-10">
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </footer>
  );
}
