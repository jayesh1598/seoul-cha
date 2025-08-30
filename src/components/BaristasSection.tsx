import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BaristasSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Seoul skyline pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 opacity-10" style={{ backgroundColor: 'var(--seoul-sky)' }}></div>
        <div className="absolute top-10 left-10 text-8xl opacity-5">🏙️</div>
        <div className="absolute top-20 right-20 text-6xl opacity-5">🌸</div>
        <div className="absolute bottom-10 left-20 text-7xl opacity-5">🇰🇷</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-5">🍃</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--seoul-mint)', color: 'white' }}>
            👩‍🍳 Meet Our Team
          </div>
          
          <h2 className="text-3xl md:text-5xl">
            <span className="block">Our Seoul Cha</span>
            <span className="korean-handwritten text-4xl md:text-6xl" style={{ color: 'var(--seoul-rose)' }}>
              Tea Masters
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each of our baristas has trained in Seoul's most prestigious tea houses, 
            bringing authentic Korean tea culture and brewing techniques to every cup we serve.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Team Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1598059734291-f65af5768605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiYXJpc3RhJTIwdGVhJTIwbWFzdGVyJTIwc2VvdWx8ZW58MXx8fHwxNzU1MDk3MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Korean Tea Master in Seoul"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Certification Badge */}
            <div className="absolute -top-6 -right-6 p-6 rounded-3xl shadow-xl" style={{ backgroundColor: 'var(--seoul-lavender)' }}>
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-sm">Seoul Certified</p>
                <p className="text-xs opacity-80">Tea Masters</p>
              </div>
            </div>
            
            {/* Seoul Cultural Elements */}
            <div className="absolute -bottom-4 -left-4 grid grid-cols-2 gap-2">
              <div className="w-12 h-12 rounded-full gradient-pink-mint flex items-center justify-center text-xl shadow-lg">
                🏯
              </div>
              <div className="w-12 h-12 rounded-full gradient-peach-sky flex items-center justify-center text-xl shadow-lg">
                🌸
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Training Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl">
                Authentic Korean 
                <span className="korean-handwritten text-3xl block" style={{ color: 'var(--seoul-mint)' }}>
                  Training & Culture
                </span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--seoul-cream)' }}>
                  <div className="w-12 h-12 rounded-full gradient-rose-sage flex items-center justify-center text-xl">
                    🍵
                  </div>
                  <div>
                    <h4>Traditional Tea Ceremony</h4>
                    <p className="text-sm text-gray-600">Trained in Seoul's historic Insadong tea district</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--seoul-cream)' }}>
                  <div className="w-12 h-12 rounded-full gradient-lavender-cream flex items-center justify-center text-xl">
                    🧋
                  </div>
                  <div>
                    <h4>Modern Bubble Tea Techniques</h4>
                    <p className="text-sm text-gray-600">Latest brewing methods from Gangnam's best cafes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--seoul-cream)' }}>
                  <div className="w-12 h-12 rounded-full gradient-pink-mint flex items-center justify-center text-xl">
                    🇰🇷
                  </div>
                  <div>
                    <h4>Korean Flavor Profiles</h4>
                    <p className="text-sm text-gray-600">Deep understanding of Korean taste preferences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2" style={{ color: 'var(--seoul-pink)' }}>6+</div>
                  <p className="text-sm">Months Training</p>
                  <p className="text-xs text-gray-500">in Seoul</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2" style={{ color: 'var(--seoul-mint)' }}>100%</div>
                  <p className="text-sm">Authentic</p>
                  <p className="text-xs text-gray-500">Korean Methods</p>
                </CardContent>
              </Card>
            </div>

            {/* Korean Text with Translation */}
            <div className="p-6 rounded-xl border-l-4" style={{ backgroundColor: 'var(--seoul-cream)', borderColor: 'var(--seoul-lavender)' }}>
              <p className="korean-handwritten text-xl mb-2" style={{ color: 'var(--seoul-lavender)' }}>
                "정성을 다해 만든 차 한 잔"
              </p>
              <p className="text-sm text-gray-600 italic">
                "A cup of tea made with sincere heart" - Our philosophy at Seoul Cha
              </p>
            </div>

            {/* Meet the Team CTA */}
            <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--seoul-mint)' }}>
              <p className="text-white mb-4">Want to meet our tea masters in person?</p>
              <Badge className="px-6 py-2" style={{ backgroundColor: 'white', color: 'var(--seoul-mint)' }}>
                Visit Our Store 📍
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}