import express from 'express';
import userRoute from './src/routes/userRoute.js';

const app = express();
app.use(express.urlencoded({extended: false}));

userRoute(app);

app.get('/', (req, res) => res.send('Hello World from Express!'));

app.listen(3000, console.log("Server On"));
