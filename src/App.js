import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = (props)=> {
  console.log(props) 
  return (
  <div>
    <h1>Hats Page</h1>
  </div>
  )
  }


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
