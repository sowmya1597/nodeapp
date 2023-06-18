'use strict';

const express = require('express');
const port = 8080;
const Host = '0.0.0.0';
const server = express();
server.get('/',(req,res)=> {
  res.send('Welcome to SRR CloudExperts Guru');
});
server.listen(port,Host,() => {
  console.log(`Server running on http://${Host}:${port}/`);
});
