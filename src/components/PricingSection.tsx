import { Button } from '@/components/ui/button';
import { 
  Check, 
  Crown, 
  Zap, 
  Star,
  Users,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const plans = [
  {
    name: "Free Trial",
    description: "Perfect for getting started with multi-agent conversations",
    price: "Free",
    period: "7 days",
    icon: Zap,
    color: "border-border",
    bgColor: "bg-card",
    buttonVariant: "outline" as const,
    features: [
      "Access to 3 AI agents",
      "50 messages per day",
      "Basic conversation history",
      "Standard response time",
      "Email support"
    ]
  },
  {
    name: "Pro",
    description: "For professionals and teams who need advanced AI capabilities",
    price: "$19",
    period: "per month",
    icon: Star,
    color: "border-primary",
    bgColor: "bg-primary/5",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      "Access to 10+ AI agents",
      "Unlimited conversations",
      "Advanced conversation history",
      "Priority response time",
      "Custom AI personalities",
      "Export conversations",
      "Priority support",
      "Advanced analytics"
    ]
  },
  {
    name: "Enterprise",
    description: "For organizations needing custom AI solutions and integrations",
    price: "Custom",
    period: "contact us",
    icon: Crown,
    color: "border-secondary",
    bgColor: "bg-secondary/5", 
    buttonVariant: "secondary" as const,
    features: [
      "Unlimited AI agents",
      "Custom AI development",
      "API access",
      "White-label solution",
      "Advanced integrations",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom security policies",
      "SLA guarantees"
    ]
  }
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "What happens after my free trial?",
    answer: "After your 7-day free trial, you can choose to continue with a paid plan or your account will be paused."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
  },
  {
    question: "How many AI agents can I chat with simultaneously?",
    answer: "Free trial allows up to 3 agents, Pro allows 2-5 agents, and Enterprise has no limits."
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Crown className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Pricing Plans
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="text-gradient block">Perfect Plan</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Start free and scale as you grow. All plans include access to our core multi-agent conversation platform.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative ${plan.bgColor} rounded-2xl border-2 ${plan.color} p-8 transition-all duration-300 hover:shadow-lg animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-background border border-border mb-4">
                    <Icon className={`h-6 w-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full" 
                  variant={plan.buttonVariant}
                  size="lg"
                  onClick={() => {
                    if (plan.name === "Enterprise") {
                      // Scroll to about section for contact
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      // Scroll to top for sign up
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {plan.name === "Free Trial" ? "Start Free Trial" : 
                   plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <Sparkles className="mr-2 h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">
              Still have questions? Contact our team for personalized assistance.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};