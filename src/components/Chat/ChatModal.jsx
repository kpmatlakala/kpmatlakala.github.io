import SplashScreen from './SplashScreen';

const isMobile = () => window.innerWidth <= 768;

const ChatModal = ({ chatMaximized, handleChatMaximize, handleChatToggle, handleChatRestore }) => {
  const onMobile = typeof window !== 'undefined' && isMobile();
  const showMaximized = onMobile ? true : chatMaximized;
  return (
    <div className={ `chat-modal ${ showMaximized ? "maximized" : "restored" }`} > 
      <div className="chat-modal-content">
        <div className="chat-header">
          <h2></h2>
          <div className="chat-controls">
            <button
              onClick={handleChatToggle}
              className="control-btn minimize-btn"
            > _
            </button>
            {
              onMobile ? (
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="control-btn download-resume-btn"
                  style={{ textDecoration: 'none', fontSize: '1.2rem', padding: '0 8px' }}
                >
                  ⬇ Resume
                </a>
              ) : (
                showMaximized ? (
                  <button
                    onClick={handleChatRestore}
                    className="control-btn restore-btn"
                  >
                    ◱
                  </button>
                ) : (
                  <button
                    onClick={handleChatMaximize}
                    className="control-btn maximize-btn"
                  >
                    ▢
                  </button>
                )
              )
            }
          </div>
        </div>
        <SplashScreen onFinish={handleChatToggle} />
      </div>
    </div>
  )
}

export default ChatModal