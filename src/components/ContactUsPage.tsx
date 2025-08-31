import { EnquiryForm } from "./EnquiryForm";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Navigation,
  Heart
} from "lucide-react";

export function ContactUsPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Flagship Store",
      details: [
        "FOOD CASTLE",
        "Vasna - Bhayli Main Road, Behind Nayara Petrol Pump",
        "Bhayli, Vadodara(Gujarat) 391410"

      ],
      action: {
        label: "Get Directions",
        onClick: () => window.open('https://maps.google.com/?q=Hongdae+Seoul', '_blank')
      }
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        
        "Franchise Enquiry: +91 635 7013 736"
      ],
      action: {
        label: "Call Now",
        onClick: () => window.open('tel:+916357013736', '_blank')
      }
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "Franchise Enquiry: support@seoulcha.com",
       
      ],
      action: {
        label: "Send Email",
        onClick: () => window.open('mailto:support@seoulcha.com', '_blank')
      }
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 10:00 PM",
        "Saturday - Sunday: 9:00 AM - 11:00 PM",
        "Holidays: 10:00 AM - 9:00 PM"
      ],
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@seoul_cha_",
      url: "https://www.instagram.com/seoul_cha_/",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Seoul Cha Official",
      url: "https://www.facebook.com/profile.php?id=61572602241104",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@SeoulChaOfficial",
      url: "https://twitter.com/seoulcha",
      color: "from-sky-400 to-sky-600"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "Business Chat",
      followers: "Quick replies",
      url: "https://wa.me/916357013736",
      color: "from-green-500 to-green-600"
    }
  ];

  const locations = [
    {
      name: "Vadodara - Bhayli",
      address: "FOOD CASTLE, Vasna-Bhayli Main Road, Behind Nayara Petrol Pump, Bhayli, Vadodara (Gujarat) 391410",
      phone: "+91 635 7013 736",
      status: "Open Now"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+916357013736";
    const message = "Hi! I have a question about Seoul Cha. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="gradient-rose-sage py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="korean-handwritten text-4xl md:text-6xl text-purple-800 mb-6">
            Get in Touch 💬
          </h1>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Have questions about our bubble tea? Want to partner with us? Or just want to say hello? 
            We'd love to hear from you! Our team is here to help with Korean hospitality and warmth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Us Now
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-300 text-purple-700 py-3 px-8 rounded-full hover:bg-purple-50"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send Message
            </Button>
          </div>
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-pink-300/30 floating-shape"></div>
          <div className="absolute top-32 right-1/4 w-20 h-20 bg-purple-300/30 floating-shape" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <section className="py-20 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-purple-600" size={28} />
                  </div>
                  <h3 className="mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {(info.details ?? []).map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <Button
                      onClick={info.action.onClick}
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-sm py-2 px-4 rounded-full"
                    >
                      {info.action.label}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20">
          <h2 className="korean-handwritten text-3xl text-center text-pink-600 mb-12">
            Find Seoul Cha Near You 📍
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="border-0 overflow-hidden shadow-xl">
                <div className="relative h-96 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  {/* Placeholder for actual map integration */}
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 text-purple-600" size={48} />
                    <h3 className="korean-handwritten text-2xl text-purple-600 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Find the nearest Seoul Cha location
                    </p>
                    <Button
                      onClick={() => window.open('https://maps.google.com/?q=Seoul+Cha+bubble+tea', '_blank')}
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full"
                    >
                      <Navigation size={16} className="mr-2" />
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Locations List */}
            <div className="space-y-4">
              <h3 className="korean-handwritten text-xl text-purple-600 mb-4">Our Locations</h3>
              {locations.map((location, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{location.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        location.status === 'Open Now' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {location.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs mb-2">{location.address}</p>
                    <p className="text-purple-600 text-xs">{location.phone}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h2 className="korean-handwritten text-3xl text-purple-600 mb-4">
              Follow Our Seoul Cha Journey 💜
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Stay connected with us on social media for the latest updates, new flavors, 
              behind-the-scenes content, and Korean bubble tea culture!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => window.open(social.url, '_blank')}>
                  <CardContent className="p-6 text-center">
                    <div className={`bg-gradient-to-r ${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                      <social.icon size={28} />
                    </div>
                    <h3 className="mb-2">{social.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{social.handle}</p>
                    <p className="text-xs text-gray-500">{social.followers}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20">
          <div className="text-center mb-12">
            <h2 className="korean-handwritten text-3xl text-purple-600 mb-4">
              Send Us a Message 💌
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a specific question or feedback? Fill out the form below and we'll get back to you 
              as soon as possible with the warmth and care that Seoul Cha is known for.
            </p>
          </div>
          
          <EnquiryForm 
            type="general" 
            title="Contact Form"
          />
        </section>

        {/* Korean Hospitality Message */}
        <section className="py-16">
          <Card className="border-0 bg-gradient-to-r from-pink-100 to-purple-100 text-center">
            <CardContent className="p-12">
              <Heart className="mx-auto mb-6 text-pink-500" size={48} />
              <h3 className="korean-handwritten text-2xl text-purple-800 mb-4">
                Korean Hospitality Awaits You
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                At Seoul Cha, we believe in "정성" (jeongseong) - putting heart and sincerity into everything we do. 
                Whether you're visiting our store, sending us a message, or considering a franchise partnership, 
                you'll experience the genuine warmth and care that defines Korean hospitality. 
                We're not just serving bubble tea; we're sharing a piece of Korean culture with love.
              </p>
              <p className="korean-handwritten text-xl text-pink-600 mt-6">
                안녕하세요! Welcome to our Seoul Cha family! 🌸
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
