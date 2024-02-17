import React, { useEffect, useState } from 'react';

const SSEComponent = () => {
    const [messages, setMessages] = useState<string[]>([]); // Specify type as string[]

    useEffect(() => {
        // EventSource use to listen of stream that return from backend
        // 
        const eventSource = new EventSource('http://localhost:5009/event');

        eventSource.onmessage = (event:MessageEvent) => {
            const data = JSON.parse(event.data);
            console.log("🚀 ~ useEffect ~ event:", event)
            setMessages(prevMessages => [...prevMessages, data.message]);
        };

        eventSource.onerror = (error:Event) => {
            console.error('SSE error:', error);
        };
        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h1>Server-Sent Events Example</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>Message from server: {message}</li>
                ))}
            </ul>
        </div>
    );
};

export default SSEComponent;
