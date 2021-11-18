const express = require('express');
const app = express();
var cors = require('cors');
var userRoutes = require('./routes/user');

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});