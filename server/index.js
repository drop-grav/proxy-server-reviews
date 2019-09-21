const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../src'));
app.use('/:id', express.static(__dirname + '/../src'));
const PORT = 3001;
app.listen(PORT, () => console.log('Proxy set'));