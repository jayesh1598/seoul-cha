import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10">🧋</div>
        <div className="absolute top-20 right-20">🌸</div>
        <div className="absolute bottom-20 left-20">💫</div>
        <div className="absolute bottom-10 right-10">🍃</div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Illustration */}
          <div className="relative">
            <div className="rounded-3xl p-8" style={{ backgroundColor: '#fde15f' }}>
              <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
                {/* Tea Leaves Icon */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-mint-sage flex items-center justify-center text-2xl mb-2 shadow-lg">
                    🍃
                  </div>
                  <p className="text-sm">Premium Tea</p>
                </div>
                
                {/* Plus Sign */}
                <div className="text-4xl" style={{ color: '#00e2f2' }}>+</div>
                
                {/* Pearls Icon */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-lavender-cream flex items-center justify-center text-2xl mb-2 shadow-lg">
                    ⚫
                  </div>
                  <p className="text-sm">Chewy Pearls</p>
                </div>
                
                {/* Equals Sign */}
                <div className="text-4xl" style={{ color: 'var(--seoul-turquoise)' }}>=</div>
                
                {/* Cup Icon */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-pink-mint flex items-center justify-center text-2xl mb-2 shadow-lg">
                    🧋
                  </div>
                  <p className="text-sm">Seoul Cha</p>
                </div>
                
                {/* Korean Heart */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-rose-sage flex items-center justify-center text-2xl mb-2 shadow-lg">
                    💜
                  </div>
                  <p className="text-sm korean-handwritten">Sarang</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 gradient-pink-mint rounded-full floating-shape opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 gradient-lavender-cream rounded-full floating-shape opacity-60" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#00e2f2', color: 'white' }}>
                What is Bubble Tea? 🤔
              </div>
              
              <h2 className="text-3xl md:text-4xl">
                Discover the 
                <span className="korean-handwritten block text-4xl md:text-5xl" style={{ color: '#00e2f2' }}>
                  Korean Twist
                </span>
                on Bubble Tea
              </h2>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Bubble tea, originally from Taiwan, has found a special home in Korean culture. 
                At Seoul Cha, we've perfected this beloved drink with our unique Korean touch.
              </p>
              
              <p className="leading-relaxed">
                Our bubble tea combines premium tea bases with chewy tapioca pearls (boba), 
                fresh fruit flavors, and creamy milk - all inspired by traditional Korean 
                ingredients like Yakult, Korean strawberries, and ceremonial-grade matcha.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'var(--seoul-turquoise)' }}>
                  <div className="text-2xl mb-2">🌿</div>
                  <p className="text-sm">Natural Ingredients</p>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'var(--seoul-orange)' }}>
                  <div className="text-2xl mb-2">🇰🇷</div>
                  <p className="text-sm">Korean Authentic</p>
                </div>
              </div>
            </div>

            <Button 
              className="px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                background: '#00e2f2', 
                color: 'white',
                border: 'none' 
              }}
            >
              🧋 Try a Bubble Tea
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
