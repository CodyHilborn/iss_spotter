const { fetchMyIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didnt work!', error);
  }
  console.log('It worked!', ip);
});