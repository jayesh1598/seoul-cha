import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Leaf, Coffee, Heart } from "lucide-react";

export function MenuPage() {
  const menuCategories = [
    {
      title: "Signature Seoul Cha",
      items: [
        {
          name: "Seoul Rose Milk Tea",
          description: "Our signature blend with rose petals and creamy milk",
          price: "₩5,500",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Popular", "New"],
          rating: 4.9
        },
        {
          name: "K-Pop Purple Taro",
          description: "Vibrant taro bubble tea with chewy pearls",
          price: "₩5,200",
          image: "https://images.unsplash.com/photo-1681325655248-fddbd7921715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvJTIwYnViYmxlJTIwdGVhJTIwcHVycGxlfGVufDF8fHx8MTc1NTMyMDA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Instagram Hit"],
          rating: 4.8
        },
        {
          name: "Matcha Cream Boba",
          description: "Premium Japanese matcha with fresh cream and boba pearls",
          price: "₩6,000",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Premium"],
          rating: 4.9
        }
      ]
    },
    {
      title: "Fruit Tea Collection",
      items: [
        {
          name: "Strawberry Milk Tea",
          description: "Fresh strawberry puree with creamy milk tea",
          price: "₩5,000",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Sweet"],
          rating: 4.7
        },
        {
          name: "Mango Yakult Tea",
          description: "Tropical mango with refreshing Yakult probiotic drink",
          price: "₩5,300",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Healthy", "Refreshing"],
          rating: 4.6
        },
        {
          name: "Lemon Honey Jasmine",
          description: "Zesty lemon with honey and fragrant jasmine tea",
          price: "₩4,800",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Caffeine Free"],
          rating: 4.5
        }
      ]
    },
    {
      title: "Korean Coffee Series",
      items: [
        {
          name: "Dalgona Coffee Bubble",
          description: "Viral Korean whipped coffee with boba pearls",
          price: "₩5,800",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Trending", "Strong"],
          rating: 4.8
        },
        {
          name: "Seoul Latte Boba",
          description: "Smooth espresso with steamed milk and chewy boba",
          price: "₩5,500",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Classic"],
          rating: 4.7
        }
      ]
    },
    {
      title: "Seasonal Specials",
      items: [
        {
          name: "Winter Warming Chai",
          description: "Spiced chai with warm winter flavors and boba",
          price: "₩5,400",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Limited Time", "Warming"],
          rating: 4.6
        }
      ]
    }
  ];

  const toppings = [
    { name: "Classic Tapioca Pearls", price: "₩500" },
    { name: "Popping Boba (Various Flavors)", price: "₩600" },
    { name: "Grass Jelly", price: "₩400" },
    { name: "Red Bean", price: "₩500" },
    { name: "Coconut Jelly", price: "₩500" },
    { name: "Pudding", price: "₩600" },
    { name: "Extra Shot Espresso", price: "₩800" },
    { name: "Whipped Cream", price: "₩300" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <div className="gradient-pink-mint py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="korean-handwritten text-4xl md:text-6xl text-white mb-4">
            Seoul Cha Menu ☕
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Authentic Korean bubble tea crafted with love and the finest ingredients. 
            Every sip is a journey to Seoul!
          </p>
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-1/4 w-20 h-20 bg-white/20 floating-shape"></div>
          <div className="absolute top-32 right-1/3 w-16 h-16 bg-purple-300/30 floating-shape" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="korean-handwritten text-3xl text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {category.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {item.badges.map((badge, badgeIndex) => (
                        <Badge 
                          key={badgeIndex} 
                          className={`text-xs ${
                            badge === 'Popular' ? 'bg-red-500 text-white' :
                            badge === 'New' ? 'bg-green-500 text-white' :
                            badge === 'Premium' ? 'bg-purple-500 text-white' :
                            badge === 'Instagram Hit' ? 'bg-pink-500 text-white' :
                            'bg-blue-500 text-white'
                          }`}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{item.rating}</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full korean-handwritten">
                      {item.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Coffee size={14} />
                        <span>Customizable</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Leaf size={14} />
                        <span>Fresh Made</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Toppings Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
          <h2 className="korean-handwritten text-3xl text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Premium Toppings
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toppings.map((topping, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 text-center hover:shadow-lg transition-shadow duration-300">
                <h4 className="mb-2">{topping.name}</h4>
                <p className="korean-handwritten text-pink-600">{topping.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customization Notice */}
        <div className="mt-16 text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8">
          <Heart className="mx-auto mb-4 text-pink-500" size={48} />
          <h3 className="korean-handwritten text-2xl mb-4 text-purple-800">
            Make It Yours!
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            All our drinks can be customized to your preference! Adjust sweetness level (0-100%), 
            ice level, and choose from our variety of premium toppings. 
            Our Korean-trained baristas will craft the perfect drink just for you.
          </p>
        </div>
      </div>
    </div>
  );
}