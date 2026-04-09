"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";
import { chatFAQs, defaultResponse } from "@/lib/data/chat-responses";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! Welcome to Kondeti Super Speciality Hospitals. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotResponse = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, text, sender: "bot" },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleFAQClick = (faq: (typeof chatFAQs)[0]) => {
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, text: faq.question, sender: "user" },
    ]);
    addBotResponse(faq.answer);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, text: input, sender: "user" },
    ]);
    setInput("");
    addBotResponse(defaultResponse);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        animate={{
          scale: isOpen ? 0 : [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: isOpen ? 0 : Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-muted text-primary-foreground shadow-lg shadow-gold/20 flex items-center justify-center"
        style={{ display: isOpen ? "none" : "flex" }}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] h-[450px] rounded-2xl border border-border/50 bg-surface shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-card border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  Chat with us
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, x: msg.sender === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gold/20 text-foreground rounded-br-sm"
                        : "bg-surface-card text-foreground rounded-bl-sm border border-border/30"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-1.5 px-4 py-3 bg-surface-card rounded-2xl rounded-bl-sm w-fit border border-border/30"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="w-2 h-2 rounded-full bg-gold/50"
                    />
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* FAQ Chips */}
            {messages.length <= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-4 pb-2 flex flex-wrap gap-2"
              >
                {chatFAQs.slice(0, 4).map((faq, i) => (
                  <motion.button
                    key={faq.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                    onClick={() => handleFAQClick(faq)}
                    className="text-xs px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20 hover:bg-gold/20 transition-colors"
                  >
                    {faq.question}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border/50 bg-surface-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-surface rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 border border-border/50 focus:outline-none focus:border-gold/30"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
