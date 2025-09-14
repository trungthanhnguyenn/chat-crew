import { 
  Users, 
  MessageSquare, 
  Zap, 
  Brain, 
  Globe, 
  Shield,
  Sparkles,
  Clock,
  Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Multi-Agent Conversations",
    description: "Chat with 2-3 different AI personalities simultaneously for diverse perspectives and richer discussions.",
    color: "text-ai-agent-1"
  },
  {
    icon: Brain,
    title: "Specialized AI Personalities",
    description: "Each AI agent has unique expertise - creative, analytical, technical, and more specialized roles.",
    color: "text-ai-agent-2"
  },
  {
    icon: Zap,
    title: "Real-Time Interactions",
    description: "Experience seamless, instant responses with typing indicators and live conversation flow.",
    color: "text-ai-agent-3"
  },
  {
    icon: MessageSquare,
    title: "Advanced Chat Interface",
    description: "Modern, intuitive chat UI designed specifically for multi-agent conversations and group dynamics.",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Cross-Platform Access",
    description: "Access your AI companions from any device with a responsive, mobile-first design.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your conversations are encrypted and private. No data is used for training or shared with third parties.",
    color: "text-accent"
  },
  {
    icon: Clock,
    title: "Conversation History",
    description: "Never lose track of important discussions with searchable conversation history and export options.",
    color: "text-ai-agent-1"
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description: "Leverage the collective intelligence of multiple AI agents for brainstorming and complex problem solving.",
    color: "text-ai-agent-2"
  },
  {
    icon: Sparkles,
    title: "Customizable Agents",
    description: "Personalize AI agent personalities, expertise areas, and communication styles to match your needs.",
    color: "text-ai-agent-3"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Powerful Features
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="text-gradient block">AI Companions?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Experience the future of AI interaction with our innovative multi-agent platform. 
            Get diverse perspectives, creative solutions, and engaging conversations all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const ctaSection = document.querySelector('[data-cta-section]');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 cursor-pointer"
          >
            <Users className="mr-2 h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">
              Ready to experience multi-agent conversations?
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};