import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ConversationMessage, Agent } from '@/types/chat-demo';
import { DEMO_AGENTS, AGENT_ICONS } from '@/lib/smart-demo-data';
import { cn } from '@/lib/utils';

interface EnhancedMessageBubbleProps {
  message: ConversationMessage;
  className?: string;
  isLatest?: boolean;
}

export const EnhancedMessageBubble = ({ message, className, isLatest }: EnhancedMessageBubbleProps) => {
  const isUser = message.sender === 'user';
  const agent = isUser ? null : DEMO_AGENTS.find(a => a.id === message.sender);
  const IconComponent = AGENT_ICONS[message.sender];
  const controls = useAnimation();
  const [hasReaction, setHasReaction] = useState(false);

  // Enhanced animation sequence
  useEffect(() => {
    const animateMessage = async () => {
      // Initial entry animation
      await controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.5
        }
      });

      // Add reaction emoji after message appears
      if (message.reactionEmoji && !hasReaction && !isUser) {
        setTimeout(() => {
          setHasReaction(true);
        }, 800);
      }

      // Highlight if latest message
      if (isLatest) {
        await controls.start({
          boxShadow: [
            "0 0 0 0px rgba(59, 130, 246, 0)",
            "0 0 0 4px rgba(59, 130, 246, 0.3)",
            "0 0 0 0px rgba(59, 130, 246, 0)"
          ],
          transition: { duration: 1.5 }
        });
      }
    };

    animateMessage();
  }, [controls, message.reactionEmoji, hasReaction, isLatest, isUser]);

  // Smart color scheme based on agent
  const getAgentStyles = () => {
    if (isUser) {
      return {
        bubble: "bg-gradient-to-br from-blue-600 to-blue-700 text-white",
        tail: "bg-blue-600",
        border: "border-blue-500"
      };
    }

    switch (agent?.id) {
      case 'creative':
        return {
          bubble: "bg-gradient-to-br from-purple-600 to-purple-700 text-white",
          tail: "bg-purple-600",
          border: "border-purple-500"
        };
      case 'business':
        return {
          bubble: "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white", 
          tail: "bg-emerald-600",
          border: "border-emerald-500"
        };
      case 'tech':
        return {
          bubble: "bg-gradient-to-br from-orange-600 to-orange-700 text-white",
          tail: "bg-orange-600", 
          border: "border-orange-500"
        };
      default:
        return {
          bubble: "bg-background border border-border text-foreground",
          tail: "bg-background border-b border-r border-border",
          border: "border-border"
        };
    }
  };

  const styles = getAgentStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={controls}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "flex items-start gap-3 max-w-[85%] relative",
        isUser ? "ml-auto flex-row-reverse" : "mr-auto",
        className
      )}
    >
      {/* Avatar với enhanced hover effects */}
      <motion.div
        whileHover={{ 
          scale: 1.15, 
          rotate: isUser ? -5 : 5,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Avatar className={cn(
          "w-9 h-9 border-2 shadow-lg ring-2 ring-white/20",
          styles.border
        )}>
          <AvatarFallback 
            className="text-white font-medium text-xs flex items-center justify-center"
            style={{
              background: isUser 
                ? "linear-gradient(135deg, #3B82F6, #1D4ED8)"
                : agent?.gradient || "#6B7280"
            }}
          >
            {IconComponent && <IconComponent className="w-4 h-4" />}
          </AvatarFallback>
        </Avatar>
      </motion.div>

      {/* Message Content với enhanced styling */}
      <motion.div 
        className={cn(
          "relative px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm",
          styles.bubble,
          isUser ? "rounded-br-md" : "rounded-bl-md"
        )}
        whileHover={{
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          transition: { duration: 0.2 }
        }}
      >
        {/* Agent Name với personality indicator */}
        {!isUser && agent && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-semibold mb-1 text-white/90 flex items-center gap-1"
          >
            {agent.name}
            {agent.traits && (
              <span className="text-[10px] opacity-60">
                • {agent.traits[0]}
              </span>
            )}
          </motion.div>
        )}
        
        {/* Message Text với typing effect */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm leading-relaxed text-white"
        >
          {message.content}
        </motion.p>

        {/* Message Tail với improved styling */}
        <div
          className={cn(
            "absolute w-3 h-3 transform rotate-45 shadow-md",
            styles.tail,
            isUser 
              ? "-right-1 bottom-3" 
              : "-left-1 bottom-3"
          )}
        />

        {/* Reaction Emoji với bounce animation */}
        {hasReaction && message.reactionEmoji && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [0, -5, 0]
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              y: { repeat: 1, duration: 0.6 }
            }}
            className="absolute -top-2 right-2 text-lg bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-white"
          >
            {message.reactionEmoji}
          </motion.div>
        )}
      </motion.div>

      {/* Glow effect for latest message */}
      {isLatest && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 0 0px rgba(59, 130, 246, 0)",
              "0 0 20px 2px rgba(59, 130, 246, 0.3)",
              "0 0 0 0px rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      )}
    </motion.div>
  );
};
