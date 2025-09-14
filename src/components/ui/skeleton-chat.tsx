import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkeletonChatProps {
  className?: string;
}

export const SkeletonChat = ({ className }: SkeletonChatProps) => {
  return (
    <div className={cn("space-y-4 p-4", className)}>
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-muted animate-pulse" />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
            <div className="h-3 w-20 bg-muted rounded animate-pulse" />
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-muted rounded animate-pulse" />
          <div className="w-8 h-8 bg-muted rounded animate-pulse" />
        </div>
      </div>

      {/* Messages Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "flex items-start gap-3",
              i % 2 === 0 ? "flex-row-reverse ml-auto max-w-[80%]" : "mr-auto max-w-[80%]"
            )}
          >
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse flex-shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-3 w-16 bg-muted rounded animate-pulse" />
              <div className="bg-muted rounded-2xl p-4 space-y-2">
                <div className="h-3 w-full bg-muted-foreground/20 rounded animate-pulse" />
                <div className="h-3 w-3/4 bg-muted-foreground/20 rounded animate-pulse" />
                {i === 2 && <div className="h-3 w-1/2 bg-muted-foreground/20 rounded animate-pulse" />}
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Typing Indicator Skeleton */}
        <div className="flex items-start gap-3 mr-auto max-w-[80%]">
          <div className="w-8 h-8 rounded-full bg-muted animate-pulse flex-shrink-0" />
          <div className="bg-muted rounded-2xl p-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonChat;
