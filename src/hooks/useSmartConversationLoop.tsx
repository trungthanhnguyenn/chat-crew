import { useState, useEffect, useCallback, useRef } from 'react';
import { ConversationMessage, ConversationState, ConversationScenario } from '@/types/chat-demo';
import { CONVERSATION_SCENARIOS } from '@/lib/smart-demo-data';

export const useSmartConversationLoop = () => {
  const [state, setState] = useState<ConversationState>({
    currentIndex: 0,
    isPlaying: true,
    isPaused: false,
    messages: [],
    typingStates: {},
    scenarioIndex: 0,
    currentScenario: CONVERSATION_SCENARIOS[0]
  });

  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const lastUserMessageTime = useRef<number>(0);

  // Clear all timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];
  }, []);

  // Get next scenario in rotation
  const getNextScenario = useCallback((): ConversationScenario => {
    const nextIndex = (state.scenarioIndex + 1) % CONVERSATION_SCENARIOS.length;
    return CONVERSATION_SCENARIOS[nextIndex];
  }, [state.scenarioIndex]);

  // Reset conversation with new scenario
  const resetConversation = useCallback(() => {
    clearAllTimeouts();
    const nextScenario = getNextScenario();
    
    setState(prev => ({
      ...prev,
      currentIndex: 0,
      isPlaying: true,
      isPaused: false,
      messages: [],
      typingStates: {},
      currentScenario: nextScenario,
      scenarioIndex: (prev.scenarioIndex + 1) % CONVERSATION_SCENARIOS.length
    }));
    
    lastUserMessageTime.current = Date.now();
  }, [clearAllTimeouts, getNextScenario]);

  // Toggle pause/play
  const togglePause = useCallback(() => {
    setState(prev => ({
      ...prev,
      isPaused: !prev.isPaused,
      isPlaying: prev.isPaused
    }));
  }, []);

  // Set typing state for an agent
  const setTypingState = useCallback((sender: string, isTyping: boolean) => {
    setState(prev => ({
      ...prev,
      typingStates: {
        ...prev.typingStates,
        [sender]: isTyping
      }
    }));
  }, []);

  // Add message to conversation
  const addMessage = useCallback((message: ConversationMessage) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
      currentIndex: prev.currentIndex + 1
    }));
  }, []);

  // Generate random timing variations for natural conversation
  const addRandomDelay = useCallback((baseDelay: number): number => {
    const variation = baseDelay * 0.3; // 30% variation
    return baseDelay + (Math.random() - 0.5) * variation;
  }, []);

  // Start conversation with user message
  const startConversation = useCallback((scenario: ConversationScenario) => {
    if (!scenario) return;

    // Clear any existing timeouts
    clearAllTimeouts();

    // Add user message immediately to state
    const userMessage: ConversationMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      content: scenario.userMessage,
      timestamp: Date.now()
    };

    // Add user message immediately
    addMessage(userMessage);

    // Schedule agent responses sequentially with natural timing
    let cumulativeDelay = 1500; // Base delay after user message

    scenario.responses.forEach((response, index) => {
      // Add natural variation to delays
      const naturalDelay = addRandomDelay(response.delay);
      cumulativeDelay += naturalDelay;

      // Schedule typing indicator
      const typingTimeout = setTimeout(() => {
        setTypingState(response.agent, true);
      }, cumulativeDelay);
      timeoutRefs.current.push(typingTimeout);

      // Schedule message
      const messageTimeout = setTimeout(() => {
        setTypingState(response.agent, false);
        
        const agentMessage: ConversationMessage = {
          id: `${response.agent}-${Date.now()}-${index}`,
          sender: response.agent,
          content: response.message,
          timestamp: Date.now(),
          reactionEmoji: response.reactionEmoji
        };
        
        addMessage(agentMessage);
      }, cumulativeDelay + addRandomDelay(response.typingDuration));
      timeoutRefs.current.push(messageTimeout);

      // Add pause between agent responses for natural conversation
      cumulativeDelay += addRandomDelay(response.typingDuration) + 800;
    });

    // Schedule transition to next scenario
    const transitionDelay = cumulativeDelay + 4000; // 4 seconds after last message
    const transitionTimeout = setTimeout(() => {
      // Fade out current conversation
      setState(prev => ({ ...prev, isPlaying: false }));
      
      // Start new conversation after fade
      setTimeout(() => {
        resetConversation();
      }, 1500);
    }, transitionDelay);
    timeoutRefs.current.push(transitionTimeout);

  }, [addMessage, setTypingState, addRandomDelay, resetConversation, clearAllTimeouts]);

  // Main conversation effect
  useEffect(() => {
    if (!state.isPlaying || state.isPaused || !state.currentScenario) return;
    
    // Only start if no messages yet (new scenario)
    if (state.messages.length === 0) {
      startConversation(state.currentScenario);
    }

  }, [state.isPlaying, state.isPaused, state.currentScenario?.id, state.messages.length]);

  // Cleanup effect
  useEffect(() => {
    return () => clearAllTimeouts();
  }, [clearAllTimeouts]);

  // Manual scenario switching
  const switchToScenario = useCallback((scenarioId: string) => {
    const scenario = CONVERSATION_SCENARIOS.find(s => s.id === scenarioId);
    if (!scenario) return;

    clearAllTimeouts();
    setState(prev => ({
      ...prev,
      currentIndex: 0,
      messages: [],
      typingStates: {},
      currentScenario: scenario,
      isPlaying: true,
      isPaused: false
    }));
  }, [clearAllTimeouts]);

  return {
    messages: state.messages,
    typingStates: state.typingStates,
    isPlaying: state.isPlaying,
    isPaused: state.isPaused,
    currentScenario: state.currentScenario,
    scenarios: CONVERSATION_SCENARIOS,
    togglePause,
    resetConversation,
    switchToScenario
  };
};
