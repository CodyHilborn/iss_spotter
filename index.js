const { fetchCoordsByIP } = require('./iss');
// fetchMyIP,

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didnt work!', error);
//   }
//   console.log('It worked!', ip);
// });

fetchCoordsByIP("72.137.86.189", (error, coordinates) => {
  if (error) {
    console.log('It didnt work!', error);
  }
  console.log('It worked!', coordinates);
});