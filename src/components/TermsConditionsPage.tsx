import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Heart, Shield, FileText } from "lucide-react";

interface TermsConditionsPageProps {
  onPageChange?: (page: string) => void;
}

export function TermsConditionsPage({ onPageChange }: TermsConditionsPageProps) {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="gradient-peach-sky py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Shield className="mx-auto text-purple-600" size={64} />
            </div>
            <h1 className="korean-handwritten text-4xl md:text-6xl text-purple-800 mb-6">
              Terms & Conditions 📋
            </h1>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Welcome to Seoul Cha! These terms govern your experience with our authentic Korean bubble tea 
              and our commitment to serving you with Korean hospitality and care.
            </p>
            
            {onPageChange && (
              <Button 
                variant="outline"
                onClick={() => onPageChange('home')}
                className="border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            )}
          </div>
          
          {/* Floating shapes */}
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-pink-300/30 floating-shape"></div>
          <div className="absolute top-32 right-1/4 w-20 h-20 bg-purple-300/30 floating-shape" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Last Updated */}
        <div className="text-center mb-12">
          <p className="text-gray-600">Last updated: January 21, 2025</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-pink-500" size={24} />
                <h2 className="korean-handwritten text-2xl text-purple-800">
                  Welcome to Our Seoul Cha Family! 💜
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Seoul Cha services, you accept and agree to be bound by these Terms and Conditions. 
                We're committed to providing you with the authentic Korean bubble tea experience while ensuring transparency 
                in our relationship with you.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <FileText size={20} />
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using Seoul Cha's services, visiting our store, ordering our products, or accessing our website, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">2. Products and Services</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Quality Commitment:</strong> Seoul Cha is committed to serving authentic Korean-style bubble tea 
                    made with premium ingredients sourced from Korea and prepared by our trained baristas.
                  </p>
                  <p>
                    <strong>Customization:</strong> We offer drink customization including sweetness levels (0-100%), 
                    ice levels, and toppings. Custom orders are prepared to your specifications and cannot be returned 
                    unless there's a preparation error.
                  </p>
                  <p>
                    <strong>Allergen Information:</strong> Our products may contain allergens including dairy, nuts, and gluten. 
                    Please inform our staff of any allergies or dietary restrictions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">3. Orders and Payment</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Order Accuracy:</strong> Please verify your order before payment. We strive for accuracy 
                    but cannot guarantee modifications after preparation begins.
                  </p>
                  <p>
                    <strong>Payment:</strong> We accept cash, cards, and digital payments. All transactions are final 
                    unless there's a service error on our part.
                  </p>
                  <p>
                    <strong>Pricing:</strong> Prices are subject to change without notice. Current pricing is displayed 
                    at our store and on our digital menu.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">4. Store Policies</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Operating Hours:</strong> Our store operates during posted hours. We reserve the right 
                    to modify hours for holidays or special circumstances.
                  </p>
                  <p>
                    <strong>Conduct:</strong> We maintain a family-friendly environment. Disruptive behavior may 
                    result in being asked to leave the premises.
                  </p>
                  <p>
                    <strong>Cleanliness:</strong> Please help us maintain a clean environment by disposing of trash 
                    properly and treating our space with care.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">5. Refunds and Exchanges</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Quality Issues:</strong> If you're unsatisfied with your drink due to preparation errors 
                    or quality issues, please notify us immediately. We'll gladly remake your drink or provide a refund.
                  </p>
                  <p>
                    <strong>Change of Mind:</strong> Custom-made drinks cannot be returned due to change of preference 
                    unless there was miscommunication about your order.
                  </p>
                  <p>
                    <strong>Franchise Inquiries:</strong> Franchise deposits and fees are subject to separate franchise 
                    agreement terms and conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">6. Intellectual Property</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Brand Protection:</strong> The Seoul Cha name, logo, recipes, and branding are protected 
                    intellectual property. Unauthorized use is prohibited.
                  </p>
                  <p>
                    <strong>Photography:</strong> You're welcome to take photos of your drinks and share them on social 
                    media. We appreciate tags and mentions!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">7. Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed">
                  Seoul Cha's liability is limited to the cost of the products purchased. We are not liable for 
                  indirect, incidental, or consequential damages. Our maximum liability shall not exceed the amount 
                  paid for the specific transaction in question.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">8. Franchise Terms</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Separate Agreement:</strong> Franchise opportunities are governed by a separate Franchise 
                    Disclosure Document and Franchise Agreement.
                  </p>
                  <p>
                    <strong>Inquiry Process:</strong> Franchise inquiries submitted through our website are for 
                    information purposes and do not constitute a commitment from either party.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">9. Changes to Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Seoul Cha reserves the right to modify these Terms and Conditions at any time. Changes will be 
                  effective immediately upon posting. Continued use of our services constitutes acceptance of 
                  modified terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">10. Contact Information</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    For questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                    <p><strong>Seoul Cha</strong></p>
                    <p>FOOD CASTLE, Vasna-Bhayli Main Road</p>
                    <p>Behind Nayara Petrol Pump, Bhayli</p>
                    <p>Vadodara (Gujarat) 391410</p>
                    <p>Email: support@seoulcha.com</p>
                    <p>Phone: (+91) 6357 013 736</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Korean Touch */}
          <Card className="border-0 bg-gradient-to-r from-pink-100 to-purple-100 text-center">
            <CardContent className="p-8">
              <Heart className="mx-auto mb-4 text-pink-500" size={48} />
              <h3 className="korean-handwritten text-2xl text-purple-800 mb-4">
                Korean Hospitality Promise
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Seoul Cha, we believe in "정성" (jeongseong) - putting heart and sincerity into everything we do. 
                These terms are designed to protect both you and us while ensuring we can continue serving you 
                with the warmth and care that defines Korean hospitality.
              </p>
              <p className="korean-handwritten text-xl text-pink-600 mt-6">
                감사합니다! Thank you for choosing Seoul Cha! 🌸
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
