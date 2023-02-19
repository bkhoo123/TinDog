const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const dogsRouter = require('./dogs.js')
const matchesRouter = require('./matches.js')
const messagesRouter = require('./messages.js')
const chatsRouter = require('./chats.js')

const { restoreUser } = require("../../utils/auth.js");

router.get("/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    message: "Successfully got token",
    'XSRF-Token': csrfToken
  });
});

router.use(restoreUser)
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/dogs', dogsRouter)
router.use('/matches', matchesRouter)
router.use('/messages', messagesRouter)

router.use('/chats', chatsRouter)


module.exports = router;