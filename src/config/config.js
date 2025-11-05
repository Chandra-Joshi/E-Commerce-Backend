// import dotenv from 'dotenv';
// dotenv.config();

// const config={
//      port: process.env.PORT
// }
// export default config;


// src/config/config.js
import dotenv from 'dotenv';
dotenv.config();

const config = {
   ports: process.env.PORT || 3000
};

export default config;
