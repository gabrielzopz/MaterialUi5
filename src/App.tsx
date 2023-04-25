import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from './shared/components';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
          
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};


