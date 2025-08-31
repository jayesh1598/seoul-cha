import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import seoulChaLogo from "figma:asset/0acdabceb6da815cd678760318edd0e604397810.png";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#da5f5c" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-8xl text-white">
          🌸
        </div>
        <div className="absolute top-20 right-20 text-6xl text-white">
          🧋
        </div>
        <div className="absolute bottom-20 left-20 text-7xl text-white">
          💜
        </div>
        <div className="absolute bottom-10 right-10 text-5xl text-white">
          ✨
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <Separator className="bg-white/20 mb-12" />

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-white text-lg mb-4">
              🏪 Seoul Cha
            </h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Bringing authentic Korean bubble tea culture to
              your neighborhood. Every cup tells a story from
              Seoul to your soul.
            </p>

            <div className="space-y-2 text-sm">
              <p className="text-white/80">
                FOOD CASTLE,
                Vasna - Bhayli Main Road, Behind Nayara Petrol Pump,
               
              </p>
              <p className="text-white/80">
                Bhayli, Vadodara(Gujarat) 391410
              </p>
              <p className="text-white/80">
                ☎️ (+91) 6357 013 736
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg mb-4">
              🔗 Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#menu"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Our Menu
              </a>
              <a
                href="#customize"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Customize Your Drink
              </a>
              <a
                href="#catering"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Catering Services
              </a>
              <a
                href="#events"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Store Events
              </a>
              <a
                href="#franchise"
                className="block text-white/80 hover:text-white text-sm transition-colors"
              >
                Franchise Opportunities
              </a>
            </div>
          </div>

          

          {/* Connect With Us */}
          <div className="space-y-4">
            <h4 className="text-white text-lg mb-4">
              📱 Connect With Us
            </h4>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#instagram"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                📷
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                📘
              </a>
            
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-white/80">
                📧 support@seoulcha.com
              </p>
              <p className="text-white/80">
                🕒 Mon-Thu: 10AM-9PM
              </p>
              <p className="text-white/80">
                🕒 Fri-Sat: 10AM-11PM
              </p>
              <p className="text-white/80">🕒 Sun: 11AM-8PM</p>
            </div>

            <div className="korean-handwritten text-white/80 text-sm mt-4">
              #SeoulChaVibes #BubbleTeaLife
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm text-center md:text-left">
            © 2025 Seoul Cha. All rights reserved. Made with 💜
            <a href="www.softcofrnds.com">
              SoftCoFrnds IT Solutions
            </a>
            .
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#terms"
              className="text-white/80 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#privacy"
              className="text-white/80 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#media"
              className="text-white/80 hover:text-white transition-colors"
            >
              Media Kit
            </a>
            <a
              href="https://www.instagram.com/seoul_cha_/"
              className="text-white/80 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Korean Farewell */}
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          className="fill-white opacity-10"
        >
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </footer>
  );
}