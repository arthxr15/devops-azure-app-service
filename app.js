const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello from DevOps with Azure App Service! - Arthur Ribeiro 202410906');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
