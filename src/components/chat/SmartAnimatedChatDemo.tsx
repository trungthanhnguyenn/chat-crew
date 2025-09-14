import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { EnhancedMessageBubble } from './EnhancedMessageBubble';
import { EnhancedTypingIndicator } from './EnhancedTypingIndicator';
import { SkeletonChat } from '@/components/ui/skeleton-chat';
import { useSmartConversationLoop } from '@/hooks/useSmartConversationLoop';
import { DEMO_AGENTS } from '@/lib/smart-demo-data';
import { Play, Pause, RotateCcw, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SmartAnimatedChatDemoProps {
  className?: string;
}

export const SmartAnimatedChatDemo = ({ className }: SmartAnimatedChatDemoProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const {
    messages,
    typingStates,
    isPlaying,
    isPaused,
    currentScenario,
    scenarios,
    togglePause,
    resetConversation,
    switchToScenario
  } = useSmartConversationLoop();

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [messages, typingStates]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      
      const isContainerFocused = containerRef.current.contains(document.activeElement);
      if (!isContainerFocused) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePause();
          break;
        case 'r':
          e.preventDefault();
          resetConversation();
          break;
        case 's':
          e.preventDefault();
          // Switch to random scenario
          const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
          switchToScenario(randomScenario.id);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [togglePause, resetConversation, switchToScenario, scenarios]);

  if (isLoading) {
    return <SkeletonChat className={className} />;
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative bg-gradient-to-br from-background/95 to-muted/30 rounded-2xl border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm",
        "focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300",
        isHovered && "shadow-3xl ring-1 ring-primary/10",
        className
      )}
      onMouseEnter={() => {
        setIsHovered(true);
        if (!isPaused) togglePause();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isPaused) togglePause();
      }}
      tabIndex={0}
      role="region"
      aria-label="Smart AI Chat Demo - Interactive conversation between multiple AI agents"
      aria-live="polite"
    >
      {/* Enhanced Header with scenario info */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          {/* Agent Avatars with enhanced effects */}
          <div className="flex -space-x-2">
            {DEMO_AGENTS.map((agent, index) => (
              <motion.div
                key={agent.id}
                className="relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full border-2 border-background shadow-md relative overflow-hidden"
                  style={{ background: agent.gradient }}
                >
                  {/* Active indicator */}
                  {typingStates[agent.id] && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity 
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-1">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              AI Companions Chat
              <Badge variant="secondary" className="text-xs">
                Smart Demo
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              {currentScenario?.title} • 3 agents active
            </p>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePause}
            className="h-8 w-8 p-0"
            aria-label={isPaused ? "Resume conversation" : "Pause conversation"}
            title={isPaused ? "Resume (Space)" : "Pause (Space)"}
          >
            {isPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
              switchToScenario(randomScenario.id);
            }}
            className="h-8 w-8 p-0"
            aria-label="Switch scenario"
            title="Random scenario (S)"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={resetConversation}
            className="h-8 w-8 p-0"
            aria-label="Reset conversation"
            title="Reset conversation (R)"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Messages with enhanced animations */}
      <ScrollArea className="h-96 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <EnhancedMessageBubble
                key={message.id}
                message={message}
                isLatest={index === messages.length - 1}
              />
            ))}
            
            {/* Enhanced Typing Indicators */}
            {Object.entries(typingStates).map(([sender, isTyping]) => {
              if (!isTyping || sender === 'user') return null;

              return (
                <EnhancedTypingIndicator
                  key={`typing-${sender}`}
                  agentId={sender as 'creative' | 'business' | 'tech'}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Enhanced Status Indicators */}
      <div className="absolute top-2 right-2 flex items-center space-x-1">
        {/* Playing Status */}
        <motion.div
          className={cn(
            "w-2 h-2 rounded-full",
            isPlaying && !isPaused ? "bg-green-500" : "bg-yellow-500"
          )}
          animate={{
            scale: isPlaying && !isPaused ? [1, 1.2, 1] : 1,
            opacity: isPlaying && !isPaused ? [0.7, 1, 0.7] : 0.7,
          }}
          transition={{
            duration: 2,
            repeat: isPlaying && !isPaused ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
        
        {/* Scenario Indicator */}
        <div className="text-xs text-muted-foreground bg-background/80 rounded px-2 py-1">
          {scenarios.findIndex(s => s.id === currentScenario?.id) + 1}/{scenarios.length}
        </div>
      </div>

      {/* Interactive Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-primary/20"
        initial={{ width: "0%" }}
        animate={{ 
          width: messages.length > 0 ? `${(messages.length / 4) * 100}%` : "0%" 
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};
