import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, MapPin, Brain, Phone, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">KrishiSaathi</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button variant="default" className="bg-gradient-primary shadow-elegant">
          Get Started
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Smart Farming
              <span className="text-primary block">Starts Here</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg">
              Get AI-powered crop recommendations, disease detection, and farming advice in your local language. Transform your agricultural decisions with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary shadow-elegant hover:scale-105 transition-transform">
                <Brain className="w-5 h-5 mr-2" />
                Try AI Assistant
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" />
                Voice Support
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Smart farming technology with drones and digital agriculture"
              className="rounded-lg shadow-elegant animate-float"
            />
            <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-4 shadow-card">
              <div className="text-sm text-muted-foreground">AI Accuracy</div>
              <div className="text-2xl font-bold text-success">95.3%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Smart Farming
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From crop recommendations to disease detection, our AI-powered platform provides comprehensive agricultural support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-card hover:shadow-elegant transition-shadow group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>AI Crop Recommendations</CardTitle>
              <CardDescription>
                Get personalized crop suggestions based on soil, climate, and market conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Soil analysis integration</li>
                <li>• Weather pattern consideration</li>
                <li>• Market price predictions</li>
                <li>• Yield optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-shadow group">
            <CardHeader>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-warning" />
              </div>
              <CardTitle>Disease Detection</CardTitle>
              <CardDescription>
                Upload plant photos for instant disease identification and treatment advice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Image-based diagnosis</li>
                <li>• Treatment recommendations</li>
                <li>• Prevention strategies</li>
                <li>• Expert consultation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-shadow group">
            <CardHeader>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-success" />
              </div>
              <CardTitle>Location Intelligence</CardTitle>
              <CardDescription>
                Hyper-local weather, soil data, and market insights for your specific location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• GPS-based recommendations</li>
                <li>• Local weather forecasts</li>
                <li>• Soil quality mapping</li>
                <li>• Market price tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-shadow group">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle>Multilingual Support</CardTitle>
              <CardDescription>
                Voice and text support in Hindi, English, and regional languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Voice commands</li>
                <li>• Text to speech</li>
                <li>• Regional dialects</li>
                <li>• Offline translation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-shadow group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Community Network</CardTitle>
              <CardDescription>
                Connect with local farmers, experts, and agricultural professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Local farmer groups</li>
                <li>• Expert consultations</li>
                <li>• Knowledge sharing</li>
                <li>• Success stories</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-shadow group">
            <CardHeader>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <CardTitle>Offline Access</CardTitle>
              <CardDescription>
                Access critical farming advice even without internet connectivity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cached recommendations</li>
                <li>• Offline disease detection</li>
                <li>• Local data storage</li>
                <li>• SMS backup support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-card rounded-2xl p-8 lg:p-16 shadow-elegant text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Farming?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already using KrishiSaathi to make smarter agricultural decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary shadow-elegant hover:scale-105 transition-transform">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-primary">KrishiSaathi</span>
              </div>
              <p className="text-muted-foreground">
                Empowering farmers with AI-driven agricultural intelligence for sustainable and profitable farming.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Crop Recommendations</li>
                <li>Disease Detection</li>
                <li>Weather Forecasts</li>
                <li>Market Insights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Community</li>
                <li>Expert Consultation</li>
                <li>Training Resources</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 KrishiSaathi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;