import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/contexts/themeConctext';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="antialiased">
          <Dashboard />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;