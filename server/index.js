const newRelic = require('newrelic');
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../src'));
app.use('/:id', express.static(__dirname + '/../src'));
app.use('/listing/:id', express.static(__dirname + '/../src'));
const PORT = 3000;
app.listen(PORT, () => console.log('Proxy set'));

app.get('/api/listing/:listingID/photos', (req, res) => {
  const { listingID } = req.params;
  res.redirect(`http://ec2-54-183-195-148.us-west-1.compute.amazonaws.com:3100/api/listing/${listingID}`);
 });