import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Heart, Award, Users, Globe, Coffee, Star, Sparkles } from "lucide-react";

export function AboutUsPage() {
  const values = [
    {
      icon: Heart,
      title: "Authentic Korean Heritage",
      description: "Every recipe is inspired by traditional Korean tea culture, bringing authentic flavors from Seoul to your cup."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source the finest ingredients directly from Korea and Taiwan, ensuring every sip meets our high standards."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections through shared love of bubble tea, creating a warm and welcoming space for everyone."
    },
    {
      icon: Globe,
      title: "Cultural Bridge",
      description: "Connecting cultures through the universal language of delicious bubble tea and Korean hospitality."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Dream Begins",
      description: "Founded by a Korean tea master with a vision to share authentic Korean bubble tea culture globally."
    },
    {
      year: "2019",
      title: "First Store Opens",
      description: "Our flagship store in Hongdae, Seoul opens, introducing handcrafted bubble tea with Korean twist."
    },
    {
      year: "2021",
      title: "Going Viral",
      description: "Seoul Cha becomes Instagram sensation with our colorful, photogenic drinks and Korean aesthetic."
    },
    {
      year: "2023",
      title: "International Expansion",
      description: "Opening stores across Asia, bringing authentic Korean bubble tea to bubble tea lovers worldwide."
    },
    {
      year: "2025",
      title: "Franchise Program",
      description: "Launching franchise opportunities to spread Seoul Cha's Korean bubble tea culture globally."
    }
  ];

  const team = [
    {
      name: "Min-jun Park",
      role: "Founder & Master Tea Blender",
      description: "Traditional Korean tea master with 15 years of experience"
    },
    {
      name: "So-young Kim",
      role: "Head of Operations",
      description: "Expert in Korean business culture and international expansion"
    },
    {
      name: "Jae-hyun Lee",
      role: "Creative Director",
      description: "K-pop culture enthusiast bringing modern aesthetics to traditional tea"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="gradient-lavender-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="korean-handwritten text-4xl md:text-6xl text-purple-800 mb-6">
            Our Seoul Cha Story 🌸
          </h1>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed">
            From the bustling streets of Seoul to your local neighborhood, Seoul Cha brings authentic Korean bubble tea culture 
            with a modern twist. We're more than just a bubble tea brand - we're a bridge between cultures, 
            sharing the warmth and hospitality of Korea through every carefully crafted cup.
          </p>
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-pink-300/30 floating-shape"></div>
          <div className="absolute top-32 right-1/4 w-20 h-20 bg-purple-300/30 floating-shape" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="korean-handwritten text-3xl text-pink-600 mb-6">
                Our Mission: Spreading Korean Tea Culture ☕
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Seoul Cha, we believe that bubble tea is more than just a drink - it's a cultural experience. 
                Our mission is to introduce the world to authentic Korean tea traditions while embracing modern 
                innovation and playful aesthetics that define contemporary Korean culture.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every cup tells a story of Korean heritage, from our traditional tea brewing methods passed down 
                through generations to our Instagram-worthy presentations that capture the vibrant spirit of Seoul's 
                café culture.
              </p>
              <div className="flex items-center gap-4 text-sm text-purple-600">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Authentic Korean Recipes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} />
                  <span>Modern Presentation</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677906362139-91630937a38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0ZWElMjBjZXJlbW9ueSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1NTMyMDE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Korean tea ceremony"
                className="rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-300 floating-shape opacity-60"></div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="korean-handwritten text-3xl text-center text-purple-600 mb-12">
              What Makes Seoul Cha Special 💜
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-purple-600" size={28} />
                    </div>
                    <h3 className="mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-20">
          <h2 className="korean-handwritten text-3xl text-center text-pink-600 mb-12">
            Our Journey Through Time 🌟
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 to-purple-300 rounded-full"></div>
              
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                      <CardContent className="p-6">
                        <div className="korean-handwritten text-2xl text-purple-600 mb-2">{event.year}</div>
                        <h3 className="mb-3">{event.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20">
          <h2 className="korean-handwritten text-3xl text-center text-purple-600 mb-12">
            Meet Our Seoul Cha Family 👥
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="text-purple-600" size={32} />
                  </div>
                  <h3 className="mb-2">{member.name}</h3>
                  <p className="korean-handwritten text-pink-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seoul Connection */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1696425175230-a43b0d8c929e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwc3RyZWV0JTIwZm9vZCUyMG1hcmtldHxlbnwxfHx8fDE3NTUzMjAxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Seoul street food market"
                className="rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-300 floating-shape opacity-60"></div>
            </div>
            
            <div>
              <h2 className="korean-handwritten text-3xl text-purple-600 mb-6">
                Straight from Seoul's Heart 💝
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our recipes are born in the vibrant cafés of Hongdae and Gangnam, where Korean youth culture 
                meets traditional tea craftsmanship. We bring the authentic taste of Seoul's street-side bubble tea 
                culture to your neighborhood, complete with the playful aesthetics and warm hospitality that 
                Korea is famous for.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From the neon-lit streets of Myeongdong to the trendy cafés of Itaewon, Seoul Cha captures 
                the essence of Korean urban culture in every colorful, Instagram-worthy cup.
              </p>
              
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mt-8">
                <p className="korean-handwritten text-xl text-purple-800 mb-2">
                  "안녕하세요! Welcome to Seoul Cha!"
                </p>
                <p className="text-gray-700 text-sm">
                  Just like how we greet everyone with warmth in Korea, every Seoul Cha experience is 
                  filled with genuine hospitality and joy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}