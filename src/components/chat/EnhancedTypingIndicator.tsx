import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DEMO_AGENTS, AGENT_ICONS } from '@/lib/smart-demo-data';
import { cn } from '@/lib/utils';

interface EnhancedTypingIndicatorProps {
  agentId: 'creative' | 'business' | 'tech';
  className?: string;
}

export const EnhancedTypingIndicator = ({ agentId, className }: EnhancedTypingIndicatorProps) => {
  const agent = DEMO_AGENTS.find(a => a.id === agentId);
  const IconComponent = AGENT_ICONS[agentId];

  if (!agent) return null;

  // Dynamic dots animation with realistic typing pattern
  const dotVariants = {
    typing: {
      scale: [1, 1.2, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Staggered animation for dots
  const containerVariants = {
    typing: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Avatar pulse animation
  const avatarVariants = {
    typing: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const getAgentStyles = () => {
    switch (agent.id) {
      case 'creative':
        return {
          bubble: "bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300",
          dots: "bg-purple-500",
          text: "text-purple-700"
        };
      case 'business':
        return {
          bubble: "bg-gradient-to-br from-emerald-100 to-emerald-200 border-emerald-300",
          dots: "bg-emerald-500", 
          text: "text-emerald-700"
        };
      case 'tech':
        return {
          bubble: "bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300",
          dots: "bg-orange-500",
          text: "text-orange-700"
        };
      default:
        return {
          bubble: "bg-muted border-border",
          dots: "bg-muted-foreground",
          text: "text-muted-foreground"
        };
    }
  };

  const styles = getAgentStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={cn(
        "flex items-start gap-3 max-w-[70%] mr-auto",
        className
      )}
    >
      {/* Animated Avatar */}
      <motion.div
        variants={avatarVariants}
        animate="typing"
      >
        <Avatar className={cn(
          "w-8 h-8 border-2 shadow-md",
          `border-[${agent.color}]`
        )}>
          <AvatarFallback 
            className="text-white font-medium text-xs flex items-center justify-center"
            style={{ background: agent.gradient }}
          >
            {IconComponent && <IconComponent className="w-4 h-4" />}
          </AvatarFallback>
        </Avatar>
      </motion.div>

      {/* Typing Bubble */}
      <motion.div 
        className={cn(
          "relative px-4 py-3 rounded-2xl rounded-bl-md border shadow-sm",
          styles.bubble
        )}
        animate={{
          boxShadow: [
            "0 2px 4px rgba(0,0,0,0.1)",
            "0 4px 8px rgba(0,0,0,0.15)",
            "0 2px 4px rgba(0,0,0,0.1)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Agent name */}
        <div className={cn("text-xs font-medium mb-2", styles.text)}>
          {agent.name} is typing...
        </div>
        
        {/* Typing Dots Container */}
        <motion.div
          variants={containerVariants}
          animate="typing"
          className="flex items-center space-x-1"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={dotVariants}
              custom={index}
              className={cn(
                "w-2 h-2 rounded-full",
                styles.dots
              )}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            />
          ))}
        </motion.div>

        {/* Tail */}
        <div
          className={cn(
            "absolute w-3 h-3 transform rotate-45 -left-1 bottom-3 border-l border-b",
            styles.bubble
          )}
        />

        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-20"
          animate={{
            background: [
              `${agent.color}00`,
              `${agent.color}20`,
              `${agent.color}00`
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};
