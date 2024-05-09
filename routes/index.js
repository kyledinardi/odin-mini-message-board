const express = require('express');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Post' });
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect('/')
});

module.exports = router;
