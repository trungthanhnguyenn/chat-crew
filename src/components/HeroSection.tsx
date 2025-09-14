import { Button } from '@/components/ui/button';
import { SmartAnimatedChatDemo } from '@/components/chat/SmartAnimatedChatDemo';
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  MessageSquare,
  Bot,
  Zap
} from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <Bot className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <Zap className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Sparkles className="mr-2 h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">
              Next Generation AI Conversations
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
            Chat with Multiple
            <span className="block text-gradient bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              AI Companions
            </span>
            <span className="block">Simultaneously</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Experience revolutionary group conversations where you chat with 2-3 different AI personalities at once. 
            Get diverse perspectives, creative solutions, and engaging discussions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => {
                const ctaSection = document.querySelector('[data-cta-section]');
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Users className="mr-2 h-5 w-5" />
              Start Group Chat
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              onClick={() => {
                // Scroll to demo section or features
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Demo Chat Preview - Smart Animated Chat Demo */}
          <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <SmartAnimatedChatDemo className="max-h-96" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};