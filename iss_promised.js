const request = require('request-promise-native');


const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};



const fetchMyIP = function() {
  // Request now returns a promise, so the function is returning that same promise.
  return request(`https://api.ipify.org?format=json`);
};

const fetchCoordsByIP = function(body) {
  const IP = JSON.parse(body).ip;
  return request(`http://ipwho.is/${IP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { longitude, latitude } = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};

module.exports = { nextISSTimesForMyLocation };

