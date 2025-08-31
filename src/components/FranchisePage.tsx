import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { EnquiryForm } from "./EnquiryForm";
import { 
  TrendingUp, 
  Award, 
  Users, 
  DollarSign, 
  MapPin, 
  Clock, 
  CheckCircle,
  Star,
  Coffee,
  Heart,
  Sparkles
} from "lucide-react";

export function FranchisePage() {
  const benefits = [
    {
      icon: Award,
      title: "Proven Brand Success",
      description: "Join a rapidly growing Korean bubble tea brand with proven market success and viral social media presence."
    },
    {
      icon: TrendingUp,
      title: "High Profit Margins",
      description: "Industry-leading profit margins with premium pricing for authentic Korean bubble tea experience."
    },
    {
      icon: Users,
      title: "Comprehensive Training",
      description: "Complete training program including Korean tea culture, recipes, and business operations by our Seoul masters."
    },
    {
      icon: Coffee,
      title: "Exclusive Recipes",
      description: "Access to authentic Korean recipes and ingredients sourced directly from Seoul's best suppliers."
    },
    {
      icon: MapPin,
      title: "Territory Protection",
      description: "Exclusive territory rights ensuring no competition from other Seoul Cha locations in your area."
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "Continuous support including marketing, operations, new product development, and business guidance."
    }
  ];

  const requirements = [
    {
      title: "Financial Requirements",
      items: [
        "Initial franchise fee: $45,000 USD",
        "Total investment: $120,000 - $180,000 USD",
        "Liquid capital: $80,000 USD minimum",
        "Net worth: $200,000 USD minimum"
      ]
    },
    {
      title: "Location Requirements",
      items: [
        "High foot traffic area (universities, shopping malls, business districts)",
        "Store size: 800-1,200 sq ft minimum",
        "Prominent street visibility",
        "Target demographic: 18-35 years old"
      ]
    },
    {
      title: "Experience Requirements",
      items: [
        "Previous food service or retail experience preferred",
        "Strong business management skills",
        "Passion for Korean culture and bubble tea",
        "Commitment to brand standards and values"
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Inquiry",
      description: "Submit your franchise application through our enquiry form",
      icon: Coffee
    },
    {
      step: 2,
      title: "Review & Interview",
      description: "Application review and initial interview with our franchise team",
      icon: Users
    },
    {
      step: 3,
      title: "Approval & Agreement",
      description: "Franchise approval and signing of franchise agreement",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Location & Setup",
      description: "Site selection assistance and store setup with Korean aesthetic",
      icon: MapPin
    },
    {
      step: 5,
      title: "Training Program",
      description: "Comprehensive 2-week training program in Seoul and your location",
      icon: Award
    },
    {
      step: 6,
      title: "Grand Opening",
      description: "Marketing support and grand opening assistance",
      icon: Sparkles
    }
  ];


  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="gradient-peach-sky py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="korean-handwritten text-4xl md:text-6xl text-purple-800 mb-6">
            Join the Seoul Cha Family 🌟
          </h1>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Bring authentic Korean bubble tea culture to your community. Partner with Seoul Cha 
            and be part of a rapidly growing franchise that's redefining the bubble tea experience 
            with Korean flair and premium quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Franchise Journey
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-300 text-purple-700 py-3 px-8 rounded-full hover:bg-purple-50"
            >
              Download Franchise Kit
            </Button>
          </div>
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-pink-300/30 floating-shape"></div>
          <div className="absolute top-32 right-1/4 w-20 h-20 bg-purple-300/30 floating-shape" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     

        {/* Why Choose Seoul Cha */}
        <section className="py-20">
          <h2 className="korean-handwritten text-3xl text-center text-pink-600 mb-12">
            Why Choose Seoul Cha Franchise? 💜
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-pink-200 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="text-purple-600" size={28} />
                  </div>
                  <h3 className="mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Franchise Process */}
        <section className="py-20">
          <h2 className="korean-handwritten text-3xl text-center text-pink-600 mb-12">
            Your Franchise Journey 🚀
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="relative border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center korean-handwritten">
                      {step.step}
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                      <step.icon className="text-purple-600" size={28} />
                    </div>
                    
                    <h3 className="mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1721413152547-8ee737a9586c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjBmcmFuY2hpc2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NTUzMjAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Seoul Cha franchise interior"
                className="rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-300 floating-shape opacity-60"></div>
            </div>
            
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Success Story</Badge>
              <h2 className="korean-handwritten text-3xl text-purple-600 mb-6">
                "Best Business Decision Ever!" 💝
              </h2>
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "Opening a Seoul Cha franchise has been incredibly rewarding. The authentic Korean concept, 
                comprehensive training, and ongoing support made everything smooth. Our store became the most 
                popular bubble tea spot in town within 6 months. The Korean aesthetic and authentic flavors 
                really set us apart from other bubble tea shops."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                  <Users className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Seoul Cha Franchise Owner, Vancouver</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section id="enquiry-form" className="py-20">
          <div className="text-center mb-12">
            <h2 className="korean-handwritten text-3xl text-purple-600 mb-4">
              Ready to Start Your Seoul Cha Journey? 🌟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take the first step towards owning your Seoul Cha franchise. Fill out the form below 
              and our franchise team will contact you within 24 hours.
            </p>
          </div>
          
          <EnquiryForm 
            type="franchise" 
            title="Franchise Enquiry Form"
          />
        </section>
      </div>
    </div>
  );
}