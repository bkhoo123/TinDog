const express = require('express');
const {User, Match, Message, Subscription, SubscriptionPlan, Dog} = require('../../db/models')
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')
const {Op} = require("sequelize")




module.exports = router