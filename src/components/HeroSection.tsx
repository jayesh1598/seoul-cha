import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import seoulChaLogo from "figma:asset/0acdabceb6da815cd678760318edd0e604397810.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-pink-mint floating-shape opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 gradient-lavender-cream floating-shape opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 gradient-peach-sky floating-shape opacity-25" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 gradient-rose-sage floating-shape opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={seoulChaLogo} 
                alt="Seoul Cha Logo" 
                className="w-24 h-24 rounded-full shadow-lg"
              />
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl leading-tight">
                <span className="korean-handwritten text-5xl md:text-7xl" style={{ color: '#f59144' }}>
                  Enjoy
                </span>
                <br />
                <span className="block">Authentic Korean</span>
                <span className="block">
                  Bubble Tea
                </span>
                <span className="block korean-handwritten text-3xl md:text-5xl" style={{ color: 'var(--seoul-turquoise)' }}>
                  Fresh from Seoul
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
                Made with premium ingredients and bursting with flavor, now in your city
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  background: '#f59144', 
                  color: 'white',
                  border: 'none' 
                }}
              >
                🛵 Order on Zomato
              </Button>
             
            </div>
          </div>

          {/* Right Column - Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1675955322661-88af9f6bd198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBidWJibGUlMjB0ZWElMjBib2JhJTIwcGVhcmxzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU1MDk3MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Korean Bubble Tea with Pearls"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                  <div className="absolute -top-2 -right-2 w-12 h-12 gradient-pink-mint rounded-full flex items-center justify-center">
                    <span className="text-white">✨</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1558980648-73775672e179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBidWJibGUlMjB0ZWElMjBncmVlbiUyMGJvYmF8ZW58MXx8fHwxNzU1MDk3MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Matcha Bubble Tea"
                    className="w-full h-64 object-cover rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 gradient-lavender-cream rounded-full flex items-center justify-center">
                    <span className="text-white">🧋</span>
                  </div>
                </div>
                
                <div className="korean-handwritten text-center p-4 rounded-2xl" style={{ backgroundColor: '#fde15f' }}>
                  <span className="text-2xl" style={{ color: 'var(--seoul-purple)' }}>
                    #SeoulChaVibes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
