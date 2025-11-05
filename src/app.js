import express from 'express';
import config from './config/config.js'; //  Make sure the file exists and has .js
import route from './router/productRoute.js';
import routes from './router/userRoute.js'
import connectDb from './data/database.js';
import authRoute from './router/authRoute.js';
import logger from './middlewares/logger.js';
import auth from './middlewares/auth.js'
import roleBasedAuth from './middlewares/roleBasedAuth.js';


import auth1Route from './router/auth1Router.js';
import { ADMIN } from './constants/roles.js';
const app = express();



app.use(express.json());

// app.use(bodyParser.json());
app.use(logger);
// app.use(auth);

app.use("/api/user1",auth1Route);

app.use("/api/products",route);
app.use("/api/users",auth,roleBasedAuth(ADMIN),routes)
app.use("/api/auth",authRoute);
connectDb();
app.listen(config.port || 5000, () => {
    console.log(` Server running on port ${config.port || 5000}`);
});

// //  Correct route path
// app.get('/', (req, res) => {
//     res.json({
//         port: config.port
//     });
// });

// // Consistent error format
// app.get('/not', (req, res) => {
//     res.status(404).json({
//         error: "Page not found - 404 error"
//     });
// });

// app.get('/product', (req, res) => {
//     try {
//         const products = fs.readFileSync('./src/data/product.json', 'utf-8');
//         const jsobj = JSON.parse(products);
//         res.json(jsobj);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to read product data" });
//     }
// });

//learn advance routing (dynamic routing)
// app.get('/profile/:name', (req,res)=>{
//     res.send(`hello from ${req.params.name}`);
// })

// app.get('/profile/hari',(req,res)=>{ learing dynamic routing
//     res.send("hello from hari ");
// })








// app.listen(config.ports, () => {
//     console.log(`Server is running on port ${config.port}`);
// });



// app.listen(5000, () => {
//     console.log(` Server is running on port`);
// });


