import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <>
            <ChatEngine
                height="100vh"
                projectID="69560b1c-5b18-41ce-8e22-01d97414fb27"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatProps) => <ChatFeed {...chatProps}/>}
            />
        </>
    )
}

export default App;
