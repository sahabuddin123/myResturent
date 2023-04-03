import React from 'react';
import MainComponent from './components/mainComponent';
import {BrowserRouter} from 'react-router-dom'; 
function App() {
  return (
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
  );
}

export default App;
