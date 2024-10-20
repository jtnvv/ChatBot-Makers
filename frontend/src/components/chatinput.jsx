import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const InputField = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
`;

function ChatInput({ onSendMessage }) {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <InputContainer>
            <InputField
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Write a message..."
            />
            <SendButton onClick={handleSend}>Send</SendButton>
        </InputContainer>
    );
}

export default ChatInput;
