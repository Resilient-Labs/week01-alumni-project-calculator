const express       = require('express');
const app           = express();
const port          = process.env.PORT || 8080;
const bodyParser    = require('body-parser');
const path          = require('path');
const routes        = require('./routes');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', routes.indexController.index);

app.post('/calc', routes.calcController.calc);

// app.use("/js",
//   express.static(path.join(__dirname, "..", "node_modules", "axios", "dist")),
//   express.static(path.join(__dirname, "public", "scripts"))
// );
//
// app.use((err, req, res, next) => {
//   console.error('Unhandled serer error', err)
//
//   if(res.headersSent){
//     return next(err);
//   }
//   return res.sendStatus(500)
// });

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
});
