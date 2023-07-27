const express = require('express');
const cookieParser =  require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
//const db = require('./config/mongoose');
require("./config/mongoose")

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and script from sub pages in to the lsyout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

// use express router
app.use('/',require('./routs'));

// set up the view engine
app.set('view engine' , 'ejs');
app.set('views' ,'./views');



// app.listen(port, function(err){
//     if(err){
//         console.log('Error in running the server: ${err}');
//     }

//     console .log('Server is running on port: ${port}');
// });


 
 
 
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });


//   mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
   
//     app.listen(port, () => {
//       console.log(`Server started on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });