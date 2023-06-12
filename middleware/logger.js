const winston = require('winston');
const { MongoDB } = require('winston-mongodb');

const logger = winston.createLogger({
  transports: [
    new MongoDB({
      db: 'mongodb+srv://sachin:chavan@cluster0.1kuxcjb.mongodb.net/weather?retryWrites=true&w=majority',
      options: {
        useUnifiedTopology: true
      }
    })
  ]
});
module.exports={logger}