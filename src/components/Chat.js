// src/components/Chat.js
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/Chat.module.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('content, created_at, users (email)');
    if (error) {
      console.error('Error fetching messages:', error.message);
    } else {
      setMessages(data);
    }
  };

  const handleSendMessage = async () => {
    const user = supabase.auth.getUser();
    if (user) {
      const { error } = await supabase.from('messages').insert([{ content: newMessage, user_id: user.id }]);
      if (error) {
        console.error('Error sending message:', error.message);
      } else {
        setNewMessage('');
        fetchMessages();
      }
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages && messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className={styles.message}>
              <strong>{message.users.email}:</strong> {message.content}
            </div>
          ))
        ) : (
          <div>No messages yet.</div>
        )}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSendMessage} className={styles.button}>
        Send
      </button>
    </div>
  );
};

export default Chat;
