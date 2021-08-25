const mongoose = require('mongoose');

// make mongodb collection

const userSchema = mongoose.Schema(
  {
    user_email: {
      type: String,
      required: true,
      unique: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
      unique: true,
    },
    user_gender: String,
    user_age: String,
    user_position: String,
    user_language: Array,
  },
  { versionKey: false },
);

const User = mongoose.model('users', userSchema);

// connect to mongoose with env variables
mongoose
  .connect(process.env.MONGO_STRING, {
    useNewUrlParser: true, // 버전 5 이상부터 적용되는 새로운 url parser 사용
    useUnifiedTopology: true, // shard 와 replica set 에 접근
    useCreateIndex: true, // deprecated 된 ensureIndex 대신 createIndex 사용
    useFindAndModify: false, // findOneAndRemove() 과 findOneAndUpdate() 를 분리해서 사용
    dbName: process.env.MONGO_DATABASE, // connection string 에 있는 db 대신 다른 디폴트 db 지정
  })
  .then(() => console.log(`mongoDB connected`))
  .catch((err) => console.error(err));