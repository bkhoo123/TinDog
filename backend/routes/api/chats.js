const express = require('express');
const {User, Match, Message, Subscription, SubscriptionPlan, Dog, ChatMessage, ChatBot} = require('../../db/models')
const bodyParser = require('body-parser');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')
const {Op} = require("sequelize")

//! OpenAI
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);




//* In-memory store for messages
const messages = [];

//* Endpoint for user creating a message for chat gpt
router.post('/', async (req, res, next) => {
    const userId = req.user.id
    const chatBotId = 1
    const {message}= req.body
    messages.push(message)
    console.log(`Received message from ${message.sender}: ${message.text}`);

    const postChat = await ChatMessage.create({
        chatBotId, 
        userId, 
        message
    })
    return res.json(postChat)
})



//* Endpoint for retrieving chats from current user
router.get('/', async (req, res, next) => {
    const usersId = req.user.id
    const userChats = await ChatMessage.findAll({
        where: {
            userId: usersId
        }
    })

    return res.json({
        userChats,
        messages
    })
})


//* Endpoint for Chat GPT to user
router.post('/gpt', async (req, res, next) => {
    const chatBotId = 1
    const userId = req.user.id
    try {
        const userMessage = req.body.message

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\nThe AI assistance is a support bot helping users on a dog matchmaking dating website. \n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: " + userMessage,
            temperature: 0.5,
            max_tokens: 100,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            n: 2,

        });

        // const response = await openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: userMessage,
        //     max_tokens: 50,
        //     temperature: 1,
        //     n: 2,
        //     stop: "\n"
        // });
        // Get the bot's response from the completions API response
        const botResponse = response.data.choices[0].text.trim();

        return res.json({
            botResponse,
            userId,
            chatBotId
        })
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error')
    }
})



//* Endpoint for Deleting Specific Chats from current User 



module.exports = router