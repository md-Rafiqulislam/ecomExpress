
// all the imports here
import app from './app';
import config from './app/config';

// running the server
app.listen(config.port, () => {
  console.log(`ecoExpress app is listening on port ${config.port}`);
});