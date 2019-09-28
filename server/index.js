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

app.post('/api/rooms/:roomId/reviews', (req, res) => {
  const { roomId } = req.params;
  res.redirect(`http://13.57.224.21/api/rooms/${roomId}/reviews`);
});

app.put('/api/rooms/:roomId/reviews/:reviewId', (req, res) => {
  const { roomId, reviewId } = req.params;
  res.redirect(`http://13.57.224.21/api/rooms/${roomId}/reviews/${reviewId}`);
});

app.delete('/api/rooms/:roomId/reviews/:reviewId', (req, res) => {
  const { roomId, reviewId } = req.params;
  res.redirect(`http://13.57.224.21/api/rooms/${roomId}/reviews/${reviewId}`);
});