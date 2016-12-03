import express from 'express';
const app = express();
import path from 'path'; 
const publicPath = path.join( __dirname, 'public' );
import food from './routes/food';
import bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static( publicPath ) );

app.use('/api/food', food);

app.use(function(err, req, res, next) {
  res.status(500).send(err);
});
app.use(function(req, res, next) {
  res.status(404).send('404, no page found: ' + req.url);
});

export default app;