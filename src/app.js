import express from 'express';
import config from './config/config.js'; 
import route from './router/productRoute.js';
import routes from './router/userRoute.js'
import connectDb from './data/database.js';
import authRoute from './router/authRoute.js';
import logger from './middlewares/logger.js';
import auth from './middlewares/auth.js'
import roleBasedAuth from './middlewares/roleBasedAuth.js';



import { ADMIN } from './constants/roles.js';
const app = express();



app.use(express.json());


app.use(logger);




app.use("/api/products",route);
app.use("/api/users",auth,roleBasedAuth(ADMIN),routes)
app.use("/api/auth",authRoute);
connectDb();
app.listen(config.port, () => {
    console.log(` Server running on port ${config.port}`);
});

