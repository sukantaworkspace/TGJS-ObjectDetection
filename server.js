function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    /*if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }*/
    next();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(requireHTTPS);
app.use('/',express.static('./dist/TFJS-ObjectDetection'));

app.listen(port,()=>
{
    console.log('app is started of listening to the port', port);
});