import { Agent, ConversationMessage, ConversationScenario } from '@/types/chat-demo';
import { Bot, Lightbulb, TrendingUp, Code, Palette, BarChart3, Cpu } from 'lucide-react';

// AI Agents Configuration với personalities chi tiết hơn
export const DEMO_AGENTS: Agent[] = [
  {
    id: 'creative',
    name: 'Creative AI',
    role: 'Creative Writer & Storyteller',
    avatar: 'creative-avatar',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    personality: 'creative',
    traits: ['imaginative', 'storytelling', 'visual thinking', 'brand narrative']
  },
  {
    id: 'business',
    name: 'Business AI',
    role: 'Strategic Business Analyst',
    avatar: 'business-avatar', 
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #047857)',
    personality: 'analytical',
    traits: ['data-driven', 'market analysis', 'strategic', 'ROI focused']
  },
  {
    id: 'tech',
    name: 'Tech AI',
    role: 'Technical Implementation Expert',
    avatar: 'tech-avatar',
    color: '#F97316', 
    gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    personality: 'technical',
    traits: ['problem-solving', 'architecture', 'scalability', 'security']
  }
];

// Conversation Scenarios - Nhiều kịch bản khác nhau
export const CONVERSATION_SCENARIOS: ConversationScenario[] = [
  {
    id: 'startup-pitch',
    title: 'Startup Pitch Help',
    userMessage: "Hey everyone! I need help brainstorming ideas for my startup pitch.",
    responses: [
      {
        agent: 'creative',
        message: "Love this! Let's craft a compelling story. What problem does your startup solve? I can help you create a narrative that resonates emotionally with investors.",
        delay: 1500,
        typingDuration: 2000,
        reactionEmoji: '💡'
      },
      {
        agent: 'business', 
        message: "Great timing! I'll focus on market validation and business model. What's your target market size and how are you planning to monetize?",
        delay: 2800,
        typingDuration: 1800,
        reactionEmoji: '📊'
      },
      {
        agent: 'tech',
        message: "I can help with the technical feasibility aspect! What's your tech stack? Investors love to see scalable, secure architecture.",
        delay: 4200,
        typingDuration: 1900,
        reactionEmoji: '⚡'
      }
    ]
  },
  {
    id: 'product-design',
    title: 'Product Design Feedback',
    userMessage: "I'm designing a new mobile app. Can you help me with UX ideas?",
    responses: [
      {
        agent: 'creative',
        message: "Exciting! Let's think about user journeys and visual storytelling. What emotions should users feel when using your app?",
        delay: 1200,
        typingDuration: 1600,
        reactionEmoji: '🎨'
      },
      {
        agent: 'business',
        message: "From a business perspective - who's your primary user persona? Understanding user behavior patterns will drive design decisions.",
        delay: 2500,
        typingDuration: 1900,
        reactionEmoji: '👥'
      },
      {
        agent: 'tech',
        message: "Consider technical constraints early! Native vs hybrid? Offline capabilities? Performance on older devices? These affect UX significantly.",
        delay: 4000,
        typingDuration: 2100,
        reactionEmoji: '📱'
      }
    ]
  },
  {
    id: 'marketing-strategy',
    title: 'Marketing Strategy Discussion',
    userMessage: "How should I market my new SaaS product to get the first 1000 users?",
    responses: [
      {
        agent: 'creative',
        message: "Content marketing is key! Create valuable content that solves your audience's problems. Think blog posts, tutorials, case studies that showcase your expertise.",
        delay: 1400,
        typingDuration: 2200,
        reactionEmoji: '✍️'
      },
      {
        agent: 'business',
        message: "Focus on product-market fit first. Identify your ideal customer profile, then target niche communities where they hang out. LinkedIn, Reddit, Discord communities?",
        delay: 3100,
        typingDuration: 2000,
        reactionEmoji: '🎯'
      },
      {
        agent: 'tech', 
        message: "Build with sharing in mind! Referral systems, API integrations, webhooks. Make it easy for users to invite others organically.",
        delay: 5200,
        typingDuration: 1700,
        reactionEmoji: '🔗'
      }
    ]
  },
  {
    id: 'career-advice',
    title: 'Career Development',
    userMessage: "I want to transition from developer to product manager. Any advice?",
    responses: [
      {
        agent: 'creative',
        message: "Your developer background is actually an advantage! You understand technical constraints. Focus on developing your storytelling skills to communicate vision clearly.",
        delay: 1600,
        typingDuration: 2100,
        reactionEmoji: '🚀'
      },
      {
        agent: 'business',
        message: "Start thinking like a business owner. Learn about metrics, user analytics, A/B testing. Understanding customer lifetime value and acquisition costs is crucial.",
        delay: 3400,
        typingDuration: 1900,
        reactionEmoji: '📈'
      },
      {
        agent: 'tech',
        message: "Leverage your technical skills! You can bridge the gap between engineering and business teams. Learn about system design and scalability challenges.",
        delay: 5100,
        typingDuration: 1800,
        reactionEmoji: '🌉'
      }
    ]
  },
  {
    id: 'innovation-ideas',
    title: 'Innovation Brainstorming',
    userMessage: "What emerging technologies should I explore for my next project?",
    responses: [
      {
        agent: 'creative',
        message: "AI-powered creative tools are exploding! Think about how AI can enhance human creativity rather than replace it. Collaborative AI assistants, design tools, content generation...",
        delay: 1300,
        typingDuration: 2300,
        reactionEmoji: '🤖'
      },
      {
        agent: 'business',
        message: "Look at market gaps in Web3, sustainability tech, and healthcare automation. The biggest opportunities are where technology meets urgent social needs.",
        delay: 3200,
        typingDuration: 2000,
        reactionEmoji: '💰'
      },
      {
        agent: 'tech',
        message: "Edge computing, WebAssembly, and progressive web apps are game-changers. Also explore AR/VR for practical applications beyond gaming - training, remote work, education.",
        delay: 5400,
        typingDuration: 2100,
        reactionEmoji: '⚙️'
      }
    ]
  }
];

// Agent Avatar Icons Map - expanded
export const AGENT_ICONS = {
  user: Bot,
  creative: Palette,
  business: BarChart3, 
  tech: Cpu
} as const;

// Reaction emojis for different scenarios
export const REACTION_EMOJIS = ['👍', '💡', '🚀', '🔥', '💯', '🎯', '✨', '⚡'];

// Agent personality responses for natural conversation
export const AGENT_PERSONALITIES = {
  creative: {
    openingPhrases: ["Love this!", "Exciting!", "This sparks so many ideas!", "Creative challenge accepted!"],
    closingPhrases: ["Let's make it amazing!", "Can't wait to see what you create!", "This is going to be awesome!"],
    tone: "enthusiastic"
  },
  business: {
    openingPhrases: ["Great question!", "From a business perspective...", "Let's think strategically about this...", "This is a solid opportunity!"],
    closingPhrases: ["This could be very profitable!", "The market potential is huge!", "Smart business move!"],
    tone: "analytical"
  },
  tech: {
    openingPhrases: ["Technically speaking...", "I can help with implementation!", "Great technical challenge!", "Let's break this down systematically..."],
    closingPhrases: ["This is definitely feasible!", "The architecture looks solid!", "Technical implementation is straightforward!"],
    tone: "precise"
  }
} as const;
