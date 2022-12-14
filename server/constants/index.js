const PORT = process.env.PORT

// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
const MONGO_URI = process.env.MONGO_URI
const MONGO_OPTIONS = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret'

module.exports = {
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  JWT_SECRET,
}
