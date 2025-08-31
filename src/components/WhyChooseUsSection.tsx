import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: "🇰🇷",
      title: "Authentic Korean Brewing Standards",
      description: "Our baristas follow traditional Korean tea brewing methods passed down through generations, combined with modern bubble tea techniques.",
      gradient: "gradient-pink-mint",
      color: "var(--seoul-pink)"
    },
    {
      icon: "🌟",
      title: "Premium Imported Ingredients",
      description: "We source the finest tea leaves, tapioca pearls, and flavor syrups directly from Korea's most trusted suppliers.",
      gradient: "gradient-lavender-cream",
      color: "var(--seoul-purple)"
    },
    {
      icon: "🎨",
      title: "Creative & Trendy Flavors",
      description: "Innovative combinations inspired by Korean pop culture, seasonal ingredients, and customer favorites from Seoul's trendiest cafes.",
      gradient: "gradient-peach-sky",
      color: "var(--seoul-orange)"
    },
    {
      icon: "🌱",
      title: "Vegan & Keto-Friendly Options",
      description: "Plant-based milk alternatives, sugar-free syrups, and keto-approved toppings so everyone can enjoy Seoul Cha.",
      gradient: "gradient-rose-sage",
      color: "var(--seoul-turquoise)"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 text-8xl">✨</div>
        <div className="absolute top-40 right-20 text-6xl">🎯</div>
        <div className="absolute bottom-20 left-20 text-7xl">💎</div>
        <div className="absolute bottom-10 right-10 text-5xl">🏆</div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-20 h-20 gradient-pink-mint floating-shape opacity-10"></div>
        <div className="absolute top-60 left-10 w-16 h-16 gradient-lavender-cream floating-shape opacity-15" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 gradient-peach-sky floating-shape opacity-10" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 left-16 w-14 h-14 gradient-rose-sage floating-shape opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--seoul-orange)', color: 'white' }}>
            🏆 Why Choose Us?
          </div>
          
          <h2 className="text-3xl md:text-5xl">
            <span className="korean-handwritten text-4xl md:text-6xl" style={{ color: 'var(--seoul-coral)' }}>
              Why Seoul Cha
            </span>
            <span className="block">Stands Out</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another bubble tea shop. We're bringing authentic Korean tea culture 
            to your neighborhood with a modern twist that honors tradition while embracing innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Background gradient overlay */}
              <div 
                className={`absolute top-0 right-0 w-32 h-32 ${feature.gradient} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}
              ></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300"
                    style={{ backgroundColor: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-3 group-hover:text-opacity-80 transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div 
                  className="mt-4 w-8 h-1 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: feature.color }}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards & Recognition Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl shadow-2xl" style={{ backgroundColor: 'var(--seoul-cream)' }}>
            <h3 className="text-2xl mb-6">
              <span className="korean-handwritten" style={{ color: 'var(--seoul-purple)' }}>
                Awards & Recognition
              </span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🥇</div>
                <p className="text-sm">Best New Bubble Tea</p>
                <p className="text-xs text-gray-500">City Food Awards 2024</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-sm">5-Star Rating</p>
                <p className="text-xs text-gray-500">Google Reviews</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <p className="text-sm">Most Instagram-able</p>
                <p className="text-xs text-gray-500">Local Food Bloggers</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <p className="text-sm">Eco-Friendly Choice</p>
                <p className="text-xs text-gray-500">Green Business Cert.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Quote */}
     
      </div>
    </section>
  );
}
