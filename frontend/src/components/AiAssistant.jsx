import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaPaperPlane, FaRobot, FaWhatsapp } from 'react-icons/fa';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleToggleChat = (open) => {
    setIsOpen(open);
    if (open && messages.length === 0) {
      setMessages([
        {
          text: 'Hi there! I’m your Virtual School of Nigeria Assistant. Ask me anything about our courses, teaching, registration, or using the platform!',
          sender: 'bot',
        },
      ]);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: 'user' };
    let botResponseText = '';
    const lowerCaseInput = inputValue.toLowerCase();

    // Enhanced keyword matching and deeper responses
    if (lowerCaseInput.includes('course') || lowerCaseInput.includes('learn')) {
      botResponseText = 'We offer a wide range of courses in ICT, AI, and Leadership! Our programs are designed for all levels, from beginners to experts. Are you interested in a specific subject, or would you like to see a list of our most popular courses?';
    } else if (lowerCaseInput.includes('teach') || lowerCaseInput.includes('tutor')) {
      botResponseText = 'Becoming a tutor on our platform is a great way to share your knowledge. You can set your own schedule and connect with students across Nigeria. To get started, you would need to register as a tutor on our website. Would you like me to guide you to the registration page?';
    } else if (lowerCaseInput.includes('register') || lowerCaseInput.includes('login') || lowerCaseInput.includes('account')) {
      botResponseText = 'You can register or log in by clicking the buttons at the top right of the page. If you are having trouble, please let me know what specific issue you are facing. For example, are you not receiving a confirmation email?';
    } else if (lowerCaseInput.includes('price') || lowerCaseInput.includes('cost')) {
      botResponseText = 'Our pricing is flexible. We have free introductory courses, individual course purchases, and monthly subscription plans that give you access to all content. You can find detailed information on our Pricing page.';
    } else if (lowerCaseInput.includes('support') || lowerCaseInput.includes('help') || lowerCaseInput.includes('contact')) {
      botResponseText = 'I can help with most questions about the platform. What do you need assistance with? If I am unable to help, I will connect you with our human support team.';
    }

    let botMessage;
    if (botResponseText) {
      botMessage = { text: botResponseText, sender: 'bot' };
    } else {
      botMessage = {
        text: "I'm sorry, I'm not sure how to answer that. My expertise is in our platform's features. Could you please rephrase your question? You can ask me about:\n- Our Courses\n- Teaching on the platform\n- Pricing and Plans\n- Account Help\n\nIf you still need help, I can connect you with a human expert.",
        sender: 'bot',
        isFallback: true, // This will trigger the WhatsApp button
      };
    }

    setMessages([...messages, userMessage, botMessage]);
    setInputValue('');
  };

  return (
    <>
      {/* Chat Bubble/Button */}
      {!isOpen && (
        <button
          onClick={() => handleToggleChat(true)}
          className="fixed bottom-5 right-5 bg-accent text-white w-16 h-16 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-accent-hover transition-transform transform hover:scale-110"
          aria-label="Open Chat"
        >
          <FaRobot className="text-3xl" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 md:w-96 bg-surface rounded-card shadow-card z-50 flex flex-col font-body transform transition-all duration-300 ease-in-out animate-fade-in-up">
          {/* Header */}
          <header className="bg-primary text-white p-4 rounded-t-card flex justify-between items-center">
            <div className="flex items-center">
              <FaRobot className="mr-3 text-2xl" />
              <h3 className="font-headline text-lg font-bold">Virtual School of Nigeria Assistant</h3>
            </div>
            <button onClick={() => handleToggleChat(false)} className="text-2xl hover:text-gray-300 transition-colors">
              <FaTimes />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-80">
            {messages.map((msg, index) => (
              <div key={index} className={`flex mb-4 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-xs ${msg.sender === 'bot' ? 'bg-background text-text' : 'bg-primary text-white'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  {msg.isFallback && (
                    <a href="https://wa.me/2347062314302" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center bg-whatsapp text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="w-full pl-4 pr-12 py-2 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent text-white p-2 rounded-full hover:bg-accent-hover transition-colors">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
