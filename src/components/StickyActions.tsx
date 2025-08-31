import { MessageCircle, Facebook, Instagram, Twitter, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function StickyActions() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+821234567890"; // Replace with actual Seoul Cha WhatsApp number
    const message = "Hi! I'm interested in Seoul Cha bubble tea. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      onClick: handleWhatsAppClick,
      bgColor: "bg-green-500 hover:bg-green-600",
      isWhatsApp: true
    },
    {
      icon: Instagram,
      label: "Instagram",
      onClick: () => window.open('https://www.instagram.com/seoul_cha_/', '_blank'),
      bgColor: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: Facebook,
      label: "Facebook",
      onClick: () => window.open('https://www.facebook.com/profile.php?id=61572602241104', '_blank'),
      bgColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      onClick: () => window.open('https://twitter.com/seoulcha', '_blank'),
      bgColor: "bg-sky-500 hover:bg-sky-600"
    },
    {
      icon: Phone,
      label: "Call Us",
      onClick: () => window.open('tel:+821234567890', '_blank'),
      bgColor: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      {/* Vertical Social Media Container */}
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <div key={index} className="relative">
            <Button
              onClick={link.onClick}
              className={`w-12 h-12 rounded-full ${link.bgColor} text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group relative flex items-center justify-center`}
              size="sm"
            >
              <link.icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                {link.label}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
              </div>
              
              {/* WhatsApp pulse animation */}
              {link.isWhatsApp && (
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 pointer-events-none"></div>
              )}
            </Button>
          </div>
        ))}
      </div>
      
      {/* Floating shapes for decoration */}
      <div className="absolute -right-8 -top-4 w-6 h-6 bg-pink-300 rounded-full floating-shape opacity-50 pointer-events-none"></div>
      <div className="absolute -left-6 top-20 w-4 h-4 bg-purple-300 rounded-full floating-shape opacity-40 pointer-events-none" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}