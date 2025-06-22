import { useState, useEffect, useRef } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [activeContact, setActiveContact] = useState("DLP");
  const [showContacts, setShowContacts] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [countdown, setCountdown] = useState(5);

  const contacts = [
    {
      id: "DLP",
      name: "DeLightPlus",
      avatar: "🤖",
      status: "online",
      lastMessage: "Welcome to the portfolio!",
      typing: false
    },
    {
      id: "KP",
      name: "K.P Matlakala",
      avatar: "👨‍💻",
      status: "online",
      lastMessage: "Full Stack Developer",
      typing: false
    }
  ];

  const emojis = ["😊", "👍", "🎉", "💻", "🚀", "💡", "📱", "🌐", "⚡", "🎨"];

  const questions = [
    "Hello! I'm DeLightPlus, your AI assistant. How can I help you today?",
    "You can find my creator's projects in the Projects section. Would you like me to show you some highlights?",
    "You can reach my creator through email, LinkedIn, or GitHub. Would you like the contact details?"
  ];

  // Load saved messages on initial render
  useEffect(() => {
    loadSavedMessages();
    if (!localStorage.getItem("firstMessageShown")) {
      initFirstMessage();
    }
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadSavedMessages = () => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages") || "[]");
    setMessages(savedMessages);
  };

  const initFirstMessage = () => {
    localStorage.setItem("firstMessageShown", "true");
    typeText(questions[currentQuestionIndex]);
  };

  const typeText = (text) => {
    setIsTyping(true);
    let index = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        setMessages(prev => {
          // Remove the last message if it's from the same sender
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.from === activeContact) {
            return [...prev.slice(0, -1), { text: currentText, from: activeContact }];
          }
          return [...prev, { text: currentText, from: activeContact }];
        });
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50); // Adjust speed of typing animation (lower = faster)
  };

  const handleUserInput = (e) => {
    if (e.key === 'Enter' && userInput.trim()) {
      const newMessage = {
        text: userInput,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, newMessage]);
      setUserInput('');
      
      // Get AI response based on current question
      const response = getResponse(userInput, currentQuestionIndex);
      
      // Add AI response immediately
      const aiMessage = {
        text: response,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // Move to next question after a short delay
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          const nextQuestion = {
            text: questions[currentQuestionIndex + 1],
            sender: 'ai',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, nextQuestion]);
        } else {
          // Start countdown for final message
          setCountdown(5);
        }
      }, 500);
    }
  };

  const getResponse = (input, index) => {
    const inputLower = input.toLowerCase();
    
    if (inputLower.includes("hello") || inputLower.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (inputLower.includes("portfolio") || inputLower.includes("projects")) {
      return "You can find my creator's projects in the Projects section. Would you like me to show you some highlights?";
    } else if (inputLower.includes("contact") || inputLower.includes("reach")) {
      return "You can reach my creator through email, LinkedIn, or GitHub. Would you like the contact details?";
    } else {
      return "I'm here to help! Feel free to ask about the portfolio, projects, or contact information.";
    }
  };

  const addEmoji = (emoji) => {
    setUserInput(prev => prev + emoji);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  return (
    <div className="chat-container">
      {/* Contacts Sidebar */}
      <div className={`contacts-sidebar ${showContacts ? 'show' : 'hide'}`}>
        <div className="contacts-header">          
          {
            showContacts && 
            <button className="toggle-contacts" onClick={() =>{ console.log("toggle chats vs games");
            }}>
              🎮 
              {/* or 💬 | toggle between games and chat*/}
            </button>
          }

          <button className="toggle-contacts" onClick={() => setShowContacts(!showContacts)}>
            {showContacts ? '←' : '→'}
          </button>
        </div>
        <div className="contacts-list">
          {contacts.map(contact => (
            <div
              key={contact.id}
              className={`contact-item ${activeContact === contact.id ? 'active' : ''}`}
              onClick={() => setActiveContact(contact.id)}
            >
              <div className="contact-avatar">{contact.avatar}</div>
              <div className="contact-info">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-status">
                  {contact.typing ? "typing..." : contact.status}
                </div>
              </div>
              {/* <div className="contact-last-message">{contact.lastMessage}</div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-header" >
          <div className="chat-contact-info">
            <span className="contact-avatar">{contacts.find(c => c.id === activeContact)?.avatar}</span>
            <span className="contact-name">{contacts.find(c => c.id === activeContact)?.name}</span>
          </div>
        </div>

        <div className="messages-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.from === "User" ? "user-message" : "contact-message"}`}
            >
              {msg.from !== "User" && (
                <span className="message-avatar">
                  {contacts.find(c => c.id === msg.from)?.avatar}
                </span>
              )}
              <div className="message-content">
                <div className="message-text">{msg.text}</div>
                <div className="message-time">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message contact-message typing">
              <span className="message-avatar">🤖</span>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          {/* <button 
            className="emoji-button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊
          </button>
          {showEmojiPicker && (
            <div className="emoji-picker">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  className="emoji-item"
                  onClick={() => addEmoji(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
           */}
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleUserInput}
            placeholder="Type a message..."
          />
          <button 
            className="send-button"
            onClick={handleUserInput}
            disabled={!userInput.trim() || isTyping}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
