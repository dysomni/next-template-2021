// const app = require('express')();
// const server = require('http').Server(app);

// const next = require('next');
// const _ = require('lodash')

// const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({dev});
// const nextHandler = nextApp.getRequestHandler();

// let port = process.env.WEB_PORT || 8080;

// nextApp.prepare().then(() => {
//   app.get('*', (req, res) => {
//     return nextHandler(req, res);
//   })

//   server.listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on https://localhost:${port}`);
//   })
// })