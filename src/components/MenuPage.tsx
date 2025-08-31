import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Leaf, Coffee, Heart } from "lucide-react";

export function MenuPage() {
  const menuCategories = [
    {
      title: "Bubble Tea Series [Classic Milk]",
      items: [
        {
          name: "Taro Bubble Tea",
          description: "Is a creamy, dreamy blend of sweet, nutty taro root and chewy black pearls",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1681325655248-fddbd7921715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvJTIwYnViYmxlJTIwdGVhJTIwcHVycGxlfGVufDF8fHx8MTc1NTMyMDA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Popular"],
          rating: 4.8
        },
        {
          name: "Matcha Bubble Tea",
          description: "Is a smooth and earthy blend of premium green tea matcha and creamy milk",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Premium"],
          rating: 4.9
        },
        {
          name: "Thai Bubble Tea",
          description: "Is a bold and creamy blend of strong black tea, sweet spices and milk",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Spicy"],
          rating: 4.7
        },
        {
          name: "Brown Sugar Bubble Tea",
          description: "Is a rich and velvety beverage featuring caramelized brown sugar syrup swirled into creamy milk",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Signature", "Sweet"],
          rating: 4.9
        },
        {
          name: "Hongkong Bubble Tea",
          description: "Is a bold and silky blend of strong black tea and evaporated milk",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Classic"],
          rating: 4.6
        },
        {
          name: "Mango Bubble Tea",
          description: "Tropical delight, blending the juicy sweetness of ripe mangoes with creamy milk",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Tropical"],
          rating: 4.8
        },
        {
          name: "Blueberry Bubble Tea",
          description: "A vibrant mix of sweet, tangy blueberry flavor and creamy milk, paired with chewy pearls",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Antioxidant"],
          rating: 4.7
        },
        {
          name: "Strawberry Bubble Tea",
          description: "Is a sweet and creamy blend of ripe strawberry flavor and smooth milk",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Sweet"],
          rating: 4.8
        },
        {
          name: "Dragon Fruit Raspberry Bubble Tea",
          description: "Is a vibrant and refreshing blend of exotic dragon fruit and tangy raspberries",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Exotic", "Refreshing"],
          rating: 4.6
        }
      ]
    },
    {
      title: "Coffee Lovers Series",
      items: [
        {
          name: "Vanilla Bean Coffee",
          description: "The vanilla bean Coffee bubble tea blends the smooth, mellow flavor of vanilla with rich coffee",
          price: "₹210",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Smooth"],
          rating: 4.7
        },
        {
          name: "Caramel Coffee",
          description: "The caramel coffee bubble tea blends the bold, roasted flavor of coffee with sweet caramel",
          price: "₹210",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Sweet", "Bold"],
          rating: 4.8
        },
        {
          name: "Vietnamese Coffee",
          description: "[Veg preparation] The vietnamese coffee bubble tea delivers a bold and intense coffee experience",
          price: "₹210",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Veg", "Intense"],
          rating: 4.9
        },
        {
          name: "Classic Cold Coffee",
          description: "[Veg preparation] The classic cold coffee bubble tea blends the bold, smooth taste of coffee",
          price: "₹210",
          image: "https://images.unsplash.com/photo-1638978127697-e4d55e88a6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhfGVufDF8fHx8MTc1NTMyMDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Veg", "Classic"],
          rating: 4.6
        }
      ]
    },
    {
      title: "Fruits Tea Series",
      items: [
        {
          name: "Mango Fruit Tea",
          description: "[Veg preparation] Is a tropical delight, blending the sweet, juicy flavor of ripe mangoes",
          price: "₹160",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Veg", "Tropical"],
          rating: 4.8
        },
        {
          name: "Lemon Fruit Tea",
          description: "[Veg preparation] Is a zesty, refreshing mix of tangy lemon soda and citrusy flavors",
          price: "₹160",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Veg", "Zesty"],
          rating: 4.6
        },
        {
          name: "Strawberry Fruit Tea",
          description: "[Veg preparation] Is a bubbly, berry filled delight, combining sweet and tangy strawberry flavors",
          price: "₹160",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Veg", "Berry"],
          rating: 4.7
        }
      ]
    },
    {
      title: "Korean Corn Dog",
      items: [
        {
          name: "Mozzarella Corn Dog",
          description: "Is crispy on the outside with a golden, crunchy batter and filled with melted mozzarella cheese",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Crispy", "Cheesy"],
          rating: 4.8
        },
        {
          name: "Paneer Corn Dog",
          description: "[Veg preparation] Crunchy, golden crust with a soft, spiced paneer filling, offers authentic Korean flavors",
          price: "₹320",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Veg", "Premium"],
          rating: 4.7
        }
      ]
    },
    {
      title: "Korean Ramyeon",
      items: [
        {
          name: "Chilli Garlic Ramyeon",
          description: "Is a bold and flavorful noodle dish with a spicy kick of red chili and aromatic garlic",
          price: "₹420",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Spicy", "Bold"],
          rating: 4.8
        },
        {
          name: "Spicy Udon Ramyeon",
          description: "Features thick, chewy udon noodles in a bold, fiery broth infused with rich Korean spices",
          price: "₹420",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Udon", "Fiery"],
          rating: 4.9
        },
        {
          name: "Stir Fried Ramyeon",
          description: "Is a flavorful fusion dish with thick, chewy noodles tossed in a savoury stir-fry sauce",
          price: "₹420",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Fusion", "Savoury"],
          rating: 4.7
        },
        {
          name: "Creamy Peanut Miso Ramyeon",
          description: "Is a rich, umami packed noodle dish with a smooth blend of nutty peanut and savory miso",
          price: "₹560",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Premium", "Umami"],
          rating: 4.9
        }
      ]
    },
    {
      title: "Soups Dumplings",
      items: [
        {
          name: "Creamy Peanut Miso Ramen Dumplings",
          description: "Savoury dumplings tossed in a rich, velvety peanut miso sauce nutty, umami packed flavors",
          price: "₹560",
          image: "https://images.unsplash.com/photo-1671659420749-d56efede6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHgtOGY4ZXI3ajR8ZW58MXx8fHwxNzU1MzIwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          badges: ["Premium", "Dumplings"],
          rating: 4.8
        }
      ]
    }
  ];

  const toppings = [
    { name: "Classic Tapioca Pearls", price: "₹20" },
    { name: "Popping Boba (Various Flavors)", price: "₹25" },
    { name: "Grass Jelly", price: "₹15" },
    { name: "Red Bean", price: "₹20" },
    { name: "Coconut Jelly", price: "₹20" },
    { name: "Pudding", price: "₹25" },
    { name: "Extra Shot Espresso", price: "₹30" },
    { name: "Whipped Cream", price: "₹15" }
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
                            badge === 'Premium' ? 'bg-purple-500 text-white' :
                            badge === 'Signature' ? 'bg-pink-500 text-white' :
                            badge === 'Veg' ? 'bg-green-500 text-white' :
                            badge === 'Spicy' ? 'bg-orange-500 text-white' :
                            badge === 'Sweet' ? 'bg-yellow-500 text-black' :
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


        {/* FSSAI License */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6">
          <h3 className="text-lg mb-2 text-gray-800">FSSAI Licensed</h3>
          <p className="text-gray-600">Lic. No. 20725032000540</p>
        </div>

        {/* Customization Notice */}
        <div className="mt-8 text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8">
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
