// src/components/ChatBot.js
import React from 'react';
import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './chatBot.css';

const ChatBot = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="chat-bot"
            >
                <Typography variant="h3" gutterBottom>
                    Smart Chat Bot
                </Typography>
                <div className="chat-container">
                    <iframe
                        src="https://your-chat-bot-url.com"
                        title="Chat Bot"
                        width="100%"
                        height="500"
                        frameBorder="0"
                    ></iframe>
                </div>
            </motion.div>
        </Container>
    );
};

export default ChatBot;
