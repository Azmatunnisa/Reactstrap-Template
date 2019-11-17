import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveTemp from './components/ResponsiveTemp';
import Grid from './components/GridComponent';
import TextComp from './components/TextComponent';
function App() {
  return (
    <div>
      <ResponsiveTemp/>
    <Grid/> 
   <TextComp/> 
    </div>
    
  );
}

export default App;
