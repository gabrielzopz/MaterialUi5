import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard, ListagemDePessoas, DetalheDePessoas } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',              
        path: '/Página inicial',
        label: 'Página inicial',  
      },
      {
        icon: 'people',              
        path: '/pessoas',
        label: 'Pessoas',  
      },
    ]);



  },[]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />      

      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/cidades/detalhe/:id" element={<DetalheDePessoas />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};