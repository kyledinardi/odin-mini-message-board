const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.get('/', messageController.getIndex);
router.get('/messages/:messageId', messageController.getMessage);
router.get('/new', messageController.getForm);
router.post('/new', messageController.createMessage);

module.exports = router;
