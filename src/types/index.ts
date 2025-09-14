// Main type definitions for AI Chatbot Platform

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Agent {
  id: string;
  name: string;
  personality: AgentPersonality;
  avatar: string;
  description: string;
  capabilities: string[];
  isActive: boolean;
  color: string; // For UI theming
}

export interface Message {
  id: string;
  content: string;
  sender: MessageSender;
  senderId: string; // User ID or Agent ID
  conversationId: string;
  timestamp: Date;
  type: MessageType;
  metadata?: MessageMetadata;
}

export interface Conversation {
  id: string;
  title: string;
  userId: string;
  participants: ConversationParticipant[];
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface ConversationParticipant {
  id: string;
  type: 'user' | 'agent';
  joinedAt: Date;
  isActive: boolean;
}

// Enums and Union Types
export type AgentPersonality = 
  | 'creative-writer'
  | 'technical-expert'
  | 'life-coach'
  | 'custom';

export type MessageSender = 'user' | 'agent';

export type MessageType = 
  | 'text'
  | 'file'
  | 'image'
  | 'system'
  | 'typing';

export interface MessageMetadata {
  reactions?: MessageReaction[];
  isEdited?: boolean;
  editedAt?: Date;
  threadId?: string;
  attachments?: MessageAttachment[];
}

export interface MessageReaction {
  emoji: string;
  userId: string;
  timestamp: Date;
}

export interface MessageAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Chat-specific types
export interface ChatState {
  activeConversation: Conversation | null;
  conversations: Conversation[];
  selectedAgents: Agent[];
  isLoading: boolean;
  error: string | null;
}

export interface TypingIndicator {
  senderId: string;
  senderName: string;
  conversationId: string;
  timestamp: Date;
}

// UI Component Props Types
export interface ChatInputProps {
  onSendMessage: (content: string, attachments?: File[]) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

export interface MessageBubbleProps {
  message: Message;
  sender: Agent | User;
  isOwnMessage: boolean;
  showAvatar?: boolean;
  onReaction?: (messageId: string, emoji: string) => void;
}

export interface AgentSelectorProps {
  agents: Agent[];
  selectedAgents: Agent[];
  onAgentSelect: (agent: Agent) => void;
  onAgentDeselect: (agentId: string) => void;
  maxAgents?: number;
}

// Authentication Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

// Supabase specific types
export interface SupabaseUser {
  id: string;
  email: string;
  user_metadata: {
    name?: string;
    avatar?: string;
  };
  created_at: string;
  updated_at: string;
}
