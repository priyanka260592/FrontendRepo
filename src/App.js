import React from 'react';
import axios from 'axios';

function sayHello() {
  const config = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*'
    }};
    const res =  axios.get('http://localhost:8000/actions/')
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

}
// Usage
const App=() =>(
  <div>

  <button onClick={sayHello}>Default</button>
  </div>
)

export default App


