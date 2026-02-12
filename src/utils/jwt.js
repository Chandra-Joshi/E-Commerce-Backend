import jwt from "jsonwebtoken";
import config from "../config/config.js";

const createToken = (data) => {
  const options = config.jwtExpiresIn ? { expiresIn: config.jwtExpiresIn } : undefined;
  const token = jwt.sign(JSON.stringify(data), config.jwtSecret, options);
  return token;
};
async function verifyToken(authToken) {
  return await new Promise((resolve, reject) => {
    jwt.verify(authToken, config.jwtSecret, (error, data) => {
      if (error) {
        return reject(error); // reject if verification fails
      }
      resolve(data); // resolve with decoded token data
    });
  });
}


export default {
  createToken,
  verifyToken,
};