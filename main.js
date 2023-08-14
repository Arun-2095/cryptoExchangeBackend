require('dotenv').config();
require('./Helper/GlobalMethods');

const Express = require('express');

const cors = require('cors')
const App = Express();

const CurrencyRouter = require("./Modules/Currency/router");

App.use(cors())

App.use(Express.json());


// handling error
App.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({ message: err.message || "something Broken Check ", data: err.data || [] });
  });
  

App.use('/currency', CurrencyRouter);



App.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running in ${process.env.SERVER_PORT}`);
  
  });
  
  // handling uncaughtException
  process.on('uncaughtException', function (err) {
    console.error(new Date().toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
  });