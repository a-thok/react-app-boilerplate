const express = require('express');

const server = express();

server.get('/todos', (req, res) => {
  res.status(200).send({
    success: true,
    result: [
      { time: Date.now(), content: '完善项目开发规范文档', completed: false },
      { time: Date.now() + 1, content: '观看锦织圭的比赛', completed: false },
    ],
  });
});

server.listen(4000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('mock server is listening at localhost:4000');
});
