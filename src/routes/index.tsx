import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',              
        path: '/Página inicial',
        label: 'Página inicial',  
      }
    ]);



  },[]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Menu</Button>} />      

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};