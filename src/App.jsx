import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import Header from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;