import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute'

dotenv.config();

const mongodbURL = config.MONGODB_URL;
mongoose.connect(mongodbURL, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

// app.use('/signin', userRoute);

app.get('/api/products', (req, res) => {
    res.send(data.products);
});


app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(data.products.find(x => x._id === productId));
});


app.listen(5000, () => { console.log('Listening on port 5000...') });
