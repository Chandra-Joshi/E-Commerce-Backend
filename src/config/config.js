import dotenv from "dotenv";

dotenv.config();

const config = {
   port: Number(process.env.PORT) || 5000,
   mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/merndata",
   jwtSecret: process.env.JWT_SECRET || "change_this_secret",
   jwtExpiresIn: process.env.JWT_EXPIRES_IN || "",
   cookieName: process.env.COOKIE_NAME || "authToken",
   cookieMaxAgeMs: Number(process.env.COOKIE_MAX_AGE_MS) || 60 * 60 * 1000,
   nodeEnv: process.env.NODE_ENV || "development",
};

export default config;
