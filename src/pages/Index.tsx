import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Eye, 
  Brain, 
  Zap, 
  Shield, 
  Smartphone, 
  Camera, 
  Mic, 
  Navigation, 
  Heart, 
  Briefcase, 
  GraduationCap,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroImages = [
    "/images/smart_glasses_hero_1.jpeg",
    "/images/smart_glasses_hero_3.webp",
    "/images/smart_glasses_hero_5.jpeg",
    "/images/smart_glasses_hero_6.jpeg"
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length]);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms provide real-time contextual information and smart assistance."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Augmented Reality Display",
      description: "High-resolution micro-displays overlay digital information seamlessly onto your real-world view."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Computer Vision",
      description: "Advanced cameras and sensors recognize objects, faces, and text for enhanced interaction."
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Voice Control",
      description: "Natural language processing enables hands-free control through voice commands."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Processing",
      description: "Ultra-low latency processing ensures instant response to your commands and environment."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy Protection",
      description: "Advanced encryption and on-device processing keep your data secure and private."
    }
  ];

  const useCases = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare",
      description: "Assist medical professionals with patient data, surgical guidance, and remote consultations.",
      image: "/images/use_cases_1.jpeg"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Enterprise",
      description: "Enhance productivity with hands-free access to information, remote assistance, and training.",
      image: "/images/use_cases_2.jpeg"
    },
    {
      icon: <Navigation className="h-6 w-6" />,
      title: "Navigation",
      description: "Get turn-by-turn directions, location information, and points of interest overlaid on your view.",
      image: "/images/use_cases_4.png"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Interactive learning experiences with 3D models, translations, and contextual information.",
      image: "/images/use_cases_3.png"
    }
  ];

  const comparisonData = [
    {
      feature: "Display Technology",
      traditional: "No display",
      smart: "High-res micro-OLED with AR overlay"
    },
    {
      feature: "Intelligence",
      traditional: "Passive vision correction",
      smart: "AI-powered contextual assistance"
    },
    {
      feature: "Connectivity",
      traditional: "None",
      smart: "5G, WiFi, Bluetooth integration"
    },
    {
      feature: "Interaction",
      traditional: "Manual adjustment only",
      smart: "Voice, gesture, and eye tracking"
    },
    {
      feature: "Information Access",
      traditional: "Requires separate device",
      smart: "Instant hands-free access"
    },
    {
      feature: "Adaptability",
      traditional: "Fixed prescription",
      smart: "Dynamic focus and content adjustment"
    }
  ];

  const faqData = [
    {
      question: "How long does the battery last?",
      answer: "Current AI smart glasses typically offer 8-12 hours of continuous use, with some models featuring quick-charge capabilities that provide 2 hours of use from a 15-minute charge."
    },
    {
      question: "Are AI smart glasses safe for daily use?",
      answer: "Yes, AI smart glasses are designed with safety in mind. They use low-power displays, comply with radiation safety standards, and include features like blue light filtering and automatic brightness adjustment."
    },
    {
      question: "Can I use them with prescription lenses?",
      answer: "Most AI smart glasses can be fitted with prescription lenses or used with contact lenses. Some models offer adjustable diopter settings for vision correction."
    },
    {
      question: "What about privacy concerns?",
      answer: "Modern AI smart glasses prioritize privacy with on-device processing, encrypted data transmission, and user-controlled recording indicators. Many models process data locally without sending information to external servers."
    },
    {
      question: "How do they connect to my smartphone?",
      answer: "AI smart glasses typically connect via Bluetooth 5.0+ for seamless integration with smartphones, allowing for notifications, calls, and app synchronization while maintaining low power consumption."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        
        {/* Background Image Carousel */}
        <div className="absolute inset-0 opacity-20">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`AI Smart Glasses ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 text-sm px-4 py-2 gradient-primary text-primary-foreground">
              Next-Generation Wearable Technology
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              AI Smart Glasses
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Experience the future of augmented reality with AI-powered smart glasses that seamlessly blend digital intelligence with your physical world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-primary transition-smooth hover:scale-105">
                Explore Technology
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="neon-border transition-smooth hover:glow-primary"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                {isPlaying ? 'Pause Demo' : 'Play Demo'}
              </Button>
            </div>

            {/* Image Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary glow-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technology Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI smart glasses represent a revolutionary leap in wearable technology, combining advanced artificial intelligence, 
              augmented reality, and cutting-edge hardware in a sleek, everyday form factor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect transition-smooth hover:glow-primary hover:scale-105">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features and Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Features & Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advanced features that make AI smart glasses the ultimate wearable computing device.
            </p>
          </div>

          <Tabs defaultValue="display" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="display">Display Technology</TabsTrigger>
              <TabsTrigger value="ai">AI Capabilities</TabsTrigger>
              <TabsTrigger value="sensors">Sensors & Input</TabsTrigger>
            </TabsList>
            
            <TabsContent value="display" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Display System</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Micro-OLED displays with 4K resolution per eye
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      120Hz refresh rate for smooth motion
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Adjustable transparency and brightness
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Wide field of view up to 50 degrees
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src="/images/ar_features_1.jpeg" 
                    alt="AR Display Features"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img 
                    src="/images/ar_features_2.jpeg" 
                    alt="AI Capabilities"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Intelligent AI Assistant</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Real-time object and text recognition
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Natural language processing and translation
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Contextual information overlay
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Predictive assistance and recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sensors" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Sensor Array</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Eye tracking for precise interaction
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Hand gesture recognition
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Spatial mapping and SLAM technology
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-primary mr-2" />
                      Environmental sensors (light, proximity)
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src="/images/ar_features_3.jpeg" 
                    alt="Sensor Technology"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases and Applications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Use Cases & Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI smart glasses are transforming industries and enhancing daily life across multiple domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass-effect transition-smooth hover:glow-accent hover:scale-105 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center text-primary">
                    {useCase.icon}
                    <h3 className="text-xl font-bold ml-2">{useCase.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Smart vs Traditional Glasses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how AI smart glasses revolutionize the traditional eyewear experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Feature Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b border-border/50 last:border-b-0">
                      <div className="font-semibold">{item.feature}</div>
                      <div className="text-muted-foreground">{item.traditional}</div>
                      <div className="text-primary font-medium">{item.smart}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about AI smart glasses technology.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-effect rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for the Future?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the revolution in wearable technology and experience the world through AI-enhanced vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-primary transition-smooth hover:scale-105">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="neon-border transition-smooth hover:glow-accent">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-glow">AI Smart Glasses</h3>
            <p className="text-muted-foreground mb-6">
              Pioneering the future of augmented reality and artificial intelligence.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;