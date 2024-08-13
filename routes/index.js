const express = require('express');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    id: 'a20b9002-160d-436a-8571-cfad45e530d8',
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    id: 'c6f12c90-600f-4ec7-b41b-c60382729c0f',
  },
];

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Post' });
});

router.get('/messages/:messageId', (req, res, next) => {
  const message = messages.find((m) => m.id === req.params.messageId);
  res.render('message', { title: 'Message Detail', message });
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.user,
    added: new Date(),
    id: crypto.randomUUID(),
  });

  res.redirect('/');
});

module.exports = router;
