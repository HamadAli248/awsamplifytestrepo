import express from 'express';
import path from 'path';
import expressReactViews from 'express-react-views';

const app = express();
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine())

app.get('/helloworld', (req, res) => {
  res.send('Hello World');
});
app.get('/',(req,res)=>{
    const main = path.resolve('./frontend/src/App.js')
    res.render(main)
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
