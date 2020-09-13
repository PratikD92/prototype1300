export default {
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/tiffinicDB",
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}