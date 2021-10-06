import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

function App() {
    return (
        <>
            <ChatEngine
                height="100vh"
                projectID="69560b1c-5b18-41ce-8e22-01d97414fb27"
                userName="Kosu"
                userSecret="asdfghjkl1"
                renderChatFeed={(chatProps) => <ChatFeed {...chatProps}/>}
            />
        </>
    )
}

export default App;
