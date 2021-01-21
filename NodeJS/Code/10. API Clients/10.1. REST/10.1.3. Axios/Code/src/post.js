const axios = require("axios").default;

axios.post('http://localhost:2000/post', {
    id: 2019
  })
  .then(function (response) {
    console.log("response 0: ");
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

function getUserAccount() {
    return axios.post('http://localhost:2000/post');
}

function getUserPermissions() {
    return axios.post('http://localhost:2000/post');
}

Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
        const acct = results[0];
        const perm = results[1];
        console.log("response 1: ");
        console.log(acct.data);
        console.log("response 2: ");
        console.log(perm.data);
    })
    .catch(function(error) {
      console.log(error);  
    });

axios({
    method: 'post',
    url: 'http://localhost:2000/post',
    data: {
        id: '2020'
    }})
    .then((response) => {
        console.log("response 3: ");
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);  
    });

axios("http://localhost:2000/get")
    .then(response => {
        console.log("response 4: ");
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);  
    });

// *******CONFIG DEFAULT ************
// axios.defaults.baseURL = "http://localhost:2000/get";

// *******INTERCEPTORS ************
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

// ***** REMOVE A INTERCEPTORS **********
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

// ***** HANDLING ERROR **********
axios.get('http://localhost:2000/get')
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });

// Use validateStatus
axios.get('http://locahost:2000/get', {
    validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
    }
});

// ***** ENCODE **********
//.........

// ***** NODE JS **********
// use the querystring module as follows:
// or 'URLSearchParams' from 'url module' as follows:
// You can also use the qs library.
// you can use the form-data library as follows:
