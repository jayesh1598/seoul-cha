import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Matcha Cream Boba",
      description: "Rich ceremonial-grade matcha blended with silky cream and soft tapioca pearls. A zen moment in every sip.",
      image: "https://images.unsplash.com/photo-1558980648-73775672e179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBidWJibGUlMjB0ZWElMjBncmVlbiUyMGJvYmF8ZW58MXx8fHwxNzU1MDk3MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "gradient-mint-sage",
      color: "var(--seoul-mint)",
      icon: "🍵",
      tags: ["Premium", "Zen"],
      price: "$6.90"
    },
    {
      id: 2,
      name: "Strawberry Milk Tea",
      description: "Fresh Korean strawberries blended with creamy milk tea and bursting popping boba for a sweet surprise.",
      image: "https://images.unsplash.com/photo-1585076734590-3c649a2033d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwbWlsayUyMHRlYSUyMHBpbmslMjBib2JhfGVufDF8fHx8MTc1NTA5NzAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "gradient-pink-rose",
      color: "var(--seoul-pink)",
      icon: "🍓",
      tags: ["Popular", "Sweet"],
      price: "$7.50"
    },
    {
      id: 3,
      name: "Mango Yakult Tea",
      description: "Tropical mango tea perfectly balanced with tangy Yakult for that authentic Korean refreshing taste.",
      image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYW5nbyUyMGJ1YmJsZSUyMHRlYSUyMG9yYW5nZSUyMHllbGxvd3xlbnwxfHx8fDE3NTUwOTcwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "gradient-peach-sky",
      color: "var(--seoul-peach)",
      icon: "🥭",
      tags: ["Tangy", "Refresh"],
      price: "$7.20"
    }
  ];

  return (
    <section className="py-20 relative" style={{ backgroundColor: 'var(--seoul-cream)' }}>
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🌸</div>
        <div className="absolute top-20 right-20 text-4xl">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl">🧋</div>
        <div className="absolute bottom-10 right-10 text-3xl">💫</div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--seoul-lavender)', color: 'white' }}>
            ✨ Our Signature Drinks
          </div>
          
          <h2 className="text-3xl md:text-5xl">
            <span className="block">Taste the</span>
            <span className="korean-handwritten text-4xl md:text-6xl" style={{ color: 'var(--seoul-pink)' }}>
              Seoul Difference
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each drink is carefully crafted with premium ingredients imported from Korea, 
            bringing authentic flavors to your cup.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
            >
              <div className="relative">
                <ImageWithFallback 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                
                {/* Overlay with Icon */}
                <div className="absolute top-4 right-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: product.color }}
                  >
                    <span className="text-xl">{product.icon}</span>
                  </div>
                </div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge 
                    className="px-3 py-2 text-sm shadow-lg"
                    style={{ backgroundColor: 'white', color: product.color }}
                  >
                    {product.price}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <div className="flex gap-2">
                    {product.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs"
                        style={{ borderColor: product.color, color: product.color }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <button 
                  className="w-full py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: product.color, color: 'white' }}
                >
                  Add to Cart 🛒
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-3xl shadow-xl" style={{ backgroundColor: 'white' }}>
            <p className="text-lg mb-4">Can't decide? Try our</p>
            <h3 className="korean-handwritten text-3xl mb-4" style={{ color: 'var(--seoul-lavender)' }}>
              Seoul Cha Tasting Flight
            </h3>
            <p className="text-gray-600 mb-6">Small cups of all three signature drinks - $18.00</p>
            <button 
              className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: 'var(--seoul-lavender)', color: 'white' }}
            >
              🍻 Order Tasting Flight
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}