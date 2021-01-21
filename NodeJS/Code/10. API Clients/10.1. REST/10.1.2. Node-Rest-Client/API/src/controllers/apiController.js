const getAll = (req, res) => {
  return res.json({
    action: "GET",
    username: "thanhhai",
    love: "kimngan",
    DoB: "23/03/1999"
  });
};

const postAll = (req, res) => {
  return res.json({
    action: "POST",
    username: "thanhhai",
    love: "kimngan",
    DoB: "23/03/1999"
  });
};

const putAll = (req, res) => {
  req.on('requestTimeout', function (req) {
      console.log('request has expired');
      req.abort();
  });
  
  req.on('responseTimeout', function (res) {
      console.log('response has expired');
  
  });
  
  //it's usefull to handle request errors to avoid, for example, socket hang up errors on request timeouts
  req.on('error', function (err) {
      console.log('request error', err);
  });

  return res.json({
    id: req.params.id,
    action: "PUT",
    username: "thanhhai",
    love: "kimngan",
    DoB: "23/03/1999"
  });
};

module.exports = {
  getAll,
  postAll,
  putAll
}
