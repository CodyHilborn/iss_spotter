const { nextISSTimesForMyLocation } = require('./iss');

const printFlyOverTimes = function(flyOverTimes) {
  for (const pass of flyOverTimes) {
    // Converting timestamp to human-readable.
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    // Extracting duration from object.
    const duration = pass.duration;
    console.log(`Next ISS pass will be on ${date} for approx. ${duration} seconds! Woohoo!`);
  }
};

// nextISSTimesForMyLocation((error, flyOverTimes) => {
//   if (error) {
//     console.log('It didnt work!', error);
//   }
//   // Use helper function to print the fly-over times as a coherent sentence.
//   printFlyOverTimes(flyOverTimes);
// });

module.exports = { printFlyOverTimes };
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

// fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error, flyOverTimes) => {
//   if (error) {
//     console.log('It didnt work!', error);
//   }
//   console.log('It worked! Here are the flyover times: ', flyOverTimes);
// });
