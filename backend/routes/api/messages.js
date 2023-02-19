const express = require('express');
const {User, Match, Message,  Dog} = require('../../db/models')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')
const {Op} = require("sequelize")


//*Get All Messages of Current User
router.get('/', requireAuth, async (req, res, next) => {
    const userId = req.user.id
    const userMessages = await Message.findAll({
        where: {
            senderId: userId
        }
    })
    return res.json({
        userMessages
    })
})


//* Create a Message from Current User
router.post('/', requireAuth, async (req, res, next) => {
    const userId = req.user.id
    const {recipientId, content} = req.body
    
    const postMessage = await Message.create({
        senderId: userId,
        recipientId,
        content
    })
    return res.json(postMessage)
})

//* Get A Message by Message Id
router.get('/:messageId', requireAuth, async (req, res, next) => {
    const messageId = req.params.messageId
    
    const message = await Message.findByPk(messageId)

    if (!message) {
        res.status(404)
        return res.json({
            message: "Message couldn't be found",
            statusCode: 404
        })
    }

    return res.json({
        message
    })
})

//* Update a Message by MessageId
router.put('/:messageId', requireAuth, async (req, res, next) => {
    const messageId = req.params.messageId
    const userId = req.user.id

    const {content} = req.body

    const updateMessage = await Message.findByPk(messageId)

    if (!updateMessage) {
        res.status(404)
        return res.json({
            message: "Message couldn't be found",
            statusCode: 404
        })
    }

    let messageUserJson = updateMessage.toJSON()

    let senderId = messageUserJson.senderId

    if (userId !== senderId) {
        res.status(403)
        return res.json({
            message: "Only the owner is authorized to update the content of this message"
        })
    }
    
    updateMessage.set({
        content
    })
    
    await updateMessage.save()
    return res.json(updateMessage)
})


//* Delete a Message by MessageId
router.delete('/:messageId', requireAuth, async (req, res, next) => {
    const messageId = req.params.messageId
    const userId = req.user.id

    const deleteMessage = await Message.findByPk(messageId)

    if (!deleteMessage) {
        res.status(404)
        return res.json({
            message: "Message couldn't be found",
            statusCode: 404
        })
    }

    let messageUserJson = deleteMessage.toJSON()

    let senderId = messageUserJson.senderId

    if (userId !== senderId) {
        res.status(403)
        return res.json({
            message: "Only the owner is authorized to Delete the content of this message"
        })
    }

    if (deleteMessage) {
        res.status(200)
        await deleteMessage.destroy()
        return res.json({
            message: "Successfully Deleted",
            statusCode: 200
        })
    }
})








module.exports = router