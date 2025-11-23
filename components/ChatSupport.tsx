import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const ChatSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: 'Hello! I am your 24/7 AI Support. Ask me anything about our MBBS program.', timestamp: Date.now() }
  ]);
  const [inputText, setInputText] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(inputText);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, modelMsg]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out transform origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-yellow p-4 flex justify-between items-center">
            <h3 className="text-black font-bold flex items-center gap-2">
              <MessageSquare size={18} />
              Student Support
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-black hover:bg-black/10 rounded-full p-1 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-black/90 space-y-4 custom-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-yellow text-black rounded-br-none font-medium' 
                      : 'bg-gray-800 text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-lg rounded-bl-none">
                  <Loader2 className="animate-spin text-brand-yellow" size={18} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 bg-black text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand-yellow border border-gray-700"
            />
            <button
              onClick={handleSendMessage}
              disabled={loadingState === LoadingState.LOADING || !inputText.trim()}
              className="bg-brand-yellow text-black p-2 rounded-md hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-yellow text-black font-bold p-4 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-200 flex items-center gap-2"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="hidden sm:inline pr-1">Need Help?</span>}
      </button>
    </div>
  );
};

export default ChatSupport;