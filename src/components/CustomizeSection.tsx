import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { useState } from "react";

export function CustomizeSection() {
  const [sugarLevel, setSugarLevel] = useState([50]);
  const [selectedBase, setSelectedBase] = useState("milk");
  const [selectedToppings, setSelectedToppings] = useState(["pearls"]);

  const bases = [
    { id: "milk", name: "Milk Tea", icon: "🥛", color: "var(--seoul-cream)" },
    { id: "fruit", name: "Fruit Tea", icon: "🍓", color: "var(--seoul-pink)" },
    { id: "yakult", name: "Yakult Tea", icon: "🥤", color: "var(--seoul-turquoise)" }
  ];

  const toppings = [
    { id: "pearls", name: "Tapioca Pearls", icon: "⚫", color: "var(--seoul-purple)" },
    { id: "popping", name: "Popping Boba", icon: "🟣", color: "var(--seoul-coral)" },
    { id: "jelly", name: "Fruit Jelly", icon: "🟢", color: "var(--seoul-turquoise)" },
    { id: "pudding", name: "Egg Pudding", icon: "🟡", color: "var(--seoul-yellow)" }
  ];

  const toggleTopping = (toppingId: string) => {
    setSelectedToppings(prev => 
      prev.includes(toppingId) 
        ? prev.filter(id => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  return (
    <section className="py-20 relative" style={{ backgroundColor: 'var(--seoul-cream)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 text-6xl">🎨</div>
        <div className="absolute top-10 right-10 text-4xl">✨</div>
        <div className="absolute bottom-20 left-10 text-5xl">🧋</div>
        <div className="absolute bottom-10 right-20 text-3xl">����</div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--seoul-coral)', color: 'white' }}>
            🎨 Create Your Perfect Cup
          </div>
          
          <h2 className="text-3xl md:text-5xl">
            <span className="korean-handwritten text-4xl md:text-6xl" style={{ color: 'var(--seoul-purple)' }}>
              Customize
            </span>
            <span className="block">Your Own Seoul Cha</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your perfect bubble tea in three simple steps. Each combination creates a unique flavor profile!
          </p>
        </div>

        {/* Customization Steps */}
        <div className="space-y-12">
          {/* Step 1: Choose Base */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--seoul-pink)', color: 'white' }}>
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-pink-500">1</span>
              <span>Choose Your Base</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {bases.map((base) => (
                <Card 
                  key={base.id}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 ${
                    selectedBase === base.id ? 'shadow-xl' : 'shadow-lg hover:shadow-xl'
                  }`}
                  style={{ 
                    borderColor: selectedBase === base.id ? base.color : 'transparent',
                    backgroundColor: selectedBase === base.id ? base.color + '20' : 'white'
                  }}
                  onClick={() => setSelectedBase(base.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{base.icon}</div>
                    <h3 className="mb-2">{base.name}</h3>
                    {selectedBase === base.id && (
                      <div className="w-6 h-6 rounded-full mx-auto" style={{ backgroundColor: base.color }}>
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Step 2: Sugar Level */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--seoul-turquoise)', color: 'white' }}>
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-500">2</span>
              <span>Adjust Sugar Level</span>
            </div>
            
            <div className="max-w-lg mx-auto">
              <Card className="p-8 shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {sugarLevel[0] === 0 ? '🚫' : 
                         sugarLevel[0] <= 25 ? '🤏' : 
                         sugarLevel[0] <= 50 ? '😌' : 
                         sugarLevel[0] <= 75 ? '😋' : '🍯'}
                      </div>
                      <h3 className="text-2xl mb-2">{sugarLevel[0]}% Sugar</h3>
                      <p className="text-sm text-gray-600">
                        {sugarLevel[0] === 0 ? 'No Sugar' : 
                         sugarLevel[0] <= 25 ? 'Light & Subtle' : 
                         sugarLevel[0] <= 50 ? 'Balanced' : 
                         sugarLevel[0] <= 75 ? 'Sweet' : 'Extra Sweet'}
                      </p>
                    </div>
                    
                    <Slider
                      value={sugarLevel}
                      onValueChange={setSugarLevel}
                      max={100}
                      step={25}
                      className="w-full"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0%</span>
                      <span>25%</span>
                      <span>50%</span>
                      <span>75%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Step 3: Select Toppings */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--seoul-purple)', color: 'white' }}>
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-500">3</span>
              <span>Select Toppings</span>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {toppings.map((topping) => (
                <Card 
                  key={topping.id}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 ${
                    selectedToppings.includes(topping.id) ? 'shadow-xl' : 'shadow-lg hover:shadow-xl'
                  }`}
                  style={{ 
                    borderColor: selectedToppings.includes(topping.id) ? topping.color : 'transparent',
                    backgroundColor: selectedToppings.includes(topping.id) ? topping.color + '20' : 'white'
                  }}
                  onClick={() => toggleTopping(topping.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{topping.icon}</div>
                    <p className="text-sm">{topping.name}</p>
                    {selectedToppings.includes(topping.id) && (
                      <div className="w-5 h-5 rounded-full mx-auto mt-2" style={{ backgroundColor: topping.color }}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              Selected: {selectedToppings.length} topping{selectedToppings.length !== 1 ? 's' : ''} 
              (+$0.50 each after first topping)
            </p>
          </div>
        </div>

        {/* Final Order Summary */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="gradient-pink-mint p-6 text-white text-center">
              <h3 className="text-2xl mb-2">Your Custom Seoul Cha</h3>
              <p className="opacity-90">Ready to order your perfect cup!</p>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span>Base:</span>
                  <span className="flex items-center gap-2">
                    {bases.find(b => b.id === selectedBase)?.icon}
                    {bases.find(b => b.id === selectedBase)?.name}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Sugar Level:</span>
                  <span>{sugarLevel[0]}%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Toppings:</span>
                  <span className="flex items-center gap-1">
                    {selectedToppings.map(id => 
                      toppings.find(t => t.id === id)?.icon
                    ).join(' ')}
                  </span>
                </div>
                
                <hr />
                
                <div className="flex justify-between items-center text-lg">
                  <span>Total:</span>
                  <span>${(6.50 + Math.max(0, selectedToppings.length - 1) * 0.50).toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'var(--seoul-purple)',
                  color: 'white',
                  border: 'none'
                }}
              >
                🛒 Add Custom Drink to Cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
