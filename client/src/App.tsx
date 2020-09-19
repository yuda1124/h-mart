import React from 'react';
import Main from './pages/Main';
import Header from './components/Header';
import Signin from './pages/Signin';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Header />
      <Signin />
    </div>
  );
}

export default App;
