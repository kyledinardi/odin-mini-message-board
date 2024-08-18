const asyncHandler = require('express-async-handler');
const db = require('../db/pool');

exports.getIndex = asyncHandler(async (req, res, next) => {
  const result = await db.query('SELECT * FROM messages;');
  const messages = result.rows;
  res.render('index', { title: 'Mini Messageboard', messages });
});

exports.getMessage = async (req, res, next) => {
  const result = await db.query('SELECT * FROM messages WHERE id = $1;', [
    req.params.messageId,
  ]);

  const message = result.rows[0];
  res.render('message', { title: 'Message Detail', message });
};

exports.getForm = (req, res, next) => {
  res.render('form', { title: 'New Post' });
};

exports.createMessage = async (req, res, next) => {
  await db.query(
    'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
    [req.body.messageText, req.body.user, new Date()],
  );

  res.redirect('/');
};
