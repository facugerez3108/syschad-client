import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;
