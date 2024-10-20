import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { FaRobot } from 'react-icons/fa';  // Importar el ícono de bot
import ChatInput from './chatinput';
import { question } from '../api/chatbot';

const ChatbotContainer = styled.div`
  width: 90rem;
  height: 45rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ChatWindow = styled.div`
  overflow-y: scroll;
  flex-grow: 1;
  margin-bottom: 10px;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${props => props.sender === 'bot' ? 'flex-start' : 'flex-end'};
  align-items: center;  // Alinear verticalmente los elementos
  margin-bottom: 10px;
`;

const MessageBubble = styled.div`
  background-color: ${props => props.sender === 'bot' ? '#f1f0f0' : '#6a926b'};
  color: ${props => props.sender === 'bot' ? 'black' : 'white'};
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  white-space: pre-wrap;  /* Para manejar saltos de línea */
  margin: 15px;
  
  p {
    margin: 0;
  }
`;

const BotIcon = styled(FaRobot)`
  margin-right: 10px;
  color: #6a926b;  // Color del ícono de bot
`;

function ChatMessage({ message, sender }) {
    return (
        <MessageContainer sender={sender}>
            {sender === 'bot' && <BotIcon size={24} />}
            <MessageBubble sender={sender}>
                <ReactMarkdown>{message}</ReactMarkdown>
            </MessageBubble>
        </MessageContainer>
    );
}

function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "Hello, we are makers, an e-commerce of technological products, tell me what do you want? :D", sender: "bot" },
    ]);

    const chatWindowRef = useRef(null);

    const handleSendMessage = async (message) => {
        setMessages([...messages, { text: message, sender: "user" }]);

        try {
            const response = await question({ message });
            const botMessage = response.response;
            setMessages((prev) => [...prev, { text: botMessage, sender: "bot" }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages((prev) => [...prev, { text: "Sorry, something went wrong.", sender: "bot" }]);
        }
    };

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <ChatbotContainer>
            <ChatWindow ref={chatWindowRef}>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg.text} sender={msg.sender} />
                ))}
            </ChatWindow>
            <ChatInput onSendMessage={handleSendMessage} />
        </ChatbotContainer>
    );
}

export default Chatbot;
