import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

const MessageBubble = styled.div`
  background-color: ${(props) => (props.sender === 'user' ? '#4CAF50' : '#f1f1f1')};
  color: ${(props) => (props.sender === 'user' ? 'white' : 'black')};
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
  word-wrap: break-word;
`;

function ChatMessage({ message, sender }) {
    return (
        <MessageContainer sender={sender}>
            <MessageBubble sender={sender}>
                {message}
            </MessageBubble>
        </MessageContainer>
    );
}

export default ChatMessage;
