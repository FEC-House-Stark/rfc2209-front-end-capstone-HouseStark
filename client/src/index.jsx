import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import QandA from './components/Q&A/QandA.jsx';
import Reviews from './components/R&R/Reviews.jsx';
import Related from './components/Related/Related.jsx';

const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/'

const App = () => {
  const [product_id, setProductId] = useState(66643);
  console.log('Initializing app...:', process.env.TOKEN);
  useEffect(() => {
    let config = {
      headers: {
        'Authorization': process.env.TOKEN,
      },
      params: { product_id },
    }


    axios.get(host_url + 'reviews/meta', config)
    .then((result) => {
      console.log('GET reviews/meta result: ', result.data);
    })
    .catch((err) => {
      console.log('Initialize GET ERROR:', err);
    })
  }, []);


  return (
    <div>
      <h1>House Stark</h1>
      <Overview/>
      <QandA/>
      <Reviews/>
      <Related/>
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById('root'));