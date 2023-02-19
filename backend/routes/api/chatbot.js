const express = require('express');
const {User, Match, Message, Dog, ChatMessage, ChatBot} = require('../../db/models')
const bodyParser = require('body-parser');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')
const {Op} = require("sequelize")




module.exports = router