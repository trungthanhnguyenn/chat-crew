import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  MessageSquare,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Sparkles,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former AI researcher at Google with 10+ years in conversational AI and machine learning.",
    avatar: "SC",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Marcus Rodriguez", 
    role: "CTO",
    bio: "Ex-OpenAI engineer specializing in multi-agent systems and natural language processing.",
    avatar: "MR",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Product strategist with expertise in user experience and AI interface design.",
    avatar: "EW", 
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "David Kim",
    role: "Lead AI Engineer",
    bio: "PhD in Computer Science, specialized in developing conversational AI personalities.",
    avatar: "DK",
    social: { github: "#", mail: "#" }
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push the boundaries of what's possible in AI conversation technology."
  },
  {
    icon: Users,
    title: "Human-Centered",
    description: "Every feature is designed to enhance human creativity and problem-solving."
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your conversations are private and secure. We never use your data for training."
  },
  {
    icon: Heart,
    title: "Ethical AI",
    description: "We're committed to responsible AI development and transparent practices."
  }
];

const stats = [
  { number: "50K+", label: "Active Users" },
  { number: "2M+", label: "Conversations" },
  { number: "15+", label: "AI Personalities" },
  { number: "99.9%", label: "Uptime" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              About Us
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pioneering the Future of
            <span className="text-gradient block">AI Conversations</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We're building the next generation of AI interaction through innovative multi-agent conversations. 
            Our mission is to democratize access to diverse AI perspectives and collaborative intelligence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2024 by a team of AI researchers and product experts, AI Companions was born 
                from a simple observation: single AI conversations, while powerful, miss the richness 
                that comes from diverse perspectives.
              </p>
              <p>
                We envisioned a platform where users could engage with multiple AI personalities 
                simultaneously, creating more dynamic, creative, and comprehensive discussions. 
                Today, we're making that vision a reality.
              </p>
              <p>
                Our breakthrough multi-agent conversation technology enables truly collaborative 
                AI interactions, where different AI personalities can build on each other's ideas, 
                debate solutions, and provide complementary expertise.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Mission Visual */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <MessageSquare className="h-8 w-8 text-ai-agent-1 mb-2" />
                  <div className="text-sm font-medium text-foreground">Creative AI</div>
                  <div className="text-xs text-muted-foreground">Innovative Ideas</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <Target className="h-8 w-8 text-ai-agent-2 mb-2" />
                  <div className="text-sm font-medium text-foreground">Business AI</div>
                  <div className="text-xs text-muted-foreground">Strategic Thinking</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <Zap className="h-8 w-8 text-ai-agent-3 mb-2" />
                  <div className="text-sm font-medium text-foreground">Tech AI</div>
                  <div className="text-xs text-muted-foreground">Technical Expertise</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <Sparkles className="h-8 w-8 text-primary mb-2" />
                  <div className="text-sm font-medium text-foreground">You</div>
                  <div className="text-xs text-muted-foreground">Human Insight</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {member.avatar}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-2">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="p-2 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                      <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="p-2 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                      <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="p-2 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                      <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                  {member.social.mail && (
                    <a href={member.social.mail} className="p-2 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                      <Mail className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Mission</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI innovation. 
              Explore opportunities to shape the future of conversational AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="cta-button-primary"
                onClick={() => {
                  // Scroll to pricing section
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Users className="mr-2 h-4 w-4" />
                View Open Positions
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  // Create mailto link
                  window.location.href = 'mailto:team@aicompanions.com?subject=Contact%20Us';
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};