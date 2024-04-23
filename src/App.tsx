import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/home';
import Login from './pages/login';
import UserList from './pages/admin/usuarios/user-list';
import EditUser from './pages/admin/usuarios/edit-user';

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
          <Route path='/gestion-alumnos/editar' element={<EditUser />} />
        </Routes>
      </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;
