// Animated Chat Demo Types
export interface ConversationMessage {
  id: string;
  sender: 'user' | 'creative' | 'business' | 'tech';
  content: string;
  timestamp: number;
  delay?: number; // ms before showing
  typingDuration?: number; // how long to show typing
  reactionEmoji?: string; // emoji reaction for message
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  gradient: string;
  personality: 'creative' | 'analytical' | 'technical';
  traits?: string[]; // personality traits for smart responses
}

export interface AgentResponse {
  agent: 'creative' | 'business' | 'tech';
  message: string;
  delay: number;
  typingDuration: number;
  reactionEmoji?: string;
}

export interface ConversationScenario {
  id: string;
  title: string;
  userMessage: string;
  responses: AgentResponse[];
}

export interface TypingState {
  [agentId: string]: boolean;
}

export interface ConversationState {
  currentIndex: number;
  isPlaying: boolean;
  isPaused: boolean;
  messages: ConversationMessage[];
  typingStates: TypingState;
  currentScenario?: ConversationScenario;
  scenarioIndex: number;
}
