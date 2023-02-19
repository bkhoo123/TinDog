import React from 'react';
import ChatWidget from './ChatWidget';
import Container from 'react-bootstrap/esm/Container';

function ChatPage() {
  return (
    <Container style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'montserrat'}}>Welcome to the Chat Page</h1>
      <h1 style={{fontFamily: 'montserrat'}}>Live Support Chat</h1>
      <ChatWidget />
    </Container>
  );
}

export default ChatPage;






