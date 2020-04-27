const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody yiqi change!");
});
 
module.exports.app = app;
