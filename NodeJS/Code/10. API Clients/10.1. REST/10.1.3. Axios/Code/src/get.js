const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:2000/get?id=2000')
  .then(function (response) {
    // handle success
    console.log("response 1: ");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


// Optionally the request above could also be done as
axios.get('http://localhost:2000/get', {
    params: {
      id: 12345
    }
  })
  .then(function (response) {
    console.log("response 2: ");
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
(async () => {
  try {
    const response = await axios.get('http://localhost:2000/get?id=2000');
    console.log("response 3: ");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})();
