import React, { useState } from 'react';
import { FaPaperPlane, FaPaperclip, FaSearch, FaCircle } from 'react-icons/fa';
import Card from '../components/Card';
import './styles/Chat.css';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const conversations = [
    {
      id: 1,
      user: 'ProGamer_99',
      avatar: '🎮',
      lastMessage: 'I can start the boost tomorrow',
      timestamp: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      user: 'LeagueMaster',
      avatar: '🏆',
      lastMessage: 'Session was great! Thanks',
      timestamp: '1h ago',
      unread: 0,
      online: true
    },
    {
      id: 3,
      user: 'HeadShot_King',
      avatar: '🎯',
      lastMessage: 'Payment received',
      timestamp: '3h ago',
      unread: 0,
      online: false
    },
    {
      id: 4,
      user: 'ApexChampion',
      avatar: '⚡',
      lastMessage: 'When can we schedule?',
      timestamp: '1d ago',
      unread: 1,
      online: false
    },
  ];

  const messages = {
    1: [
      { id: 1, sender: 'ProGamer_99', text: 'Hi! I saw your job posting for Valorant boost', time: '10:30 AM', mine: false },
      { id: 2, sender: 'You', text: 'Hello! Yes, I need to go from Silver 3 to Platinum 1', time: '10:32 AM', mine: true },
      { id: 3, sender: 'ProGamer_99', text: 'I can do that for $100. Usually takes 2-3 days', time: '10:33 AM', mine: false },
      { id: 4, sender: 'You', text: 'Sounds good! Can you stream the sessions?', time: '10:35 AM', mine: true },
      { id: 5, sender: 'ProGamer_99', text: 'Absolutely! I can start the boost tomorrow', time: '10:37 AM', mine: false },
    ],
  };

  const currentMessages = messages[selectedChat] || [];

  const handleSendMessage = () => {
    if (message.trim()) {
      // In real app, would send message to backend
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        {/* Conversations Sidebar */}
        <aside className="chat-sidebar">
          <div className="chat-sidebar-header">
            <h2 className="chat-sidebar-title">Messages</h2>
          </div>

          <div className="chat-search">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="chat-search-input"
            />
          </div>

          <div className="conversations-list">
            {conversations.map(conv => (
              <div
                key={conv.id}
                className={`conversation-item ${selectedChat === conv.id ? 'active' : ''}`}
                onClick={() => setSelectedChat(conv.id)}
              >
                <div className="conversation-avatar">
                  {conv.avatar}
                  {conv.online && <FaCircle className="online-indicator" />}
                </div>
                <div className="conversation-content">
                  <div className="conversation-header">
                    <span className="conversation-user">{conv.user}</span>
                    <span className="conversation-time">{conv.timestamp}</span>
                  </div>
                  <div className="conversation-footer">
                    <p className="conversation-last-message">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="unread-badge">{conv.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <main className="chat-main">
          {selectedChat ? (
            <>
              <div className="chat-header">
                <div className="chat-header-user">
                  <div className="chat-avatar">
                    {conversations.find(c => c.id === selectedChat)?.avatar}
                    {conversations.find(c => c.id === selectedChat)?.online && (
                      <FaCircle className="online-indicator-large" />
                    )}
                  </div>
                  <div>
                    <div className="chat-header-name">
                      {conversations.find(c => c.id === selectedChat)?.user}
                    </div>
                    <div className="chat-header-status">
                      {conversations.find(c => c.id === selectedChat)?.online ? 'Online' : 'Offline'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat-messages">
                {currentMessages.map(msg => (
                  <div
                    key={msg.id}
                    className={`message ${msg.mine ? 'message-mine' : 'message-theirs'}`}
                  >
                    <div className="message-bubble">
                      <p className="message-text">{msg.text}</p>
                      <span className="message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </div>

              <div className="chat-input-container">
                <button className="attach-btn">
                  <FaPaperclip />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="chat-input"
                />
                <button 
                  className="send-btn"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </>
          ) : (
            <div className="chat-empty">
              <div className="empty-icon">💬</div>
              <h3>Select a conversation</h3>
              <p>Choose a conversation from the left to start messaging</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Chat;

