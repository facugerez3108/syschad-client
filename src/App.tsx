import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import UserList from './pages/admin/usuarios/user-list';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Router>
        <Routes>
          {/*ADMIN ROUTES */}
          <Route  path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path='/gestion-alumnos' element={<UserList />} />
        </Routes>
      </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;
