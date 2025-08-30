import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: 'var(--seoul-cream)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-6xl">📍</div>
        <div className="absolute top-20 right-20 text-4xl">☎️</div>
        <div className="absolute bottom-20 left-20 text-5xl">📧</div>
        <div className="absolute bottom-10 right-10 text-3xl">🕒</div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--seoul-sky)', color: 'white' }}>
            📍 Visit Us
          </div>
          
          <h2 className="text-3xl md:text-5xl">
            <span className="korean-handwritten text-4xl md:text-6xl" style={{ color: 'var(--seoul-mint)' }}>
              Come & Say
            </span>
            <span className="block">Annyeong! 👋</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience Seoul Cha in person! Visit our cozy cafe designed with Korean aesthetics, 
            perfect for photos and enjoying authentic bubble tea.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Store Info Card */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="gradient-pink-mint p-6 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  🏪 Seoul Cha Flagship Store
                </CardTitle>
              </div>
              
              <CardContent className="p-6 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: 'var(--seoul-pink)' }}
                  >
                    📍
                  </div>
                  <div>
                    <h4 className="mb-2">Store Address</h4>
                    <p className="text-gray-600">
                      FOOD CASTLE<br />
                      Vasna-Bhayli Main Road, Behind Nayara Petrol Pump<br />
                      Bhayli, Vadodara (Gujarat) 391410
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: 'var(--seoul-mint)' }}
                  >
                    ☎️
                  </div>
                  <div>
                    <h4 className="mb-2">Phone & Orders</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 90123 45678</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: 'var(--seoul-lavender)' }}
                  >
                    📧
                  </div>
                  <div>
                    <h4 className="mb-2">Email</h4>
                    <p className="text-gray-600">hello@seoulcha.com</p>
                    <p className="text-gray-600">catering@seoulcha.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  🕒 <span>Store Hours</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Monday - Thursday</span>
                    <span className="text-gray-600">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Friday - Saturday</span>
                    <span className="text-gray-600">10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-gray-600">11:00 AM - 8:00 PM</span>
                  </div>
                  
                  <div 
                    className="mt-4 p-3 rounded-xl text-center"
                    style={{ backgroundColor: 'var(--seoul-mint)', color: 'white' }}
                  >
                    <span className="text-sm">🟢 Open Now - Closes at 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'var(--seoul-pink)', color: 'white', border: 'none' }}
              >
                🗺️ Get Directions
              </Button>
              
              <Button 
                variant="outline"
                className="py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ borderColor: 'var(--seoul-lavender)', color: 'var(--seoul-lavender)' }}
              >
                📞 Call Now
              </Button>
            </div>
          </div>

          {/* Right Column - Map & Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="relative h-80 bg-gray-100 flex items-center justify-center">
                {/* Map placeholder - in real implementation, this would be an embedded Google Maps */}
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">Click to open in Google Maps</p>
                  <Button 
                    style={{ backgroundColor: 'var(--seoul-sky)', color: 'white' }}
                    className="rounded-full"
                  >
                    📍 Open in Google Maps
                  </Button>
                </div>
                
                {/* Floating location pin */}
                <div 
                  className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: 'var(--seoul-rose)' }}
                >
                  <span className="text-2xl text-white">📍</span>
                </div>
              </div>
            </Card>

            {/* Transportation Info */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  🚇 <span>How to Get Here</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ backgroundColor: 'var(--seoul-mint)' }}
                  >
                    🚇
                  </div>
                  <div>
                    <p>Metro Purple Line - Wilshire/Western Station</p>
                    <p className="text-sm text-gray-500">5-minute walk</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ backgroundColor: 'var(--seoul-peach)' }}
                  >
                    🅿️
                  </div>
                  <div>
                    <p>Free parking available</p>
                    <p className="text-sm text-gray-500">Behind the building</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ backgroundColor: 'var(--seoul-lavender)' }}
                  >
                    🚴
                  </div>
                  <div>
                    <p>Bike-friendly</p>
                    <p className="text-sm text-gray-500">Bike racks available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Events */}
            <Card className="border-0 shadow-xl">
              <div className="gradient-lavender-cream p-6 text-center text-white">
                <h3 className="text-xl mb-2">🎉 Special Events</h3>
                <p className="text-sm opacity-90">Join us for Korean cultural events!</p>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>K-Pop Karaoke Nights</span>
                    <span className="text-sm text-gray-600">Every Friday</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bubble Tea Making Class</span>
                    <span className="text-sm text-gray-600">2nd Saturday</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Korean Language Exchange</span>
                    <span className="text-sm text-gray-600">Wednesdays</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div 
            className="inline-block p-8 rounded-3xl shadow-xl text-white"
            style={{ backgroundColor: 'var(--seoul-rose)' }}
          >
            <h3 className="text-2xl mb-4 korean-handwritten">
              Can't wait to visit? 
            </h3>
            <p className="mb-6">Order online for pickup or delivery!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-100"
              >
                🛵 Order for Delivery
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 rounded-full border-white text-white hover:bg-white hover:text-black"
              >
                🏃‍♀️ Order for Pickup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
