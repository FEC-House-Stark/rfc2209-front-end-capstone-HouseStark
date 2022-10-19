const express = require("express");
const path = require("path");
const axios = require('axios');
require("dotenv").config();



let port = 1128;

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc'


app.get('/*', (req, res) => {
let config = {
  headers: {
    'Authorization': process.env.TOKEN,
  }
}

  axios.get(host_url + req.url , config)
      .then((result) => {
        res.send(result.data)
      })
      .catch((err) => {
        console.log(err)
      })


})

app.post('/*', (req, res) => {
  let config = {
    url: host_url + req.url,
    method: 'post',
    headers: {
      'Authorization': process.env.TOKEN,
    },
    data: req.body
  }

  axios(config)
  .then((result) => {
    res.send(result.data)
  })
  .catch((err) => {
    console.log(err)
    res.send(err)
  })

})



app.listen(port, function () {
  console.log(`listening on port ${port}`);
});