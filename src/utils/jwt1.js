import jwt from 'jsonwebtoken'

function createtoken(data){
const tokens=jwt.sign(JSON.stringify(data),"secret");
return tokens;
// console.log(tokens)
};
// export default{createtoken}



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


export default {createtoken,verifyToken};