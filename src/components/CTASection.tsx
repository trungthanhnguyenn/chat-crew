
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  MessageSquare,
  Bot,
  CheckCircle
} from 'lucide-react';

const benefits = [
  "Free 14-day trial",
  "No setup fees",
  "24/7 support",
  "Cancel anytime"
];

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden" data-cta-section>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217_91%_60%_/_0.1),transparent_70%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-60">
        <Bot className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute bottom-20 right-16 animate-float opacity-60" style={{ animationDelay: '2s' }}>
        <MessageSquare className="h-8 w-8 text-secondary" />
      </div>
      <div className="absolute top-32 right-20 animate-float opacity-60" style={{ animationDelay: '4s' }}>
        <Sparkles className="h-8 w-8 text-accent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Join Thousands of Users
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <span className="text-gradient block">AI Conversations?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Join thousands of users already experiencing the power of multi-agent AI conversations. 
            Start your first group chat today and discover a new way to interact with AI.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 text-left">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="cta-button-primary group shadow-glow"
              onClick={() => {
                // Scroll to top for sign up or show coming soon
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Users className="mr-2 h-5 w-5" />
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => {
                // Scroll to features section to show demo
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Setup in under 2 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};