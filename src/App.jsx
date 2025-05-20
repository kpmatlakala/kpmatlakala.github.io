import "./App.css";
import "./index.css"
import { useState, useEffect } from 'react';

import SplashScreen from "./components/SplashScreen/SplashScreen";
import Portfolio from "./components/portfolio/Portfolio"
import ChatModal from "./components/SplashScreen/ChatModal";
import FloatingGameButton from "./components/Buttons/FloatingGameButton/FloatingGameButton";

function App() 
{
  const [showSplash, setShowSplash] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(true);
  const [chatMaximized, setChatMaximized] = useState(false);

  if(localStorage.getItem("firstMessageShown") && !localStorage.getItem("userName"))
  {
      localStorage.clear();
      window.location.reload();
  }

  // useEffect(() => {
  //   const userName = localStorage.getItem("userName");
  //   const sess_complete = localStorage.getItem("session_complete");

  //     if(userName)
  //     {
  //       if(sess_complete)
  //       {
  //         setShowSplash(false);
  //         setChatMinimized(true);
  //       }        
  //     }
  //     else
  //     {
  //         setShowSplash(true);
  //         setChatMinimized(false);
  //     }
    
  // }, [])
  
  const handleSplashFinish = () => {
    setShowSplash(false);
    setChatMinimized(true);  // Minimize after splash screen
  };

  const handleChatToggle = () => {
    setChatMinimized(!chatMinimized);
    setChatMaximized(false);  // Reset maximize on minimize
  };

  const handleChatMaximize = () => setChatMaximized(true);
  const handleChatRestore = () => setChatMaximized(false);

  return (

    <>
      {
        chatMinimized ? (
          <>
            <button className="minimized-chat"
              onClick={handleChatToggle}> Chat 🤖
            </button>
            <FloatingGameButton />
          </>
        ):(
          <ChatModal  
            chatMaximized={ chatMaximized } 
            handleChatMaximize={ handleChatMaximize }
            handleChatToggle={ handleChatToggle } 
            handleChatRestore={ handleChatRestore }
          />
        )
      }
      
      <Portfolio />
    </>
  )
    

}

export default App;
