const express = require('express');
const app = express();
var cors = require('cors');
var apiRoutes = require('./routes');

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});