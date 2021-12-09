const express = require('express');
const app = express();
const port = process.env.PORT || 5000;;

app.use(express.static('client/dist'));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});