import { 
  UserPlus, 
  Users, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Bot,
  Zap
} from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Sign Up & Choose Agents",
    description: "Create your account and select 2-3 AI personalities from our diverse collection of specialized agents.",
    icon: UserPlus,
    color: "text-ai-agent-1",
    bgColor: "bg-ai-agent-1/10"
  },
  {
    step: "02", 
    title: "Start Group Conversation",
    description: "Launch your multi-agent chat room and begin conversations with all AI companions simultaneously.",
    icon: Users,
    color: "text-ai-agent-2",
    bgColor: "bg-ai-agent-2/10"
  },
  {
    step: "03",
    title: "Engage & Collaborate", 
    description: "Experience dynamic group discussions where each AI provides unique perspectives and expertise.",
    icon: MessageCircle,
    color: "text-ai-agent-3",
    bgColor: "bg-ai-agent-3/10"
  },
  {
    step: "04",
    title: "Get Diverse Solutions",
    description: "Receive comprehensive answers, creative ideas, and solutions from multiple AI viewpoints in real-time.",
    icon: Sparkles,
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const benefits = [
  "Multiple AI perspectives in one conversation",
  "Real-time collaborative problem solving", 
  "Specialized expertise from different agents",
  "Enhanced creativity through AI diversity"
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Zap className="mr-2 h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              How It Works
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in
            <span className="text-gradient block">4 Simple Steps</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From signup to your first multi-agent conversation in under 2 minutes. 
            Experience the power of collaborative AI intelligence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-4" />
                )}
                
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group-hover:shadow-glow/20">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-muted-foreground/30">
                      {step.step}
                    </span>
                    <div className={`p-3 rounded-xl ${step.bgColor} border border-primary/20`}>
                      <Icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Choose Multi-Agent Conversations?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Demo Conversation Preview */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Live Multi-Agent Chat</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-ai-agent-1 rounded-full"></div>
                    <span>Creative AI is typing...</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-ai-agent-2 rounded-full"></div>
                    <span>Business AI is typing...</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-ai-agent-3 rounded-full"></div>
                    <span>Tech AI is typing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};