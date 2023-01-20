const request = require('request');


const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
        if (error) {
          return callback(error, null);
        };

        callback(null, flyOverTimes);
      });
    });
  });
};

// ================================================================================================================


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const IP = JSON.parse(body).ip;
    callback(null, IP);
  });
};

// ================================================================================================================

const fetchCoordsByIP = function(ipString, callback) {
  request(`http://ipwho.is/${ipString}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const parsedCoords = JSON.parse(body);

    if (!parsedCoords.success) {
      const msg = `Success status was ${parsedCoords.success}. Server message says ${parsedCoords.message} when fetching for IP ${parsedCoords.ip}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = parsedCoords;

    callback(null, { latitude, longitude });
  }
  );
};

// ================================================================================================================


const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const parsedFlyOver = JSON.parse(body);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const flyOverTimes = parsedFlyOver.response;
    callback(null, flyOverTimes);
  }
  );
};

// ================================================================================================================

module.exports = { nextISSTimesForMyLocation };

