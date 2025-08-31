import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Heart, Shield, Lock, Eye, Database, Users } from "lucide-react";

interface PrivacyPolicyPageProps {
  onPageChange?: (page: string) => void;
}

export function PrivacyPolicyPage({ onPageChange }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="gradient-rose-sage py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Lock className="mx-auto text-purple-600" size={64} />
            </div>
            <h1 className="korean-handwritten text-4xl md:text-6xl text-purple-800 mb-6">
              Privacy Policy 🔒
            </h1>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Your privacy is precious to us, just like our authentic Korean bubble tea recipes. 
              Learn how we protect and respect your personal information with Korean care and transparency.
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

        {/* Privacy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-pink-500" size={24} />
                <h2 className="korean-handwritten text-2xl text-purple-800">
                  Your Privacy Matters to Us 💜
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Seoul Cha, we respect your privacy as much as we respect our Korean tea traditions. 
                This Privacy Policy explains how we collect, use, and protect your personal information 
                when you visit our store, use our services, or interact with us online.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <Database size={20} />
                  1. Information We Collect
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-purple-700 mb-2">Personal Information:</h4>
                    <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                      <li>Name, email address, and phone number (when you contact us or sign up for updates)</li>
                      <li>Franchise inquiry information (business experience, financial information, location preferences)</li>
                      <li>Feedback and review information you provide</li>
                      <li>Communication preferences and dietary restrictions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 mb-2">Transaction Information:</h4>
                    <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                      <li>Order details and purchase history</li>
                      <li>Payment method information (processed securely through our payment partners)</li>
                      <li>Loyalty program participation and rewards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 mb-2">Technical Information:</h4>
                    <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                      <li>IP address, browser type, and device information</li>
                      <li>Website usage data and preferences</li>
                      <li>Location data (with your permission) for store finder features</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <Eye size={20} />
                  2. How We Use Your Information
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Service Delivery:</strong> To prepare and deliver your bubble tea orders, 
                    process payments, and provide customer support with Korean hospitality.
                  </p>
                  <p>
                    <strong>Communication:</strong> To respond to your inquiries, send order confirmations, 
                    and share updates about new Korean flavors and store events (only with your consent).
                  </p>
                  <p>
                    <strong>Franchise Services:</strong> To evaluate franchise applications, provide business 
                    support, and facilitate franchise partnership opportunities.
                  </p>
                  <p>
                    <strong>Improvement:</strong> To enhance our recipes, services, and customer experience 
                    based on your feedback and preferences.
                  </p>
                  <p>
                    <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, 
                    and food safety requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <Users size={20} />
                  3. Information Sharing
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>We DO NOT sell your personal information.</strong> Your privacy is not for sale, 
                    just like our authentic Korean recipes!
                  </p>
                  <p>
                    <strong>Service Providers:</strong> We may share information with trusted partners who help 
                    us operate our business (payment processors, delivery services, marketing platforms) 
                    under strict confidentiality agreements.
                  </p>
                  <p>
                    <strong>Franchise Network:</strong> If you're interested in franchising, we may share 
                    relevant information with our franchise development team and existing franchisees 
                    for evaluation purposes.
                  </p>
                  <p>
                    <strong>Legal Requirements:</strong> We may disclose information when required by law, 
                    court order, or to protect our rights and safety.
                  </p>
                  <p>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, 
                    your information may be transferred as part of the business assets.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">4. Data Security</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Protection Measures:</strong> We implement industry-standard security measures 
                    to protect your personal information, including encryption, secure servers, and regular 
                    security audits.
                  </p>
                  <p>
                    <strong>Payment Security:</strong> All payment transactions are processed through 
                    PCI-DSS compliant payment processors. We do not store your full credit card information.
                  </p>
                  <p>
                    <strong>Access Controls:</strong> Only authorized Seoul Cha team members have access 
                    to personal information, and only when necessary for business operations.
                  </p>
                  <p>
                    <strong>Data Retention:</strong> We keep your information only as long as necessary 
                    to provide services or as required by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">5. Your Privacy Rights</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Access:</strong> You can request to see what personal information we have about you.
                  </p>
                  <p>
                    <strong>Correction:</strong> You can ask us to correct any inaccurate information.
                  </p>
                  <p>
                    <strong>Deletion:</strong> You can request deletion of your personal information 
                    (subject to legal and business requirements).
                  </p>
                  <p>
                    <strong>Opt-out:</strong> You can unsubscribe from marketing communications at any time.
                  </p>
                  <p>
                    <strong>Data Portability:</strong> You can request a copy of your data in a standard format.
                  </p>
                  <p className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg">
                    <strong>How to Exercise Rights:</strong> Contact us at support@seoulcha.com or visit 
                    our store to discuss your privacy preferences with Korean care and respect.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">6. Cookies and Tracking</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Essential Cookies:</strong> We use necessary cookies to make our website function 
                    properly and securely.
                  </p>
                  <p>
                    <strong>Analytics:</strong> We may use analytics tools to understand how our website 
                    is used and improve your experience.
                  </p>
                  <p>
                    <strong>Social Media:</strong> Our website may include social media features that 
                    collect information about your interaction with these features.
                  </p>
                  <p>
                    <strong>Your Control:</strong> You can control cookie preferences through your browser 
                    settings, though some website features may not work properly without certain cookies.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">7. Children's Privacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Seoul Cha welcomes families and children, but our online services are not directed to children 
                  under 13. We do not knowingly collect personal information from children under 13. 
                  If we discover that we have collected such information, we will delete it promptly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">8. International Data Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  While Seoul Cha operates in India, some of our service providers may be located in other 
                  countries. When we transfer your information internationally, we ensure appropriate 
                  safeguards are in place to protect your privacy rights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">9. Changes to This Policy</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices 
                    or legal requirements. We'll notify you of significant changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to our subscribers</li>
                    <li>Posting notices in our store</li>
                  </ul>
                  <p>
                    Your continued use of our services after changes take effect constitutes acceptance 
                    of the updated policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">10. Contact Us</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy or how we handle your personal information, 
                    please contact us with Korean warmth and care:
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                    <p><strong>Seoul Cha Privacy Team</strong></p>
                    <p>FOOD CASTLE, Vasna-Bhayli Main Road</p>
                    <p>Behind Nayara Petrol Pump, Bhayli</p>
                    <p>Vadodara (Gujarat) 391410</p>
                    <p>Email: support@seoulcha.com</p>
                    <p>Phone: (+91) 6357 013 736</p>
                    <p>Subject Line: "Privacy Policy Inquiry"</p>
                  </div>
                  <p>
                    We're committed to addressing your privacy concerns promptly and transparently, 
                    in the spirit of Korean hospitality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Korean Touch */}
          <Card className="border-0 bg-gradient-to-r from-pink-100 to-purple-100 text-center">
            <CardContent className="p-8">
              <Shield className="mx-auto mb-4 text-pink-500" size={48} />
              <h3 className="korean-handwritten text-2xl text-purple-800 mb-4">
                Privacy with Korean Care
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Just as we carefully select each ingredient for our bubble tea, we carefully protect your personal 
                information. Your trust is the secret ingredient that makes our Seoul Cha community special. 
                We promise to handle your privacy with the same respect and attention we give to our 
                authentic Korean recipes.
              </p>
              <p className="korean-handwritten text-xl text-pink-600 mt-6">
                개인정보 보호! Your privacy is safe with us! 🛡️
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
