function getWeather(city, callback) {
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, response, body) {
    if (err) {
      // network error
      callback(err);
      return;
    }
    // convert the body in JSON format to a JS object
    try {
      var data = JSON.parse(body);
      // if they couldn't find city in DB, 404 code
      // 404 from service, because city is not in database
      if (Number(data.cod) >= 400) {
        callback(new Error(data.message));
        return;
      }

    } catch (jsonParseError) {
      // json parse error
      callback(jsonParseError);
      return;
    }
    // call the callback, passing null for err to signal success
    callback(null, data);
  });
}

getWeather('Atlanta, GA', function(err, data) {
  if (err) {
    // handle error
  } else {
    // read info from data
  }
});
