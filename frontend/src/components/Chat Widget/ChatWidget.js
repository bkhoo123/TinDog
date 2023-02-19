import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './chat.css'

import { csrfFetch } from '../../store/csrf';

const apiKey = "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"

function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [switchUser, setSwitchUser] = useState(false)
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [...prevMessages, inputValue]);

    const data = await sendMessage(inputValue)
    
    console.log(data, 'data')
    setInputValue('');
  };

  const handleRemoveChat = () => {
    setMessages([])
  }

  const sendMessage = async (message) => {
    try {
      const response = await csrfFetch('/api/chats/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message})
      })

      const data = await response.json()
      setMessages((prevMessages) => [...prevMessages, data.botResponse]);
      return data
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <Container style={{paddingTop: 10, textAlign: 'center'}}>
      
      <div className="chat-bot" >
        {messages.map((message, index) => (
          <Card className={index % 2 === 0 ? 'user' : 'chatbot' } style={{ width: '30rem' }} key={index}>
            <Card.Title>{index % 2 === 0 ? "User" : "ChatGPT"}</Card.Title>
            {message}
            
          </Card>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          style={{height: 150, width: 300, borderRadius: 5, textAlign: 'center'}}
          type="textarea"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message here"
        />
      <div>

      </div>
        <div style={{position: 'absolute', left: 20, right: 20}}>
        <Button style={{marginTop: 15}} type="submit">Send</Button>
        <Button style={{marginLeft: 10, marginTop: 15}} onClick={handleRemoveChat}>Remove Chat History</Button>
        </div>
     
        
      </form>
      
      
    </Container>
  );
}

export default ChatWidget;