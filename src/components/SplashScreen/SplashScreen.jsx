import { useState, useEffect, useRef } from "react";
import "./SplashScreen.css";



const SplashScreen  = ({ onFinish }) => {

  
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [countdown, setCountdown] = useState(30); // Countdown for progress bar
  const [finalMessageShown, setFinalMessageShown] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [showConversation, setShowConversation] = useState(false); // Control conversation display
  const [showModal, setShowModal] = useState(false); // State to control showing the modal

  // Define questions 
  const questions = [
    "Hello, I'm De-Light-Plus, but you can call me DLP! What's your name?",
    "How are you feeling today?",
    "What brings you here to my creator's portfolio?",
  ];

    // Scroll event listener to detect
  useEffect(() => {
    const handleScroll = () => {
     
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Start conversation logic (automatically after scroll)
  useEffect(() => {
    loadSavedMessages();

    if (!localStorage.getItem("firstMessageShown") && !localStorage.getItem("session_complete")) 
    {
      initFirstMessage();
    } 
    else if (localStorage.getItem("firstMessageShown") && localStorage.getItem("userName") && !localStorage.getItem("session_complete")) 
    {
      const storedUserName = localStorage.getItem("userName");
      setUserName(storedUserName || ""); // Set the stored user name from localStorage

      setTimeout(() => {
        typeText(`Hey, Is that you, ${storedUserName}?`);
      }, 500);
    } 
    else { setIsComplete(true);  }

    setShowConversation(false);
  }, []);

  // Countdown timer and final message logic
  useEffect(() => {
    if (isComplete && countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 500);
      return () => clearInterval(timer);
    }

    if (countdown <= 0 && !finalMessageShown) {
      showFinalMessage();
    }
  }, [isComplete, countdown]);

  // Load saved messages from localStorage
  const loadSavedMessages = () => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages")  || "[]" );
    setMessages(savedMessages);
  };

  // Initialize the first message
  const initFirstMessage = () => {
    localStorage.setItem("firstMessageShown", "true");
    typeText(questions[0]);
  };

  // Simulate typing effect for messages
  const typeText = (text) =>
  {
    setIsTyping(true);
    let index = 0;
    setTypingMessage("");

    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingMessage((prev) => prev + text.charAt(index));
        index++;
      } 
      else
      {
        clearInterval(interval);
        setMessages((prev) => [...prev, { text, from: "DLP" }]);
        setTypingMessage("");
        setIsTyping(false);
      }
    }, 50);
  };

  // Handle user input and trigger next message
  const handleUserInput = (e) => {
    if (e.key === "Enter" && userInput.trim() && !isTyping) {
      setMessages((prev) => [...prev, { text: userInput, from: "User" }]);
      const trimmedInput = userInput.trim();

      // Check if the user has answered the "What's your name?" question
      if (questions[0] === messages[messages.length - 1]?.text) {
        setUserName(trimmedInput);
        localStorage.setItem("userName", trimmedInput); // Store name in localStorage for persistence
      }

      setUserInput("");

      const nextMessage = getNextQuestion();
      if (nextMessage) {
        setTimeout(() => typeText(nextMessage), 500);
      } else {
        setIsComplete(true);
        localStorage.setItem("session_complete", "true"); // Mark session as complete
      }
    }
  };

  // Get next question based on user answers
  const getNextQuestion = () => {
    const userMessages = messages.filter((msg) => msg.from === "User").length;
    return questions[userMessages + 1] || null;
  };

  // Show final message after session completes
  const showFinalMessage = () => {
    setFinalMessageShown(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `I will be hanging around in the chat section, ready when you need me, ${userName}! 😄`, from: "DLP" },
      ]);    
    }, 500);
  };

  // Handle "Continue" button click to show modal
  const handleContinue = () => {
    if (localStorage.getItem("firstMessageShown") 
      && !localStorage.getItem("userName") 
      && !localStorage.getItem("session_completed")) 
    {
      setShowModal(true); // Show the modal if no messages have been answered yet
    }
    else 
    {
      onFinish(); // Proceed with onFinish() if messages exist
    }
  };

  // Handle "Ok" button click in the modal
  const handleOk = () => {
    setShowModal(false); // Close the modal
    setShowConversation(true); // Continue with the conversation
  };

  // Handle "Skip" button click in the modal
  const handleSkip = () => {
    setShowModal(false); // Close the modal
    if(!localStorage.getItem("userName"))
      localStorage.setItem("userName", `guest_${new Date().toISOString().replace(/[-T:.]/g, '').slice(0, 12)}`) 

    localStorage.setItem("session_complete", "true"); // Mark session as complete
    onFinish(); // Trigger onFinish
  };

  return (
    <div className="splash-container">
            <div className="welcome-header">
        <h3>Welcome to <strong><u>DeLightPlus</u></strong><sub>chat</sub></h3>
        <div className="logo-section">
          <p>*******************************************************</p>
          <h1>K.P Matlakala</h1>
          <p>*******************************************************</p>
          <h3>Portfolio of Evidence</h3>
        </div>
      </div>

      <div className="intro-section">
        <div className="portfolio-details">
          <ul>
            <li><strong>Full Name:</strong> Kabelo Peter Matlakala</li>
            <li><strong>Location:</strong> Limpopo, Polokwane</li>
            <li><strong></strong> Web and Mobile Development</li>
            <li><strong><u>Contact Information:</u></strong>
              <ul>
                <li>Email: <a href="mailto:matlakalakabelo1@gmail.com">matlakalakabelo1@gmail.com</a></li>
                <li>Linkedin: <a href="https://linkedin.com/in/kabelo-matlakala-704349273">Kabelo Matlakala</a></li>
                <li>GitHub: <a href="https://github.com/DeLightPlus">DeLightPlus@github</a></li>
                <li>Phone: <a href="tel:+27727138367">+27 72 713 8367</a></li>
              </ul>
            </li>
            <li>
              {/* <strong>Date:</strong> 20/12/2024 */}
              <a href="src/assets/Mr-Kabelo-Peter-Matlakala-Resume-20241024.pdf" download="KP_Matlakala_Resume">
                <button className="resume-btn">
                  {/* <FaDownload size={10} />  */}
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Messages Section */}
      <div className="splash-messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.from === "DLP" ? "DLP" : "user"}>
            {msg.from === "DLP" ? "DLP: " : "You: "} {msg.text}
          </p>
        ))}
        {isTyping && (
          <p className="eliza typing">
            DLP: {typingMessage}
            <span className="cursor">|</span>
          </p>
        )}
        {/* <div ref={bottomRef} /> */}
      </div>

      {/* User Input Box */}
      {showConversation && (
        <div className="input-container">
          <input
            type="text"
            className="input-box"
            placeholder="Type here and press Enter..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleUserInput}
            disabled={isTyping}
          />
        </div>
      )}

      {/* Modal Prompt */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Please answer the questions in the chat before we can proceed</h3>
            <div className="modal-buttons">
              <button onClick={handleOk}>Ok</button>
              <button onClick={handleSkip}>Skip</button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar for Final Message */}
      {/* {isComplete && finalMessageShown && (
        <div className="progress-container">
          <button className="continue-btn" onClick={handleContinue}>
            » continue ▸
          </button>
        </div>
      )} */}
    </div>
  );
};

export default SplashScreen;
