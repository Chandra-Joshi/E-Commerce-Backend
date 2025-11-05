import jwt from 'jsonwebtoken'
const createToken=(data)=>{
    const token=jwt.sign(JSON.stringify(data),"secret");
   return token;
}


async function verifyToken(authToken) {
  return await new Promise((resolve, reject) => {
    jwt.verify(authToken, "secret", (error, data) => {
      if (error) {
        return reject(error); // reject if verification fails
      }
      resolve(data); // resolve with decoded token data
    });
  });
}


export default{
    createToken,
    verifyToken
}