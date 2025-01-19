import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://balurides:Baby12345@cluster0.6ovcb.mongodb.net/smartApp?retryWrites=true&w=majority",
  "bodyLimit": "100kb"
}
