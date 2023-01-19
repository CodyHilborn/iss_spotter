const { fetchISSFlyOverTimes } = require('./iss');
// fetchMyIP,

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didnt work!', error);
//   }
//   console.log('It worked!', ip);
// });

// fetchCoordsByIP("72.137.86.189", (error, coordinates) => {
//   if (error) {
//     console.log('It didnt work!', error);
//   }
//   console.log('It worked!', coordinates);
// });

fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error, flyOverTimes) => {
  if (error) {
    console.log('It didnt work!', error);
  }
  console.log('It worked! Here are the flyover times: ', flyOverTimes);
});
